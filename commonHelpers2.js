import{a as f}from"./assets/vendor-58ca5e57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();console.log("header");console.log("basket");const p=f.create({baseURL:"https://food-boutique.b.goit.study/api/"});async function c(n){try{const{data:o}=await p(n);return o}catch(o){console.log(o)}finally{}}function g(){return c("/products")}function m(){return c("/products/popular")}m().then(console.log);function y(){return c("/products/discount")}y().then(console.log);async function h(){return(await c("/products/categories")).map(r=>r.split("_").join(" "))}h().then(console.log);async function l(n){const{results:o}=await g(),r=o.map(({img:e,name:t,category:i,popularity:u,price:a,size:d,_id:v,is10PercentOff:L})=>`<li>
     <a href=""><img src="${e}" alt="${t}">
         <div class="description">
             <h3>${t}</h3>
             <ul>
                 <li><span>${i}</span></li>
                 <li><span>${d}</span></li>
                 <li><span>${u}</span></li>
             </ul>
         </div>
         <div class="price">
             <p>${a}</p>
             <button type="button"></button>
         </div>
     </a>
 </li>`).join(""),s=document.createElement("ul");return s.innerHTML=r,s}l().then(console.log);const b=document.querySelector(".cards-paggination");async function P(){const n=await l();b.insertAdjacentElement("beforeend",n)}P();
//# sourceMappingURL=commonHelpers2.js.map
