import{a}from"./assets/vendor-58ca5e57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();console.log("header");console.log("basket");const l=a.create({baseURL:"https://food-boutique.b.goit.study/api/"});async function u(r){try{const{data:t}=await l(r);return t}catch(t){console.log(t)}finally{}}async function d(){return(await u("/products/discount")).sort(()=>Math.random()-.5).slice(0,2)}async function f(r){const c=(await d()).map(({img:e,is10PercentOff:s,price:n,name:i,_id:h})=>`<li class="cards-products-list">
      <a href=""
        ><div class="wrap-img">
          <img class="cards-img" src="${e}" alt="${i}" />
        </div>
        <div class="description">
          <h3 class="descr-title">${i}</h3>
          <p class="price">$${n}</p>
          <button class="btn-white-basket" type="button">
            <svg class="icon-basket-white" width="18" height="18">
              <use href="../img/sprite.svg#icon-white-basket"></use>
            </svg>
          </button>
        </div>
      </a>
    </li>
    `).join(""),o=document.createElement("ul");return o.innerHTML=c,o.classList="list cards-list",o}f();const p=document.querySelector(".cards-paggination"),m=document.querySelector(".discount");async function g(){const r=await r();p.insertAdjacentElement("beforeend",r);const t=await t();m.insertAdjacentElement("beforeend",t)}g();
//# sourceMappingURL=commonHelpers2.js.map
