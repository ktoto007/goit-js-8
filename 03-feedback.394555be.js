var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,r=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,l=u||f||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return l.Date.now()};function v(e,t,n){var o,i,a,r,u,f,l=0,c=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,a=i;return o=i=void 0,l=t,r=e.apply(a,n)}function h(e){return l=e,u=setTimeout(O,t),c?y(e):r}function j(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-l>=a}function O(){var e=d();if(j(e))return w(e);u=setTimeout(O,function(e){var n=t-(e-f);return v?m(n,a-(e-l)):n}(e))}function w(e){return u=void 0,b&&o?y(e):(o=i=void 0,r)}function T(){var e=d(),n=j(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return h(f);if(v)return u=setTimeout(O,t),y(f)}return void 0===u&&(u=setTimeout(O,t)),r}return t=p(t)||0,g(n)&&(c=!!n.leading,a=(v="maxWait"in n)?s(p(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=i=u=void 0},T.flush=function(){return void 0===u?r:w(d())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=i.test(e);return u||a.test(e)?r(e.slice(2),u?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form");document.addEventListener("DOMContentLoaded",(function(){let e;try{e=JSON.parse(localStorage.getItem("feedback-form-state")),console.log(e)}catch(e){console.log(e.name),console.log(e.message)}null!==e&&(""==e.email&&""==e.message||(b.email.value=e.email,b.message.value=e.message))})),b.addEventListener("input",t((function(){const e={email:b.email.value,message:b.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),console.log(b.email.value),console.log(b.message.value),localStorage.removeItem("feedback-form-state"),b.email.value="",b.message.value=""}));
//# sourceMappingURL=03-feedback.394555be.js.map
