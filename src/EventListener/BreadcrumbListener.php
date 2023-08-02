<?php

declare(strict_types=1);

/*
 * This file is part of Oveleon Contao Glossary Bundle.
 *
 * @package     contao-glossary-bundle
 * @license     AGPL-3.0
 * @author      Fabian Ekert        <https://github.com/eki89>
 * @author      Sebastian Zoglowek  <https://github.com/zoglo>
 * @copyright   Oveleon             <https://www.oveleon.de/>
 */

namespace Oveleon\ContaoGlossaryBundle\EventListener;

use Contao\Config;
use Contao\CoreBundle\Exception\RouteParametersException;
use Contao\Input;
use Contao\StringUtil;
use Oveleon\ContaoGlossaryBundle\Glossary;
use Oveleon\ContaoGlossaryBundle\Model\GlossaryItemModel;

/**
 * @internal
 */
class BreadcrumbListener
{
    public function __invoke(array $items): array
    {
        $alias = Input::get('items', false, true);

        // Set the item from the auto_item parameter
        if (!isset($_GET['items']) && isset($_GET['auto_item']) && Config::get('useAutoItem'))
        {
            $alias = Input::get('auto_item', false, true);
        }

        if ($alias && ($glossaryItem = GlossaryItemModel::findPublishedByIdOrAlias($alias)) !== null)
        {
            $breadcrumbItem = [
                'isRoot'   => false,
                'isActive' => true,
                'href'     => Glossary::generateUrl($glossaryItem),
                'title'    => StringUtil::specialchars($glossaryItem->keyword),
                'link'     => $glossaryItem->keyword,
                'data'     => $glossaryItem->row(),
                'class'    => '',
            ];

            try {
                $href = $GLOBALS['objPage']->getFrontendUrl();
            } catch (RouteParametersException $e) {
                $href = '';
            }

            if (!strlen($href))
            {
                // In case the route alias already exists on the parent page, and it requires an item, simply replace the item
                $items[\count($items) - 1] = $breadcrumbItem;
            }
            else
            {
                $items[\count($items) - 1]['href'] = $href;
                $items[\count($items) - 1]['isActive'] = false;

                // Append new item
                $items[] = $breadcrumbItem;
            }
        }

        return $items;
    }
}
