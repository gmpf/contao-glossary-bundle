<?php

declare(strict_types=1);

/*
 * This file is part of Oveleon Contao Glossary Bundle.
 *
 * @package     contao-glossary-bundle
 * @license     AGPL-3.0
 * @author      Sebastian Zoglowek    <https://github.com/zoglo>
 * @author      Fabian Ekert          <https://github.com/eki89>
 * @author      Daniele Sciannimanica <https://github.com/doishub>
 * @copyright   Oveleon               <https://www.oveleon.de/>
 */

use Contao\Backend;
use Contao\BackendUser;
use Contao\CoreBundle\Exception\AccessDeniedException;
use Contao\Database;
use Contao\DataContainer;
use Contao\Input;
use Contao\System;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

// Dynamically add the permission check and parent table
if ('glossary' === Input::get('do'))
{
    $GLOBALS['TL_DCA']['tl_content']['config']['ptable'] = 'tl_glossary_item';
    array_unshift($GLOBALS['TL_DCA']['tl_content']['config']['onload_callback'], ['tl_content_glossary', 'checkPermission']);
}

class tl_content extends Backend
{
    /**
     * Check permissions to edit table tl_content.
     */
    public function checkPermission(DataContainer $dc): void
    {
        $db = Database::getInstance();
        $user = BackendUser::getInstance();

        if ($user->isAdmin)
        {
            return;
        }

        // Set the root IDs
        if (empty($user->glossarys) || !is_array($user->glossarys))
        {
            $root = [0];
        }
        else
        {
            $root = $user->glossarys;
        }

        // Check the current action
        switch (Input::get('act'))
        {
            case '': // empty
            case 'paste':
            case 'select':
                // Check access to the glossary item
                $this->checkAccessToElement($dc->currentPid, $root, true);
                break;

            case 'create':
                // Check access to the parent element if a content element is created
                $this->checkAccessToElement((int) Input::get('pid'), $root, 2 === (int) Input::get('mode'));
                break;

            case 'editAll':
            case 'deleteAll':
            case 'overrideAll':
            case 'cutAll':
            case 'copyAll':
                // Check access to the parent element if a content element is moved
                if (in_array(Input::get('act'), ['cutAll', 'copyAll'], true))
                {
                    $this->checkAccessToElement((int) Input::get('pid'), $root, 2 === (int) Input::get('mode'));
                }

                $objCes = $db->prepare("SELECT id FROM tl_content WHERE ptable='tl_glossary_item' AND pid=?")
                    ->execute($dc->currentPid)
                ;

                /** @var SessionInterface $objSession */
                $objSession = System::getContainer()->get('request_stack')->getSession();

                $session = $objSession->all();
                $session['CURRENT']['IDS'] = array_intersect((array) $session['CURRENT']['IDS'], $objCes->fetchEach('id'));
                $objSession->replace($session);
                break;

            case 'cut':
            case 'copy':
                // Check access to the parent element if a content element is moved
                $this->checkAccessToElement((int) Input::get('pid'), $root, 2 === (int) Input::get('mode'));
                // no break

            default:
                // Check access to the content element
                $this->checkAccessToElement((int) Input::get('id'), $root);
                break;
        }
    }

    /**
     * Check access to a particular content element.
     *
     * @param int   $id
     * @param array $root
     * @param bool  $blnIsPid
     *
     * @throws AccessDeniedException
     */
    protected function checkAccessToElement($id, $root, $blnIsPid = false): void
    {
        $db = Database::getInstance();

        if ($blnIsPid)
        {
            $objArchive = $db->prepare('SELECT a.id, n.id AS nid FROM tl_glossary_item n, tl_glossary a WHERE n.id=? AND n.pid=a.id')
                ->limit(1)
                ->execute($id)
            ;
        }
        else
        {
            $objArchive = $db->prepare('SELECT a.id, n.id AS nid FROM tl_content c, tl_glossary_item n, tl_glossary a WHERE c.id=? AND c.pid=n.id AND n.pid=a.id')
                ->limit(1)
                ->execute($id)
            ;
        }

        // Invalid ID
        if ($objArchive->numRows < 1)
        {
            throw new AccessDeniedException('Invalid glossary item content element ID '.$id.'.');
        }

        // The glossary is not mounted
        if (!in_array($objArchive->id, $root, true))
        {
            throw new AccessDeniedException('Not enough permissions to modify article ID '.$objArchive->nid.' in glossary ID '.$objArchive->id.'.');
        }
    }
}
