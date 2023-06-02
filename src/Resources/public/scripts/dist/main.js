var Glossary;(()=>{var e={71:(e,t,o)=>{"use strict";function r(){let e={},t=0,o=0,n=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],o++);let i=function(o){for(let n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t&&"[object Object]"===Object.prototype.toString.call(o[n])?e[n]=r(1,e[n],o[n]):e[n]=o[n])};for(;o<n;o++)i(arguments[o]);return e}function n(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function i(e){return e instanceof n(e).Element||e instanceof Element}function s(e){return e instanceof n(e).HTMLElement||e instanceof HTMLElement}function a(e){return"undefined"!=typeof ShadowRoot&&(e instanceof n(e).ShadowRoot||e instanceof ShadowRoot)}o.r(t),o.d(t,{Glossary:()=>pe});var c=Math.max,l=Math.min,d=Math.round;function f(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function p(){return!/^((?!chrome|android).)*safari/i.test(f())}function u(e,t,o){void 0===t&&(t=!1),void 0===o&&(o=!1);var r=e.getBoundingClientRect(),a=1,c=1;t&&s(e)&&(a=e.offsetWidth>0&&d(r.width)/e.offsetWidth||1,c=e.offsetHeight>0&&d(r.height)/e.offsetHeight||1);var l=(i(e)?n(e):window).visualViewport,f=!p()&&o,u=(r.left+(f&&l?l.offsetLeft:0))/a,h=(r.top+(f&&l?l.offsetTop:0))/c,m=r.width/a,v=r.height/c;return{width:m,height:v,top:h,right:u+m,bottom:h+v,left:u,x:u,y:h}}function h(e){var t=n(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function m(e){return e?(e.nodeName||"").toLowerCase():null}function v(e){return((i(e)?e.ownerDocument:e.document)||window.document).documentElement}function g(e){return u(v(e)).left+h(e).scrollLeft}function y(e){return n(e).getComputedStyle(e)}function b(e){var t=y(e),o=t.overflow,r=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function w(e,t,o){void 0===o&&(o=!1);var r,i,a=s(t),c=s(t)&&function(e){var t=e.getBoundingClientRect(),o=d(t.width)/e.offsetWidth||1,r=d(t.height)/e.offsetHeight||1;return 1!==o||1!==r}(t),l=v(t),f=u(e,c,o),p={scrollLeft:0,scrollTop:0},y={x:0,y:0};return(a||!a&&!o)&&(("body"!==m(t)||b(l))&&(p=(r=t)!==n(r)&&s(r)?{scrollLeft:(i=r).scrollLeft,scrollTop:i.scrollTop}:h(r)),s(t)?((y=u(t,!0)).x+=t.clientLeft,y.y+=t.clientTop):l&&(y.x=g(l))),{x:f.left+p.scrollLeft-y.x,y:f.top+p.scrollTop-y.y,width:f.width,height:f.height}}function x(e){var t=u(e),o=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:r}}function O(e){return"html"===m(e)?e:e.assignedSlot||e.parentNode||(a(e)?e.host:null)||v(e)}function E(e){return["html","body","#document"].indexOf(m(e))>=0?e.ownerDocument.body:s(e)&&b(e)?e:E(O(e))}function H(e,t){var o;void 0===t&&(t=[]);var r=E(e),i=r===(null==(o=e.ownerDocument)?void 0:o.body),s=n(r),a=i?[s].concat(s.visualViewport||[],b(r)?r:[]):r,c=t.concat(a);return i?c:c.concat(H(O(a)))}function _(e){return["table","td","th"].indexOf(m(e))>=0}function T(e){return s(e)&&"fixed"!==y(e).position?e.offsetParent:null}function C(e){for(var t=n(e),o=T(e);o&&_(o)&&"static"===y(o).position;)o=T(o);return o&&("html"===m(o)||"body"===m(o)&&"static"===y(o).position)?t:o||function(e){var t=/firefox/i.test(f());if(/Trident/i.test(f())&&s(e)&&"fixed"===y(e).position)return null;var o=O(e);for(a(o)&&(o=o.host);s(o)&&["html","body"].indexOf(m(o))<0;){var r=y(o);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return o;o=o.parentNode}return null}(e)||t}var j="top",A="bottom",D="right",L="left",k="auto",N=[j,A,D,L],S="start",M="end",P="viewport",I="popper",W=N.reduce((function(e,t){return e.concat([t+"-"+S,t+"-"+M])}),[]),B=[].concat(N,[k]).reduce((function(e,t){return e.concat([t,t+"-"+S,t+"-"+M])}),[]),R=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function V(e){var t=new Map,o=new Set,r=[];function n(e){o.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!o.has(e)){var r=t.get(e);r&&n(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){o.has(e.name)||n(e)})),r}var q={placement:"bottom",modifiers:[],strategy:"absolute"};function F(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function G(e){void 0===e&&(e={});var t=e,o=t.defaultModifiers,r=void 0===o?[]:o,n=t.defaultOptions,s=void 0===n?q:n;return function(e,t,o){void 0===o&&(o=s);var n,a,c={placement:"bottom",orderedModifiers:[],options:Object.assign({},q,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},l=[],d=!1,f={state:c,setOptions:function(o){var n="function"==typeof o?o(c.options):o;p(),c.options=Object.assign({},s,c.options,n),c.scrollParents={reference:i(e)?H(e):e.contextElement?H(e.contextElement):[],popper:H(t)};var a,d,u=function(e){var t=V(e);return R.reduce((function(e,o){return e.concat(t.filter((function(e){return e.phase===o})))}),[])}((a=[].concat(r,c.options.modifiers),d=a.reduce((function(e,t){var o=e[t.name];return e[t.name]=o?Object.assign({},o,t,{options:Object.assign({},o.options,t.options),data:Object.assign({},o.data,t.data)}):t,e}),{}),Object.keys(d).map((function(e){return d[e]}))));return c.orderedModifiers=u.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,o=e.options,r=void 0===o?{}:o,n=e.effect;if("function"==typeof n){var i=n({state:c,name:t,instance:f,options:r});l.push(i||function(){})}})),f.update()},forceUpdate:function(){if(!d){var e=c.elements,t=e.reference,o=e.popper;if(F(t,o)){c.rects={reference:w(t,C(o),"fixed"===c.options.strategy),popper:x(o)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<c.orderedModifiers.length;r++)if(!0!==c.reset){var n=c.orderedModifiers[r],i=n.fn,s=n.options,a=void 0===s?{}:s,l=n.name;"function"==typeof i&&(c=i({state:c,options:a,name:l,instance:f})||c)}else c.reset=!1,r=-1}}},update:(n=function(){return new Promise((function(e){f.forceUpdate(),e(c)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(n())}))}))),a}),destroy:function(){p(),d=!0}};if(!F(e,t))return f;function p(){l.forEach((function(e){return e()})),l=[]}return f.setOptions(o).then((function(e){!d&&o.onFirstUpdate&&o.onFirstUpdate(e)})),f}}var J={passive:!0};function U(e){return e.split("-")[0]}function X(e){return e.split("-")[1]}function z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Y(e){var t,o=e.reference,r=e.element,n=e.placement,i=n?U(n):null,s=n?X(n):null,a=o.x+o.width/2-r.width/2,c=o.y+o.height/2-r.height/2;switch(i){case j:t={x:a,y:o.y-r.height};break;case A:t={x:a,y:o.y+o.height};break;case D:t={x:o.x+o.width,y:c};break;case L:t={x:o.x-r.width,y:c};break;default:t={x:o.x,y:o.y}}var l=i?z(i):null;if(null!=l){var d="y"===l?"height":"width";switch(s){case S:t[l]=t[l]-(o[d]/2-r[d]/2);break;case M:t[l]=t[l]+(o[d]/2-r[d]/2)}}return t}var K={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Q(e){var t,o=e.popper,r=e.popperRect,i=e.placement,s=e.variation,a=e.offsets,c=e.position,l=e.gpuAcceleration,f=e.adaptive,p=e.roundOffsets,u=e.isFixed,h=a.x,m=void 0===h?0:h,g=a.y,b=void 0===g?0:g,w="function"==typeof p?p({x:m,y:b}):{x:m,y:b};m=w.x,b=w.y;var x=a.hasOwnProperty("x"),O=a.hasOwnProperty("y"),E=L,H=j,_=window;if(f){var T=C(o),k="clientHeight",N="clientWidth";T===n(o)&&"static"!==y(T=v(o)).position&&"absolute"===c&&(k="scrollHeight",N="scrollWidth"),(i===j||(i===L||i===D)&&s===M)&&(H=A,b-=(u&&T===_&&_.visualViewport?_.visualViewport.height:T[k])-r.height,b*=l?1:-1),i!==L&&(i!==j&&i!==A||s!==M)||(E=D,m-=(u&&T===_&&_.visualViewport?_.visualViewport.width:T[N])-r.width,m*=l?1:-1)}var S,P=Object.assign({position:c},f&&K),I=!0===p?function(e,t){var o=e.x,r=e.y,n=t.devicePixelRatio||1;return{x:d(o*n)/n||0,y:d(r*n)/n||0}}({x:m,y:b},n(o)):{x:m,y:b};return m=I.x,b=I.y,l?Object.assign({},P,((S={})[H]=O?"0":"",S[E]=x?"0":"",S.transform=(_.devicePixelRatio||1)<=1?"translate("+m+"px, "+b+"px)":"translate3d("+m+"px, "+b+"px, 0)",S)):Object.assign({},P,((t={})[H]=O?b+"px":"",t[E]=x?m+"px":"",t.transform="",t))}var Z={left:"right",right:"left",bottom:"top",top:"bottom"};function $(e){return e.replace(/left|right|bottom|top/g,(function(e){return Z[e]}))}var ee={start:"end",end:"start"};function te(e){return e.replace(/start|end/g,(function(e){return ee[e]}))}function oe(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&a(o)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function re(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ne(e,t,o){return t===P?re(function(e,t){var o=n(e),r=v(e),i=o.visualViewport,s=r.clientWidth,a=r.clientHeight,c=0,l=0;if(i){s=i.width,a=i.height;var d=p();(d||!d&&"fixed"===t)&&(c=i.offsetLeft,l=i.offsetTop)}return{width:s,height:a,x:c+g(e),y:l}}(e,o)):i(t)?function(e,t){var o=u(e,!1,"fixed"===t);return o.top=o.top+e.clientTop,o.left=o.left+e.clientLeft,o.bottom=o.top+e.clientHeight,o.right=o.left+e.clientWidth,o.width=e.clientWidth,o.height=e.clientHeight,o.x=o.left,o.y=o.top,o}(t,o):re(function(e){var t,o=v(e),r=h(e),n=null==(t=e.ownerDocument)?void 0:t.body,i=c(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),s=c(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-r.scrollLeft+g(e),l=-r.scrollTop;return"rtl"===y(n||o).direction&&(a+=c(o.clientWidth,n?n.clientWidth:0)-i),{width:i,height:s,x:a,y:l}}(v(e)))}function ie(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function se(e,t){return t.reduce((function(t,o){return t[o]=e,t}),{})}function ae(e,t){void 0===t&&(t={});var o=t,r=o.placement,n=void 0===r?e.placement:r,a=o.strategy,d=void 0===a?e.strategy:a,f=o.boundary,p=void 0===f?"clippingParents":f,h=o.rootBoundary,g=void 0===h?P:h,b=o.elementContext,w=void 0===b?I:b,x=o.altBoundary,E=void 0!==x&&x,_=o.padding,T=void 0===_?0:_,L=ie("number"!=typeof T?T:se(T,N)),k=w===I?"reference":I,S=e.rects.popper,M=e.elements[E?k:w],W=function(e,t,o,r){var n="clippingParents"===t?function(e){var t=H(O(e)),o=["absolute","fixed"].indexOf(y(e).position)>=0&&s(e)?C(e):e;return i(o)?t.filter((function(e){return i(e)&&oe(e,o)&&"body"!==m(e)})):[]}(e):[].concat(t),a=[].concat(n,[o]),d=a[0],f=a.reduce((function(t,o){var n=ne(e,o,r);return t.top=c(n.top,t.top),t.right=l(n.right,t.right),t.bottom=l(n.bottom,t.bottom),t.left=c(n.left,t.left),t}),ne(e,d,r));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}(i(M)?M:M.contextElement||v(e.elements.popper),p,g,d),B=u(e.elements.reference),R=Y({reference:B,element:S,strategy:"absolute",placement:n}),V=re(Object.assign({},S,R)),q=w===I?V:B,F={top:W.top-q.top+L.top,bottom:q.bottom-W.bottom+L.bottom,left:W.left-q.left+L.left,right:q.right-W.right+L.right},G=e.modifiersData.offset;if(w===I&&G){var J=G[n];Object.keys(F).forEach((function(e){var t=[D,A].indexOf(e)>=0?1:-1,o=[j,A].indexOf(e)>=0?"y":"x";F[e]+=J[o]*t}))}return F}function ce(e,t,o){return c(e,l(t,o))}function le(e,t,o){return void 0===o&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function de(e){return[j,D,A,L].some((function(t){return e[t]>=0}))}var fe=G({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,o=e.instance,r=e.options,i=r.scroll,s=void 0===i||i,a=r.resize,c=void 0===a||a,l=n(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&d.forEach((function(e){e.addEventListener("scroll",o.update,J)})),c&&l.addEventListener("resize",o.update,J),function(){s&&d.forEach((function(e){e.removeEventListener("scroll",o.update,J)})),c&&l.removeEventListener("resize",o.update,J)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,o=e.name;t.modifiersData[o]=Y({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,o=e.options,r=o.gpuAcceleration,n=void 0===r||r,i=o.adaptive,s=void 0===i||i,a=o.roundOffsets,c=void 0===a||a,l={placement:U(t.placement),variation:X(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Q(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Q(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var o=t.styles[e]||{},r=t.attributes[e]||{},n=t.elements[e];s(n)&&m(n)&&(Object.assign(n.style,o),Object.keys(r).forEach((function(e){var t=r[e];!1===t?n.removeAttribute(e):n.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],n=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:o[e]).reduce((function(e,t){return e[t]="",e}),{});s(r)&&m(r)&&(Object.assign(r.style,i),Object.keys(n).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,o=e.options,r=e.name,n=o.offset,i=void 0===n?[0,0]:n,s=B.reduce((function(e,o){return e[o]=function(e,t,o){var r=U(e),n=[L,j].indexOf(r)>=0?-1:1,i="function"==typeof o?o(Object.assign({},t,{placement:e})):o,s=i[0],a=i[1];return s=s||0,a=(a||0)*n,[L,D].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}(o,t.rects,i),e}),{}),a=s[t.placement],c=a.x,l=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=s}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var n=o.mainAxis,i=void 0===n||n,s=o.altAxis,a=void 0===s||s,c=o.fallbackPlacements,l=o.padding,d=o.boundary,f=o.rootBoundary,p=o.altBoundary,u=o.flipVariations,h=void 0===u||u,m=o.allowedAutoPlacements,v=t.options.placement,g=U(v),y=c||(g!==v&&h?function(e){if(U(e)===k)return[];var t=$(e);return[te(e),t,te(t)]}(v):[$(v)]),b=[v].concat(y).reduce((function(e,o){return e.concat(U(o)===k?function(e,t){void 0===t&&(t={});var o=t,r=o.placement,n=o.boundary,i=o.rootBoundary,s=o.padding,a=o.flipVariations,c=o.allowedAutoPlacements,l=void 0===c?B:c,d=X(r),f=d?a?W:W.filter((function(e){return X(e)===d})):N,p=f.filter((function(e){return l.indexOf(e)>=0}));0===p.length&&(p=f);var u=p.reduce((function(t,o){return t[o]=ae(e,{placement:o,boundary:n,rootBoundary:i,padding:s})[U(o)],t}),{});return Object.keys(u).sort((function(e,t){return u[e]-u[t]}))}(t,{placement:o,boundary:d,rootBoundary:f,padding:l,flipVariations:h,allowedAutoPlacements:m}):o)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,E=!0,H=b[0],_=0;_<b.length;_++){var T=b[_],C=U(T),M=X(T)===S,P=[j,A].indexOf(C)>=0,I=P?"width":"height",R=ae(t,{placement:T,boundary:d,rootBoundary:f,altBoundary:p,padding:l}),V=P?M?D:L:M?A:j;w[I]>x[I]&&(V=$(V));var q=$(V),F=[];if(i&&F.push(R[C]<=0),a&&F.push(R[V]<=0,R[q]<=0),F.every((function(e){return e}))){H=T,E=!1;break}O.set(T,F)}if(E)for(var G=function(e){var t=b.find((function(t){var o=O.get(t);if(o)return o.slice(0,e).every((function(e){return e}))}));if(t)return H=t,"break"},J=h?3:1;J>0&&"break"!==G(J);J--);t.placement!==H&&(t.modifiersData[r]._skip=!0,t.placement=H,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,r=e.name,n=o.mainAxis,i=void 0===n||n,s=o.altAxis,a=void 0!==s&&s,d=o.boundary,f=o.rootBoundary,p=o.altBoundary,u=o.padding,h=o.tether,m=void 0===h||h,v=o.tetherOffset,g=void 0===v?0:v,y=ae(t,{boundary:d,rootBoundary:f,padding:u,altBoundary:p}),b=U(t.placement),w=X(t.placement),O=!w,E=z(b),H="x"===E?"y":"x",_=t.modifiersData.popperOffsets,T=t.rects.reference,k=t.rects.popper,N="function"==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,M="number"==typeof N?{mainAxis:N,altAxis:N}:Object.assign({mainAxis:0,altAxis:0},N),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,I={x:0,y:0};if(_){if(i){var W,B="y"===E?j:L,R="y"===E?A:D,V="y"===E?"height":"width",q=_[E],F=q+y[B],G=q-y[R],J=m?-k[V]/2:0,Y=w===S?T[V]:k[V],K=w===S?-k[V]:-T[V],Q=t.elements.arrow,Z=m&&Q?x(Q):{width:0,height:0},$=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=$[B],te=$[R],oe=ce(0,T[V],Z[V]),re=O?T[V]/2-J-oe-ee-M.mainAxis:Y-oe-ee-M.mainAxis,ne=O?-T[V]/2+J+oe+te+M.mainAxis:K+oe+te+M.mainAxis,ie=t.elements.arrow&&C(t.elements.arrow),se=ie?"y"===E?ie.clientTop||0:ie.clientLeft||0:0,le=null!=(W=null==P?void 0:P[E])?W:0,de=q+ne-le,fe=ce(m?l(F,q+re-le-se):F,q,m?c(G,de):G);_[E]=fe,I[E]=fe-q}if(a){var pe,ue="x"===E?j:L,he="x"===E?A:D,me=_[H],ve="y"===H?"height":"width",ge=me+y[ue],ye=me-y[he],be=-1!==[j,L].indexOf(b),we=null!=(pe=null==P?void 0:P[H])?pe:0,xe=be?ge:me-T[ve]-k[ve]-we+M.altAxis,Oe=be?me+T[ve]+k[ve]-we-M.altAxis:ye,Ee=m&&be?function(e,t,o){var r=ce(e,t,o);return r>o?o:r}(xe,me,Oe):ce(m?xe:ge,me,m?Oe:ye);_[H]=Ee,I[H]=Ee-me}t.modifiersData[r]=I}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,o=e.state,r=e.name,n=e.options,i=o.elements.arrow,s=o.modifiersData.popperOffsets,a=U(o.placement),c=z(a),l=[L,D].indexOf(a)>=0?"height":"width";if(i&&s){var d=function(e,t){return ie("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:se(e,N))}(n.padding,o),f=x(i),p="y"===c?j:L,u="y"===c?A:D,h=o.rects.reference[l]+o.rects.reference[c]-s[c]-o.rects.popper[l],m=s[c]-o.rects.reference[c],v=C(i),g=v?"y"===c?v.clientHeight||0:v.clientWidth||0:0,y=h/2-m/2,b=d[p],w=g-f[l]-d[u],O=g/2-f[l]/2+y,E=ce(b,O,w),H=c;o.modifiersData[r]=((t={})[H]=E,t.centerOffset=E-O,t)}},effect:function(e){var t=e.state,o=e.options.element,r=void 0===o?"[data-popper-arrow]":o;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&oe(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,o=e.name,r=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,s=ae(t,{elementContext:"reference"}),a=ae(t,{altBoundary:!0}),c=le(s,r),l=le(a,n,i),d=de(c),f=de(l);t.modifiersData[o]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:d,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":f})}}]});class pe{constructor(e){this.options=r(!0,{entrySelector:"#wrapper",markup:"a",markupAttr:null,language:{active:!1,lang:""},hovercard:{active:!0,id:"gs-hovercard",interactive:!0,showLoadingAnimation:!0,maxWidth:380,showThreshold:300,leaveThreshold:200},popperOptions:{placement:"top",modifiers:[{name:"offset",options:{offset:[0,8]}},{name:"preventOverflow",options:{padding:16}},{name:"arrow",options:{padding:5}}]},includes:["body","div,span,p","main,section,article","ol,ul,li","table,tr,th,tbody,thead,td","i,b,em,strong","mark,abbr","sub,sup"],excludeClasses:["gl-none"],route:{prefix:"/api/glossary/item/",suffix:"/html",info:"/api/glossary/info",cache:!0},hovercardBreakpoint:1024,config:null},e||{}),this.showEvent="pointerenter",this.hideEvent="pointerleave",this.showDelay=null,this.hideTimeout=null,this.matchIndex=0,this.isNewIE=this._isNewIE(),null===this.options.config&&this._shouldParse()||(this.contentNodes=document.querySelectorAll(this.options.entrySelector),this._init().then())}async _init(){if("abbr"!==this.options.markup.toLowerCase()?this._parseNodes(this.contentNodes,0):(this.options.hovercard.active=!1,await this._setDetails()),this.options.hovercard.active&&window.innerWidth>=this.options.hovercardBreakpoint)return this._bindHoverCardEvents()}_isNewIE(){return/iPod|iPhone|iPad|Macintosh/.test(navigator.userAgent)}_shouldParse(){if(window.innerWidth<this.options.hovercardBreakpoint)switch(this.options.markup.toLowerCase()){case"a":case"abbr":return!0;default:return!1}return!0}_parseNodes(e){const t=Array.from(e);for(const e of t)if(this._isValidNode(e))switch(e.nodeType){case Node.TEXT_NODE:this._replaceTerm(e);break;case Node.ELEMENT_NODE:this._parseNodes(e.childNodes)}}_isValidNode(e){return e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE&&!!e.matches(this.options.includes.join(","))&&!(e.classList.length&&e.matches(this.options.excludeClasses.map((e=>"."+e)).join(",")))}_replaceTerm(e){if(!e.textContent.trim())return;let t=[];const o={};for(const r of this.options.config){const n=new RegExp("(?:\\s|>|^|\\()("+r.keywords.join("|")+")\\b",r.cs?"gu":"giu"),i=e.textContent.matchAll(n);if(null!==i)for(let[n,s]of i){if(t.includes(s))continue;t.push(s);const n=this._createTermMarkup(s,r);if(this.isNewIE){const t=new RegExp("(?:>|^|\\()("+s+")\\b","gu");let r=[];for(let o of e.textContent.split(" "))o.match(t)?r.push(o.replace(s,n)):r.push(o);e.textContent=r.join(" "),o[0]=""}else{const t=new RegExp('(?<!glc="1">)(?<=\\s|>|^|\\()('+s+")\\b","gu");if(t.test(e.textContent)){let r="glw-"+this.matchIndex;e.textContent=e.textContent.replace(t,r),o[r]=n,this.matchIndex++}}}}if(Object.keys(o).length){const t=document.createElement("span");this.isNewIE?t.innerHTML=e.textContent:t.innerHTML=e.textContent.replace(new RegExp(Object.keys(o).join("|"),"gu"),(e=>o[e])),e.replaceWith(t),t.outerHTML=t.innerHTML}}_createTermMarkup(e,t){const o=document.createElement(this.options.markup);switch(o.innerText=e,o.dataset.glossaryId=t.id,this.options.markup.toLowerCase()){case"a":o.title=e,o.href=t.url;break;case"abbr":const r=this._getDetailsCacheById(t.id);r&&(o.title=r)}if(this.options.language.active&&o.setAttribute("lang",this.options.language.lang),null!==this.options.markupAttr)for(const e in this.options.markupAttr)o.setAttribute(e,this.options.markupAttr[e]);return o.setAttribute("glc","1"),o.outerHTML}async _setDetails(){await fetch(this.options.route.info).then((e=>{if(e.status>=300)throw new Error(e.statusText);e.text().then((e=>{this._setDetailsCache(e)})).then((()=>this._parseNodes(this.contentNodes,0)))})).catch((e=>{}))}_bindHoverCardEvents(){const e=document.querySelectorAll("[data-glossary-id]");if(e)for(const t of e)t.addEventListener(this.showEvent,(e=>this._onShowHovercard(e))),t.addEventListener(this.hideEvent,(e=>this._onHideHovercard(e)))}_setItemCache(e,t){let o=sessionStorage.getItem("glossaryCache");sessionStorage.setItem("glossaryCache",JSON.stringify({...o?JSON.parse(o):{},[e]:t}))}_getItemCache(e){let t=sessionStorage.getItem("glossaryCache");return t=JSON.parse(t),t&&t[e]?t[e]:null}_setDetailsCache(e){sessionStorage.setItem("glossaryDetailsCache",JSON.stringify(e))}_getDetailsCacheById(e){let t=sessionStorage.getItem("glossaryDetailsCache");return t=JSON.parse(JSON.parse(t)),t&&t[e]?t[e]:null}_onShowHovercard(e){this.currentElement=e.target;const t=this.currentElement.dataset.glossaryId;this.glossaryHovercard&&(this._clearHideTimeout(),this._destroyHovercard(),this._clearShowDelay()),this.showDelay=setTimeout((()=>{if(this.options.route.cache){const e=this._getItemCache(t);if(e)return this._buildHovercard(e),void this._updateHovercard(e)}this._fetchGlossaryItem(t)}),this.options.hovercard.showThreshold)}_onHideHovercard(e){this._clearHideTimeout(),this._clearShowDelay(),this.glossaryHovercard&&(this.options.hovercard.interactive?this.hideTimeout=setTimeout((()=>{this._abortFetch(),this._destroyHovercard()}),this.options.hovercard.leaveThreshold):(this._abortFetch(),this._destroyHovercard()))}async _fetchGlossaryItem(e){this.abortController=new AbortController,this.options.hovercard.showLoadingAnimation&&this._buildHovercard(),await fetch(this.options.route.prefix+e+this.options.route.suffix,{signal:this.abortController.signal}).then((t=>{if(t.status>=300)throw new Error(t.statusText);t.text().then((t=>{this.options.route.cache&&this._setItemCache(e,t),this.options.hovercard.showLoadingAnimation?this._updateHovercard(t):this._buildHovercard(t)}))})).catch((e=>{}))}_abortFetch(){this?.abortController&&this.abortController.abort()}_buildHovercard(e){if(this.glossaryHovercard=document.createElement("div"),this.glossaryHovercard.style.maxWidth=this.options.hovercard.maxWidth+"px",this.glossaryHovercardContent=document.createElement("div"),this.glossaryHovercardContent.classList.add("content"),this.glossaryHovercard.appendChild(this.glossaryHovercardContent),this.popperArrow=document.createElement("div"),this.popperArrow.setAttribute("data-popper-arrow",""),this.glossaryHovercard.appendChild(this.popperArrow),this.options.hovercard.interactive&&this.glossaryHovercard.addEventListener(this.showEvent,(()=>{this._clearHideTimeout(),this.glossaryHovercard?.addEventListener(this.hideEvent,(()=>{this._destroyHovercard(),this._abortFetch()}))})),this.glossaryHovercard.id=this.options.hovercard.id,this.options.hovercard.showLoadingAnimation){const e=document.createElement("span");e.classList.add("hovercard-loader"),this.glossaryHovercardContent.appendChild(e)}else this._updateHovercard(e);document.body.appendChild(this.glossaryHovercard),this.popper=fe(this.currentElement,this.glossaryHovercard,this.options.popperOptions)}_updateHovercard(e){this?.glossaryHovercard&&(this.glossaryHovercardContent.innerHTML=e,this.options.hovercard.showLoadingAnimation&&this.popper.update())}_destroyHovercard(){this.popper.destroy(),this.glossaryHovercard.parentNode.removeChild(this.glossaryHovercard),this.glossaryHovercard=null}_clearShowDelay(){this.showDelay&&(clearTimeout(this.showDelay),this.showDelay=null)}_clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}}},36:(e,t,o)=>{const{Glossary:r}=o(71);e.exports=r}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r=o(36);Glossary=r})();