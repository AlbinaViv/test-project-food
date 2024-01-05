import{a as p}from"./assets/vendor-58ca5e57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();console.log("header");console.log("basket");const f=p.create({baseURL:"https://food-boutique.b.goit.study/api/"});async function i(s){try{const{data:o}=await f(s);return o}catch(o){console.log(o)}finally{}}function g(){return i("/products")}function m(){return i("/products/popular")}m().then(console.log);function y(){return i("/products/discount")}y().then(console.log);async function h(){return(await i("/products/categories")).map(n=>n.split("_").join(" "))}h().then(console.log);async function l(s){const{results:o}=await g(),n=o.map(({img:t,name:e,category:c,popularity:a,price:u,size:d,_id:L,is10PercentOff:P})=>`<li class="cards-products-list">
     <a href=""><div class="wrap-img"><img class="cards-img" src="${t}" alt="${e}"></div>
     <div class="description">
             <h3 class="descr-title">${e}</h3>
             <ul>
                 <li class="cards-text"><span>${c}</span></li>
                 <li class="cards-text"><span>${d}</span></li>
                 <li class="cards-text"><span>${a}</span></li>
             </ul>
         </div>
         <div class="price">
             <p>${u}</p>
             <button type="button"></button>
         </div>
     </a>
 </li>`).join(""),r=document.createElement("ul");return r.innerHTML=n,r.classList="list cards-list",r}l().then(console.log);const b=document.querySelector(".cards-paggination");async function v(){const s=await l();b.insertAdjacentElement("beforeend",s)}v();
//# sourceMappingURL=commonHelpers2.js.map
