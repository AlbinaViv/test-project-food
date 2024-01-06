import{a as p}from"./assets/vendor-58ca5e57.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();console.log("header");console.log("basket");const f=p.create({baseURL:"https://food-boutique.b.goit.study/api/"});async function i(o){try{const{data:e}=await f(o);return e}catch(e){console.log(e)}finally{}}function m(){return i("/products")}function g(){return i("/products/popular")}g().then(console.log);function h(){return i("/products/discount")}h().then(console.log);async function y(){return(await i("/products/categories")).map(n=>n.split("_").join(" "))}y().then(console.log);async function l(o){const{results:e}=await m(),n=e.map(({img:t,name:s,category:c,popularity:a,price:u,size:d,_id:w,is10PercentOff:P})=>`<li class="cards-products-list">
     <a href=""><div class="wrap-img"><img class="cards-img" src="${t}" alt="${s}"></div>
     <div class="description">
             <h3 class="descr-title">${s}</h3>
             <ul class="list discription-list">
                 <li class="cards-text"><p class="inform-products">Category:</p><span class="inform-products-dom">${c}</span></li>
                 <li class="cards-text"><p class="inform-products">Size:</p><span class="inform-products-dom">${d}</span></li>
                 <li class="cards-text"><p class="inform-products">Popularity:</p><span class="inform-products-dom">${a}</span></li>
             </ul>
         </div>
         <div class="price-btn">
             <p class="price">$${u}</p>
             <button class="btn-white-basket" type="button">
             <svg class="icon-basket-white" width="18" height="18">
             <use href="../img/sprite.svg#icon-white-basket"></use>
    </svg>
             </button>
         </div>
     </a>
 </li>`).join("").split("_").join(" "),r=document.createElement("ul");return r.innerHTML=n,r.classList="list cards-list",r}l().then(console.log);const b=document.querySelector(".cards-paggination");async function v(){const o=await l();b.insertAdjacentElement("beforeend",o)}v();
//# sourceMappingURL=commonHelpers2.js.map
