/*! For license information please see c4f5d8e4.a0390583.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{279:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(287),l=a(292),o=a(290),i=a(242),s=a.n(i),u=a(288),m=a.n(u),d=[{content:"Use multiple frameworks in a single-page application, allowing you to split code by functionality and have Angular, React, Vue.js, etc. apps all living in harmony.",imageUrl:"img/icons/148705-essential-collection/svg/paper-plane.svg",title:"Framework freedom"},{content:"Stand up new apps next to the old one. You write the applications, single-spa makes them work together and won't load them until they're needed.",imageUrl:"img/icons/148705-essential-collection/svg/download.svg",title:"Lazy load applications"},{content:"Combine many small apps, empowering teams to choose their technology. Stay nimble as your team, product, and tech stack grows and changes over time.",imageUrl:"img/icons/148705-essential-collection/svg/settings-1.svg",title:"Front-end microservices"}],h=function(){return r.a.createElement("section",{className:s.a.features},r.a.createElement("div",{className:"container text--center"},r.a.createElement("div",{className:"row"},d.map((function(e,t){var a=e.title,n=e.content,c=e.imageUrl;return r.a.createElement("div",{key:t,className:m()("col col--4",s.a.feature)},c&&r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("img",{className:s.a.featureImage,src:Object(o.a)(c),alt:a})),r.a.createElement("h2",null,a),r.a.createElement("p",null,n))})))))},f=a(243),p=a.n(f),g=a(291),v=function(){var e=Object(c.a)().siteConfig,t=void 0===e?{}:e;return r.a.createElement("header",{className:m()("hero hero--light",p.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:p.a.heroProjectTitle},t.title),r.a.createElement("p",{className:p.a.heroProjectTagline},t.tagline),r.a.createElement("div",{className:p.a.heroButtons},r.a.createElement(g.a,{className:"button",to:Object(o.a)("docs/getting-started-overview")},"Get Started"),r.a.createElement(g.a,{className:"button",to:"https://single-spa.surge.sh"},"See a live example"))))},b=a(244),E=a.n(b),k=function(){return r.a.createElement("section",{className:E.a.video},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("iframe",{width:"100%",style:{height:"500px"},src:"https://www.youtube-nocookie.com/embed/L4jqow7NTVg?rel=0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",allowFullScreen:!0}))))},y=a(320);t.default=function(){var e=Object(c.a)().siteConfig,t=void 0===e?{}:e;return r.a.createElement(l.a,{permalink:"/",title:t.title,description:t.tagline},r.a.createElement(v,null),r.a.createElement("main",null,r.a.createElement(k,null),r.a.createElement(h,null),r.a.createElement(y.a,null)))}},287:function(e,t,a){"use strict";var n=a(0),r=a(52);t.a=function(){return Object(n.useContext)(r.a)}},288:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===c)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},290:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(297);var n=a(287);function r(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},291:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),l=a(34),o=/^\/(?!\/)/;t.a=function(e){var t,a=e.to,i=e.href,s=a||i,u=o.test(s),m=!1,d="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(r.useEffect)((function(){return!d&&u&&window.docusaurus.prefetch(s),function(){d&&t&&t.disconnect()}}),[s,d,u]),s&&u?c.a.createElement(l.b,Object(n.a)({},e,{onMouseEnter:function(){m||(window.docusaurus.preload(s),m=!0)},innerRef:function(e){var a,n;d&&e&&u&&(a=e,n=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:s})):c.a.createElement("a",Object(n.a)({},e,{href:s}))}},292:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(50),l=a(287),o=a(290),i=a(1),s=a(9),u=a(291),m=a(288),d=a.n(m),h=a(295),f=(a(123),!1),p=function(e){var t=Object(n.useRef)(!1),c=Object(n.useRef)(null),o=Object(l.a)().siteConfig,i=(void 0===o?{}:o).themeConfig.algolia,s=Object(h.c)(),u=function(){t.current||(window.docsearch({appId:i.appId,apiKey:i.apiKey,indexName:i.indexName,inputSelector:"#search_input_react",algoliaOptions:i.algoliaOptions,handleSelected:function(e,t,a){var n=document.createElement("a");n.href=a.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;s.push(r)}}),t.current=!0)},m=function(){f?u():a.e(152).then(a.t.bind(null,433,7)).then((function(e){f=!0,window.docsearch=e.default,u()}))},p=Object(n.useCallback)((function(t){c.current.contains(t.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:d()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:d()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:m,onMouseOver:m,onFocus:p,onBlur:p,ref:c}))},g=a(298),v=a.n(g),b=a(124),E=a.n(b),k=function(){return r.a.createElement("span",{className:d()(E.a.toggle,E.a.moon)})},y=function(){return r.a.createElement("span",{className:d()(E.a.toggle,E.a.sun)})},w=function(e){var t=Object(l.a)().isClient;return r.a.createElement(v.a,Object(i.a)({disabled:!t,icons:{checked:r.a.createElement(k,null),unchecked:r.a.createElement(y,null)}},e))},_=function(){var e=n.useState("undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):""),t=e[0],a=e[1];return n.useEffect((function(){try{a(localStorage.getItem("theme"))}catch(e){console.error(e)}}),[a]),[t,n.useCallback((function(e){try{localStorage.setItem("theme",e),a(e)}catch(t){console.error(t)}}),[a])]},N=a(125),O=a.n(N);function j(e){var t=e.to,a=e.href,n=e.label,c=(e.position,Object(s.a)(e,["to","href","label","position"])),l=Object(o.a)(t);return r.a.createElement(u.a,Object(i.a)({className:"navbar__item navbar__link"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:l},c),n)}var C=function(){var e=Object(l.a)(),t=Object(n.useState)(!1),a=t[0],s=t[1],m=Object(n.useState)(!1),h=m[0],f=m[1],g=_(),v=g[0],b=g[1],E=e.siteConfig,k=void 0===E?{}:E,y=k.baseUrl,N=k.themeConfig,C=void 0===N?{}:N,x=C.navbar,S=void 0===x?{}:x,T=C.disableDarkMode,M=void 0!==T&&T,B=S.title,F=S.logo,L=void 0===F?{}:F,P=S.links,I=void 0===P?[]:P,X=Object(n.useCallback)((function(){s(!0)}),[s]),A=Object(n.useCallback)((function(){s(!1)}),[s]),U=Object(n.useCallback)((function(e){return b(e.target.checked?"dark":"")}),[b]),D=Object(o.a)(L.src);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en","data-theme":v})),r.a.createElement("nav",{className:d()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":a})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:X,onKeyDown:X},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(u.a,{className:"navbar__brand",to:y},null!=L&&r.a.createElement("img",{className:"navbar__logo",src:D,alt:L.alt}),null!=B&&r.a.createElement("strong",{className:h?O.a.hideLogoText:""},B)),I.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(j,Object(i.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},I.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(j,Object(i.a)({},e,{key:t}))})),!M&&r.a.createElement(w,{className:O.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===v,onChange:U}),r.a.createElement(p,{handleSearchBarToggle:f,isSearchBarExpanded:h}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:function(){s(!1)}}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(u.a,{className:"navbar__brand",onClick:A,to:y},null!=L&&r.a.createElement("img",{className:"navbar__logo",src:D,alt:L.alt}),null!=B&&r.a.createElement("strong",null,B)),!M&&a&&r.a.createElement(w,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===v,onChange:U})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},I.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(j,Object(i.a)({className:"menu__link"},e,{onClick:A})))}))))))))},x=a(296);a(126);t.a=function(e){var t=Object(l.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,i=a.tagline,s=a.title,u=a.themeConfig.image,m=a.url,d=e.children,h=e.title,f=e.noFooter,p=e.description,g=e.image,v=e.keywords,b=e.permalink,E=e.version,k=h||s+" \xb7 "+i,y=g||u,w=m+Object(o.a)(y),_=Object(o.a)(n);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),k&&r.a.createElement("title",null,k),k&&r.a.createElement("meta",{property:"og:title",content:k}),n&&r.a.createElement("link",{rel:"shortcut icon",href:_}),p&&r.a.createElement("meta",{name:"description",content:p}),p&&r.a.createElement("meta",{property:"og:description",content:p}),E&&r.a.createElement("meta",{name:"docsearch:version",content:E}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),y&&r.a.createElement("meta",{property:"og:image",content:w}),y&&r.a.createElement("meta",{property:"twitter:image",content:w}),y&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+k}),b&&r.a.createElement("meta",{property:"og:url",content:m+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(C,null),r.a.createElement("div",{className:"main-wrapper"},d),!f&&r.a.createElement(x.a,null))}},293:function(e,t,a){var n=a(70),r=a(23);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},294:function(e,t,a){var n=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(r){}}return!0}},295:function(e,t,a){"use strict";var n=a(34);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d})),a.d(t,"c",(function(){return n.e}))},296:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),l=a(288),o=a.n(l),i=a(291),s=a(287),u=a(290);t.a=function(){var e=Object(s.a)().siteConfig,t=void 0===e?{}:e,a=t.themeConfig,l=(void 0===a?{}:a).footer;if(!l)return null;var m=l.copyright,d=l.links,h=void 0===d?[]:d,f=l.logo;return c.a.createElement("footer",{className:o()("footer",{"footer--dark":"dark"===l.style})},c.a.createElement("div",{className:"container"},h&&h.length>0&&c.a.createElement("div",{className:"row footer__links"},h.map((function(e,a){return c.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,l,o){return c.a.createElement(r.Fragment,{key:l},c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},e.label&&c.a.createElement(i.a,Object(n.a)({className:"footer__link-item"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{to:Object(u.a)(e.to)}),e.label),e.html&&c.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})),o.length-1===l&&2===a&&c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{key:"gh-star",className:"footer__item footer__item--gh"},c.a.createElement("iframe",{title:"github",src:"https://ghbtns.com/github-btn.html?user="+t.organizationName+"&repo="+t.projectName+"&type=star&count=true&size=small"})),c.a.createElement("li",{key:"license",className:"footer__item"},c.a.createElement("a",{href:Object(u.a)("img/icons/148705-essential-collection/license/license.html")},"License for icons"))))}))):null)}))),(f||m)&&c.a.createElement("div",{className:"text--center"},f&&f.src&&c.a.createElement("a",{className:"footer__logo margin-bottom--sm",href:"https://www.canopytax.com/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{alt:f.alt,src:Object(u.a)(f.src)})),m)))}},297:function(e,t,a){"use strict";var n=a(17),r=a(35),c=a(293),l="".startsWith;n(n.P+n.F*a(294)("startsWith"),"String",{startsWith:function(e){var t=c(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return l?l.call(t,n,a):t.slice(a,a+n.length)===n}})},298:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=d(c),o=d(a(288)),i=d(a(10)),s=d(a(299)),u=d(a(300)),m=a(301);function d(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,m.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,m.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,m.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:l.default.createElement(s.default,null),unchecked:l.default.createElement(u.default,null)}},h.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},299:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},300:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},301:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},320:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),l=a.n(c),o=a(288),i=a.n(o),s=a(287),u=a(290),m=[{caption:"CanopyTax",image:"img/canopy-logo-icon.svg",infoLink:"https://www.canopytax.com",pinned:!0},{caption:"DealerSocket",image:"img/dealersocket.png",infoLink:"https://dealersocket.com/",pinned:!0},{caption:"Beamery",image:"img/beamery.svg",infoLink:"https://beamery.com/",pinned:!0},{caption:"Innovaccer",image:"img/innovaccer-logo-black.svg",infoLink:"https://innovaccer.com",pinned:!0},{caption:"Dstillery",image:"img/dstillery.png",infoLink:"https://dstillery.com",pinned:!0},{caption:"Scania",image:"img/scania-logo.png",infoLink:"https://scania.com",pinned:!0},{caption:"Wavecell",image:"img/wavecell.svg",infoLink:"https://wavecell.com",pinned:!0},{caption:"OpenMRS",image:"img/openmrs.svg",infoLink:"https://openmrs.org",pinned:!0}],d=a(128),h=a.n(d);a.d(t,"a",(function(){return f}));var f=function(e){var t,a=e.showAll,n=Object(s.a)().siteConfig,c=void 0===n?{}:n,l=(a?m:m.filter((function(e){return e.pinned}))).map((function(e,t){return r.a.createElement("a",{key:t,className:h.a.showcaseLogo,href:e.infoLink},r.a.createElement("img",{src:Object(u.a)(e.image),title:e.caption}))}));return r.a.createElement("section",{className:i()("text--center margin-top--xl",h.a.showcase)},r.a.createElement("h2",{className:i()("showcaseHeading",(t={},t[h.a.showcaseHeadingColored]=!a,t))},"Who's Using This?"),r.a.createElement("p",null,"This project is used by all these organizations"),r.a.createElement("div",{className:h.a.showcaseLogos},l),a?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Are you using this project?"),r.a.createElement("a",{href:c.customFields.repoUrl+"/edit/master/website/src/data/users.js",className:"button"},"Add your company")):r.a.createElement("div",{className:"more-users"},r.a.createElement("a",{className:"button",href:Object(u.a)("users")},"More ",c.title," Users")))};f.propTypes={showAll:l.a.bool},f.defaultProps={showAll:!1}}}]);