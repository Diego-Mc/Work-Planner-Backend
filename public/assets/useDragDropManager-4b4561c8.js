import{r as t,D as r,i as e}from"./index-f9649d7c.js";var n=function t(r,e){if(r===e)return!0;if(r&&e&&"object"==typeof r&&"object"==typeof e){if(r.constructor!==e.constructor)return!1;var n,o,u;if(Array.isArray(r)){if((n=r.length)!=e.length)return!1;for(o=n;0!=o--;)if(!t(r[o],e[o]))return!1;return!0}if(r.constructor===RegExp)return r.source===e.source&&r.flags===e.flags;if(r.valueOf!==Object.prototype.valueOf)return r.valueOf()===e.valueOf();if(r.toString!==Object.prototype.toString)return r.toString()===e.toString();if((n=(u=Object.keys(r)).length)!==Object.keys(e).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(e,u[o]))return!1;for(o=n;0!=o--;){var f=u[o];if(!t(r[f],e[f]))return!1}return!0}return r!=r&&e!=e};const o="undefined"!=typeof window?t.useLayoutEffect:t.useEffect;function u(r,e,u){const[f,a]=t.useState((()=>e(r))),c=t.useCallback((()=>{const t=e(r);n(f,t)||(a(t),u&&u())}),[f,r,u]);return o(c),[f,c]}function f(){const{dragDropManager:n}=t.useContext(r);return e(null!=n,"Expected drag drop context"),n}export{u as a,o as b,f as u};
