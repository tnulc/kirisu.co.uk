module.exports=__NEXT_REGISTER_PAGE("/",function(){var e=webpackJsonp([0],{192:function(e,t,r){e.exports=r(193)},193:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=u(r(9));var o=u(r(194));var a=u(r(208));function u(e){return e&&e.__esModule?e:{default:e}}var i=function e(){return n.default.createElement(o.default,{title:"@kirisu"},n.default.createElement("section",{className:"hero is-fullheight is-light"},n.default.createElement("div",{className:"hero-body"},n.default.createElement("div",{className:"container has-text-centered"},n.default.createElement("h3",{className:"title is-3"},"@kirisu"),n.default.createElement("h4",{className:"subtitle is-4 has-text-grey-light"},"Christopher Lunt is a Software Engineer based in Glasgow, Scotland."),n.default.createElement("a",{href:"mailto:contact@kirisu.co.uk",className:"button is-medium is-primary is-outlined is-rounded"},n.default.createElement(a.default,null),n.default.createElement("span",null,"Contact Me"))))))};t.default=i},194:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=a(r(9));var o=a(r(195));r(207);function a(e){return e&&e.__esModule?e:{default:e}}var u=function e(t){var r=t.children,a=t.title,u=void 0===a?"":a;return n.default.createElement(n.default.Fragment,null,n.default.createElement(o.default,null,n.default.createElement("title",null,u)),r,n.default.createElement("div",{id:"root-modal"}))};t.default=u},195:function(e,t,r){e.exports=r(96)},208:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=o(r(9));function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}t.default=e;return t}function a(e){a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return a(e)}function u(e){return c(e)||l(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function c(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function d(e,t,r){t&&s(e.prototype,t);r&&s(e,r);return e}function p(e,t){if(t&&("object"===a(t)||"function"===typeof t))return t;return y(e)}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){m(t,e);function t(){var e;var r,n;f(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return p(n,(r=n=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(y(n),"state",{configurable:true,enumerable:true,writable:true,value:{angles:[0,315,0,45]}}),Object.defineProperty(y(n),"tick",{configurable:true,enumerable:true,writable:true,value:function e(){n.timer=setTimeout(function(){n.setState({angles:u(n.state.angles.slice(1,n.state.angles.length)).concat([n.state.angles[0]])});n.tick()},500)}}),r))}d(t,[{key:"componentDidMount",value:function e(){this.tick()}},{key:"componentWillUnmount",value:function e(){clearTimeout(this.timer)}},{key:"render",value:function e(){return n.default.createElement("span",{className:"icon"},n.default.createElement("i",{className:"mdi mdi-bell-ring-outline mdi-rotate-".concat(this.state.angles[0])}))}}]);return t}(n.Component);t.default=b},219:function(e,t){e.exports=function(e){var t=[];t.toString=function t(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")};t.i=function(e,r){"string"===typeof e&&(e=[[null,e,""]]);var n={};for(var o=0;o<this.length;o++){var a=this[o][0];"number"===typeof a&&(n[a]=true)}for(o=0;o<e.length;o++){var u=e[o];if("number"!==typeof u[0]||!n[u[0]]){r&&!u[2]?u[2]=r:r&&(u[2]="("+u[2]+") and ("+r+")");t.push(u)}}};return t};function r(e,t){var r=e[1]||"";var o=e[3];if(!o)return r;if(t&&"function"===typeof btoa){var a=n(o);var u=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[r].concat(u).concat([a]).join("\n")}return[r].join("\n")}function n(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,"+t;return"/*# "+r+" */"}}},[192]);return{page:e.default}});