(()=>{var l="theme-preference",a={dark:"{{ designTokens.colors.items[0].value }}",light:"{{ designTokens.colors.items[1].value }}"},t={value:g()};window.onload=()=>{let e=document.querySelector("#theme-toggle");document.querySelector("[data-theme-switcher]")&&(c(),o(),r(),e.addEventListener("click",i),e.setAttribute("aria-pressed",t.value==="light"))};window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:e})=>{t.value=e?"dark":"light",s(),o(),r()});function i(){t.value=t.value==="light"?"dark":"light",document.querySelector("#theme-toggle").setAttribute("aria-pressed",t.value==="light"),s(),o(),r()}function g(){return localStorage.getItem(l)?localStorage.getItem(l):window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function s(){localStorage.setItem(l,t.value),c(),o()}function c(){document.firstElementChild.setAttribute("data-theme",t.value)}function o(){let e=document.querySelector('meta[name="theme-color"]'),n=t.value==="dark"?a.dark:a.light;e.setAttribute("content",n)}function r(){let e=document.querySelector("#theme-toggle");e.innerHTML=t.value==="light"?'{% svg "misc/sun", "Light Theme Toggle", "theme-switch light-theme-toggle", "block-size: 2ex;" %}':'{% svg "misc/moon", "Dark Theme Toggle", "theme-switch dark-theme-toggle", "block-size: 2ex;" %}'}c();r();})();