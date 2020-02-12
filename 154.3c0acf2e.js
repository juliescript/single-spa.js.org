/*! For license information please see 154.3c0acf2e.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{287:function(e,t,n){"use strict";var r=n(0),a=n(52);t.a=function(){return Object(r.useContext)(a.a)}},288:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===c)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},290:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(297);var r=n(287);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},291:function(e,t,n){"use strict";var r=n(1),a=n(0),c=n.n(a),o=n(34),i=/^\/(?!\/)/;t.a=function(e){var t,n=e.to,l=e.href,u=n||l,s=i.test(u),d=!1,f="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(a.useEffect)((function(){return!f&&s&&window.docusaurus.prefetch(u),function(){f&&t&&t.disconnect()}}),[u,f,s]),u&&s?c.a.createElement(o.b,Object(r.a)({},e,{onMouseEnter:function(){d||(window.docusaurus.preload(u),d=!0)},innerRef:function(e){var n,r;f&&e&&s&&(n=e,r=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:u})):c.a.createElement("a",Object(r.a)({},e,{href:u}))}},292:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(50),o=n(287),i=n(290),l=n(1),u=n(9),s=n(291),d=n(288),f=n.n(d),h=n(295),p=(n(123),!1),m=function(e){var t=Object(r.useRef)(!1),c=Object(r.useRef)(null),i=Object(o.a)().siteConfig,l=(void 0===i?{}:i).themeConfig.algolia,u=Object(h.c)(),s=function(){t.current||(window.docsearch({appId:l.appId,apiKey:l.apiKey,indexName:l.indexName,inputSelector:"#search_input_react",algoliaOptions:l.algoliaOptions,handleSelected:function(e,t,n){var r=document.createElement("a");r.href=n.url;var a="#__docusaurus"===r.hash?""+r.pathname:""+r.pathname+r.hash;u.push(a)}}),t.current=!0)},d=function(){p?s():n.e(152).then(n.t.bind(null,433,7)).then((function(e){p=!0,window.docsearch=e.default,s()}))},m=Object(r.useCallback)((function(t){c.current.contains(t.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return a.a.createElement("div",{className:"navbar__search",key:"search-box"},a.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:f()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:m,onKeyDown:m,tabIndex:0}),a.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:f()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:m,onBlur:m,ref:c}))},g=n(298),v=n.n(g),y=n(124),k=n.n(y),b=function(){return a.a.createElement("span",{className:f()(k.a.toggle,k.a.moon)})},E=function(){return a.a.createElement("span",{className:f()(k.a.toggle,k.a.sun)})},_=function(e){var t=Object(o.a)().isClient;return a.a.createElement(v.a,Object(l.a)({disabled:!t,icons:{checked:a.a.createElement(b,null),unchecked:a.a.createElement(E,null)}},e))},x=function(){var e=r.useState("undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):""),t=e[0],n=e[1];return r.useEffect((function(){try{n(localStorage.getItem("theme"))}catch(e){console.error(e)}}),[n]),[t,r.useCallback((function(e){try{localStorage.setItem("theme",e),n(e)}catch(t){console.error(t)}}),[n])]},w=n(125),O=n.n(w);function S(e){var t=e.to,n=e.href,r=e.label,c=(e.position,Object(u.a)(e,["to","href","label","position"])),o=Object(i.a)(t);return a.a.createElement(s.a,Object(l.a)({className:"navbar__item navbar__link"},n?{target:"_blank",rel:"noopener noreferrer",href:n}:{activeClassName:"navbar__link--active",to:o},c),r)}var C=function(){var e=Object(o.a)(),t=Object(r.useState)(!1),n=t[0],u=t[1],d=Object(r.useState)(!1),h=d[0],p=d[1],g=x(),v=g[0],y=g[1],k=e.siteConfig,b=void 0===k?{}:k,E=b.baseUrl,w=b.themeConfig,C=void 0===w?{}:w,j=C.navbar,N=void 0===j?{}:j,T=C.disableDarkMode,B=void 0!==T&&T,M=N.title,P=N.logo,I=void 0===P?{}:P,F=N.links,$=void 0===F?[]:F,A=Object(r.useCallback)((function(){u(!0)}),[u]),L=Object(r.useCallback)((function(){u(!1)}),[u]),X=Object(r.useCallback)((function(e){return y(e.target.checked?"dark":"")}),[y]),z=Object(i.a)(I.src);return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,null,a.a.createElement("html",{lang:"en","data-theme":v})),a.a.createElement("nav",{className:f()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":n})},a.a.createElement("div",{className:"navbar__inner"},a.a.createElement("div",{className:"navbar__items"},a.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:A,onKeyDown:A},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},a.a.createElement("title",null,"Menu"),a.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),a.a.createElement(s.a,{className:"navbar__brand",to:E},null!=I&&a.a.createElement("img",{className:"navbar__logo",src:z,alt:I.alt}),null!=M&&a.a.createElement("strong",{className:h?O.a.hideLogoText:""},M)),$.filter((function(e){return"right"!==e.position})).map((function(e,t){return a.a.createElement(S,Object(l.a)({},e,{key:t}))}))),a.a.createElement("div",{className:"navbar__items navbar__items--right"},$.filter((function(e){return"right"===e.position})).map((function(e,t){return a.a.createElement(S,Object(l.a)({},e,{key:t}))})),!B&&a.a.createElement(_,{className:O.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===v,onChange:X}),a.a.createElement(m,{handleSearchBarToggle:p,isSearchBarExpanded:h}))),a.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:function(){u(!1)}}),a.a.createElement("div",{className:"navbar-sidebar"},a.a.createElement("div",{className:"navbar-sidebar__brand"},a.a.createElement(s.a,{className:"navbar__brand",onClick:L,to:E},null!=I&&a.a.createElement("img",{className:"navbar__logo",src:z,alt:I.alt}),null!=M&&a.a.createElement("strong",null,M)),!B&&n&&a.a.createElement(_,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===v,onChange:X})),a.a.createElement("div",{className:"navbar-sidebar__items"},a.a.createElement("div",{className:"menu"},a.a.createElement("ul",{className:"menu__list"},$.map((function(e,t){return a.a.createElement("li",{className:"menu__list-item",key:t},a.a.createElement(S,Object(l.a)({className:"menu__link"},e,{onClick:L})))}))))))))},j=n(296);n(126);t.a=function(e){var t=Object(o.a)().siteConfig,n=void 0===t?{}:t,r=n.favicon,l=n.tagline,u=n.title,s=n.themeConfig.image,d=n.url,f=e.children,h=e.title,p=e.noFooter,m=e.description,g=e.image,v=e.keywords,y=e.permalink,k=e.version,b=h||u+" \xb7 "+l,E=g||s,_=d+Object(i.a)(E),x=Object(i.a)(r);return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,null,a.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),b&&a.a.createElement("title",null,b),b&&a.a.createElement("meta",{property:"og:title",content:b}),r&&a.a.createElement("link",{rel:"shortcut icon",href:x}),m&&a.a.createElement("meta",{name:"description",content:m}),m&&a.a.createElement("meta",{property:"og:description",content:m}),k&&a.a.createElement("meta",{name:"docsearch:version",content:k}),v&&v.length&&a.a.createElement("meta",{name:"keywords",content:v.join(",")}),E&&a.a.createElement("meta",{property:"og:image",content:_}),E&&a.a.createElement("meta",{property:"twitter:image",content:_}),E&&a.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+b}),y&&a.a.createElement("meta",{property:"og:url",content:d+y}),a.a.createElement("meta",{name:"twitter:card",content:"summary"})),a.a.createElement(C,null),a.a.createElement("div",{className:"main-wrapper"},f),!p&&a.a.createElement(j.a,null))}},293:function(e,t,n){var r=n(70),a=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},294:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}},295:function(e,t,n){"use strict";var r=n(34);n.d(t,"a",(function(){return r.c})),n.d(t,"b",(function(){return r.d})),n.d(t,"c",(function(){return r.e}))},297:function(e,t,n){"use strict";var r=n(17),a=n(35),c=n(293),o="".startsWith;r(r.P+r.F*n(294)("startsWith"),"String",{startsWith:function(e){var t=c(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return o?o.call(t,r,n):t.slice(n,n+r.length)===r}})},298:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),o=f(c),i=f(n(288)),l=f(n(10)),u=f(n(299)),s=f(n(300)),d=n(301);function f(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=(t.icons,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["className","icons"])),c=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",r({},a,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:o.default.createElement(u.default,null),unchecked:o.default.createElement(s.default,null)}},h.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(0),c=(r=a)&&r.__esModule?r:{default:r};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(0),c=(r=a)&&r.__esModule?r:{default:r};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var r=e.pageX;if(void 0!==r)return{x:r,y:e.pageY}}return{x:0,y:0}}},340:function(e,t,n){"use strict";n.d(t,"a",(function(){return Re}));var r=n(0),a=n.n(r),c=n(341),o=n.n(c),i=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var u={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},s={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},d=["style","script"],f=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,h=/mailto:/i,p=/\n{2,}$/,m=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,g=/^ *> ?/gm,v=/^ {2,}\n/,y=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,k=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,b=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,E=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,_=/^(?:\n *)*\n/,x=/\r\n?/g,w=/^\[\^(.*)\](:.*)\n/,O=/^\[\^(.*)\]/,S=/\f/g,C=/^\s*?\[(x|\s)\]/,j=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,N=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,T=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,B=/&([a-z]+);/g,M=/^<!--.*?-->/,P=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,I=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,F=/^\{.*\}$/,$=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,A=/^<([^ >]+@[^ >]+)>/,L=/^<([^ >]+:\/[^ >]+)>/,X=/ *\n+$/,z=/(?:^|\n)( *)$/,D=/-([a-z])?/gi,U=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,R=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,W=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,K=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,q=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Z=/(\[|\])/g,V=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,G=/\t/g,J=/^ *\| */,Y=/(^ *\||\| *$)/g,H=/ *$/,Q=/^ *:-+: *$/,ee=/^ *:-+ *$/,te=/^ *-+: *$/,ne=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,re=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,ae=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ce=/^\\([^0-9A-Za-z\s])/,oe=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ie=/(^\n+|\n+$|\s+$)/g,le=/^([ \t]*)/,ue=/\\([^0-9A-Z\s])/gi,se=/^( *)((?:[*+-]|\d+\.)) +/,de=/( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,fe=/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,he=/^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,pe=/^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,me=[m,b,k,j,N,T,M,I,de,fe,U,R];function ge(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ve(e){return te.test(e)?"right":Q.test(e)?"center":ee.test(e)?"left":null}function ye(e,t,n){var r=n.inTable;n.inTable=!0;var a=t(e.trim(),n);n.inTable=r;var c=[[]];return a.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==a.length-1&&c.push([]):("text"===e.type&&(null==a[t+1]||"tableSeparator"===a[t+1].type)&&(e.content=e.content.replace(H,"")),c[c.length-1].push(e))})),c}function ke(e,t,n){n.inline=!0;var r=ye(e[1],t,n),a=function(e){return e.replace(Y,"").split("|").map(ve)}(e[2]),c=function(e,t,n){return e.trim().split("\n").map((function(e){return ye(e,t,n)}))}(e[3],t,n);return n.inline=!1,{align:a,cells:c,header:r,type:"table"}}function be(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function Ee(e){function t(r,a){for(var c=[],o="";r;)for(var i=0;i<n.length;){var l=n[i],u=e[l],s=u.match(r,a,o);if(s){var d=s[0];r=r.substring(d.length);var f=u.parse(s,t,a);null==f.type&&(f.type=l),c.push(f),o=d;break}i++}return c}var n=Object.keys(e);return n.sort((function(t,n){var r=e[t].order,a=e[n].order;return r===a?t<n?-1:1:r-a})),function(e,n){return t(function(e){return e.replace(x,"\n").replace(S,"").replace(G,"    ")}(e),n)}}function _e(e){return function(t,n){return n.inline?e.exec(t):null}}function xe(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function we(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Oe(e){return function(t){return e.exec(t)}}function Se(e){try{if(decodeURIComponent(e).match(/^\s*javascript:/i))return null}catch(t){return null}return e}function Ce(e){return e.replace(ue,"$1")}function je(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!0,n.simple=!0;var c=e(t,n);return n.inline=r,n.simple=a,c}function Ne(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!1,n.simple=!0;var c=e(t,n);return n.inline=r,n.simple=a,c}function Te(e,t,n){return n.inline=!1,e(t+"\n\n",n)}function Be(e,t,n){return{content:je(t,e[1],n)}}function Me(){return{}}function Pe(){return null}function Ie(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function Fe(e,t,n){for(var r=e,a=t.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||n}function $e(e,t){var n=Fe(t,e);return n?"function"==typeof n||"object"===(void 0===n?"undefined":l(n))&&"render"in n?n:Fe(t,e+".component",e):e}var Ae=1,Le=2,Xe=3,ze=4,De=5;function Ue(e,t){function n(e,n){for(var r=Fe(t.overrides,e+".props",{}),a=arguments.length,c=Array(a>2?a-2:0),o=2;o<a;o++)c[o-2]=arguments[o];return l.apply(void 0,[$e(e,t.overrides),i({},n,r,{className:Ie(n&&n.className,r.className)||void 0})].concat(c))}function r(e){var r=!1;t.forceInline?r=!0:!t.forceBlock&&(r=!1===V.test(e));var a=H(Y(r?e:e.replace(ie,"")+"\n\n",{inline:r})),c=void 0;return a.length>1?c=n(r?"span":"div",{key:"outer"},a):1===a.length?"string"==typeof(c=a[0])&&(c=n("span",{key:"outer"},c)):c=n("span",{key:"outer"}),c}function c(e){var t=e.match(f);return t?t.reduce((function(e,t,n){var c=t.indexOf("=");if(-1!==c){var i=function(e){return-1!==e.indexOf("-")&&null===e.match(P)&&(e=e.replace(D,(function(e,t){return t.toUpperCase()}))),e}(t.slice(0,c)).trim(),l=o()(t.slice(c+1).trim()),s=u[i]||i,d=e[s]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var n=t.slice(0,t.indexOf(":")),r=n.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}));return e[r]=t.slice(n.length+1).trim(),e}),{}):"href"===e?Se(t):(t.match(F)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(i,l);(T.test(d)||I.test(d))&&(e[s]=a.a.cloneElement(r(d.trim()),{key:n}))}else e[u[t]||t]=!0;return e}),{}):void 0}(t=t||{}).overrides=t.overrides||{},t.slugify=t.slugify||ge,t.namedCodesToUnicode=t.namedCodesToUnicode?i({},s,t.namedCodesToUnicode):s;var l=t.createElement||a.a.createElement;var x=[],S={},G={blockQuote:{match:we(m),order:Le,parse:function(e,t,n){return{content:t(e[0].replace(g,""),n)}},react:function(e,t,r){return n("blockquote",{key:r.key},t(e.content,r))}},breakLine:{match:Oe(v),order:Le,parse:Me,react:function(e,t,r){return n("br",{key:r.key})}},breakThematic:{match:we(y),order:Le,parse:Me,react:function(e,t,r){return n("hr",{key:r.key})}},codeBlock:{match:we(b),order:Ae,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,r){return n("pre",{key:r.key},n("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:we(k),order:Ae,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:xe(E),order:ze,parse:function(e){return{content:e[2]}},react:function(e,t,r){return n("code",{key:r.key},e.content)}},footnote:{match:we(w),order:Ae,parse:function(e){return x.push({footnote:e[2],identifier:e[1]}),{}},react:Pe},footnoteReference:{match:_e(O),order:Le,parse:function(e){return{content:e[1],target:"#"+e[1]}},react:function(e,t,r){return n("a",{key:r.key,href:Se(e.target)},n("sup",{key:r.key},e.content))}},gfmTask:{match:_e(C),order:Le,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,r){return n("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})}},heading:{match:we(j),order:Le,parse:function(e,n,r){return{content:je(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,r){return n("h"+e.level,{id:e.id,key:r.key},t(e.content,r))}},headingSetext:{match:we(N),order:Ae,parse:function(e,t,n){return{content:je(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlBlock:{match:Oe(T),order:Le,parse:function(e,t,n){var r=e[3].match(le)[1],a=new RegExp("^"+r,"gm"),o=e[3].replace(a,""),i=function(e){return me.some((function(t){return t.test(e)}))}(o)?Te:je,l=e[1].toLowerCase(),u=-1!==d.indexOf(l);return{attrs:c(e[2]),content:u?e[3]:i(t,o,n),noInnerParse:u,tag:u?l:e[1]}},react:function(e,t,r){return n(e.tag,i({key:r.key},e.attrs),e.noInnerParse?e.content:t(e.content,r))}},htmlComment:{match:Oe(M),order:Le,parse:function(){return{}},react:Pe},htmlSelfClosing:{match:Oe(I),order:Le,parse:function(e){return{attrs:c(e[2]||""),tag:e[1]}},react:function(e,t,r){return n(e.tag,i({},e.attrs,{key:r.key}))}},image:{match:xe(pe),order:Le,parse:function(e){return{alt:e[1],target:Ce(e[2]),title:e[3]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:Se(e.target)})}},link:{match:_e(he),order:ze,parse:function(e,t,n){return{content:Ne(t,e[1],n),target:Ce(e[2]),title:e[3]}},react:function(e,t,r){return n("a",{key:r.key,href:Se(e.target),title:e.title},t(e.content,r))}},linkAngleBraceStyleDetector:{match:_e(L),order:Ae,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:_e($),order:Ae,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:_e(A),order:Ae,parse:function(e){var t=e[1],n=e[1];return h.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=z.exec(n),a=t._list||!t.inline;return r&&a?(e=r[1]+e,fe.exec(e)):null},order:Le,parse:function(e,t,n){var r=e[2],a=r.length>1,c=a?+r:void 0,o=e[0].replace(p,"\n").match(de),i=!1;return{items:o.map((function(e,r){var a=se.exec(e)[0].length,c=new RegExp("^ {1,"+a+"}","gm"),l=e.replace(c,"").replace(se,""),u=r===o.length-1,s=-1!==l.indexOf("\n\n")||u&&i;i=s;var d,f=n.inline,h=n._list;n._list=!0,s?(n.inline=!1,d=l.replace(X,"\n\n")):(n.inline=!0,d=l.replace(X,""));var p=t(d,n);return n.inline=f,n._list=h,p})),ordered:a,start:c}},react:function(e,t,r){return n(e.ordered?"ol":"ul",{key:r.key,start:e.start},e.items.map((function(e,a){return n("li",{key:a},t(e,r))})))}},newlineCoalescer:{match:we(_),order:ze,parse:Me,react:function(){return"\n"}},paragraph:{match:we(R),order:ze,parse:Be,react:function(e,t,r){return n("p",{key:r.key},t(e.content,r))}},ref:{match:_e(W),order:Ae,parse:function(e){return S[e[1]]={target:e[2],title:e[4]},{}},react:Pe},refImage:{match:xe(K),order:Ae,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt,src:Se(S[e.ref].target),title:S[e.ref].title})}},refLink:{match:_e(q),order:Ae,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(Z,"\\$1"),n),ref:e[2]}},react:function(e,t,r){return S[e.ref]?n("a",{key:r.key,href:Se(S[e.ref].target),title:S[e.ref].title},t(e.content,r)):n("span",{key:r.key},t(e.fallbackContent,r))}},table:{match:we(U),order:Le,parse:ke,react:function(e,t,r){return n("table",{key:r.key},n("thead",null,n("tr",null,e.header.map((function(a,c){return n("th",{key:c,style:be(e,c)},t(a,r))})))),n("tbody",null,e.cells.map((function(a,c){return n("tr",{key:c},a.map((function(a,c){return n("td",{key:c,style:be(e,c)},t(a,r))})))}))))}},tableSeparator:{match:function(e,t){return t.inTable?J.exec(e):null},order:Le,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:Oe(oe),order:De,parse:function(e){return{content:e[0].replace(B,(function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e}))}},react:function(e){return e.content}},textBolded:{match:xe(ne),order:Xe,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("strong",{key:r.key},t(e.content,r))}},textEmphasized:{match:xe(re),order:ze,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("em",{key:r.key},t(e.content,r))}},textEscaped:{match:xe(ce),order:Le,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:xe(ae),order:ze,parse:Be,react:function(e,t,r){return n("del",{key:r.key},t(e.content,r))}}},Y=Ee(G),H=function(e){return function t(n,r){if(r=r||{},Array.isArray(n)){for(var a=r.key,c=[],o=!1,i=0;i<n.length;i++){r.key=i;var l=t(n[i],r),u="string"==typeof l;u&&o?c[c.length-1]+=l:c.push(l),o=u}return r.key=a,c}return e(n,t,r)}}(function(e){return function(t,n,r){return e[t.type].react(t,n,r)}}(G)),Q=r(e);return x.length&&Q.props.children.push(n("footer",{key:"footer"},x.map((function(e){return n("div",{id:e.identifier,key:e.identifier},e.identifier,H(Y(e.footnote,{inline:!0})))})))),Q}function Re(e){var t=e.children,n=e.options,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","options"]);return a.a.cloneElement(Ue(t,n),r)}},341:function(e,t){var n=/[\'\"]/;e.exports=function(e){return e?(n.test(e.charAt(0))&&(e=e.substr(1)),n.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}}}]);