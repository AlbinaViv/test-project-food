import{a as f}from"./assets/vendor-58ca5e57.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(s){if(s.ep)return;s.ep=!0;const t=n(s);fetch(s.href,t)}})();console.log("header");console.log("basket");const m=f.create({baseURL:"https://food-boutique.b.goit.study/api/"});async function l(c){try{const{data:e}=await m(c);return e}catch(e){console.log(e)}finally{}}function g(){return l("/products")}async function d(){return(await l("/products/popular")).sort((r,s)=>s.popularity-r.popularity)}d().then(console.log);async function h(){return(await l("/products/discount")).sort(()=>Math.random()-.5).slice(0,2)}function y(c){const e=`/products/${c}`;return l(e)}const p=document.querySelector(".backdrop"),b=document.querySelector(".close");b.addEventListener("click",v);function v(){p.classList.add("is-hidden")}async function w(){p.classList.remove("is-hidden");const c=await y("640c2dd963a319ea671e3860");console.log(c)}async function k(c){const{results:e}=await g(),n=e.map(({img:s,name:t,category:a,popularity:o,price:i,size:u,_id:x,is10PercentOff:S})=>`<li class="cards-products-list">
     <a href=""><div class="wrap-img"><img class="cards-img" src="${s}" alt="${t}"></div>
     <h3 class="descr-title">${t}</h3>
     <div class="description">
             <ul class="list discription-list">
                 <li class="cards-text"><span class="inform-products">Category: </span><span class="inform-products-dom">${a.split("_").join(" ")}</span></li>
                 <li class="cards-text"><span class="inform-products">Size: </span><span class="inform-products-dom">${u}</span></li>
                 <li class="cards-text"><span class="inform-products">Popularity: </span><span class="inform-products-dom">${o}</span></li>
             </ul>
         </div>
         <div class="price-btn">
             <p class="price">$${i}</p>
             <button class="btn-white-basket" type="button">
             <svg class="icon-basket-white" width="18" height="18">
             <use href="../img/sprite.svg#icon-white-basket"></use>
    </svg>
             </button>
         </div>
     </a>
 </li>`).join(""),r=document.createElement("ul");return r.innerHTML=n,r.classList="list cards-list",r.addEventListener("click",s=>{s.preventDefault(),s.target.nodeName!=="UL"&&w()}),r}async function $(c){const n=(await d()).map(({img:s,name:t,category:a,popularity:o,size:i,_id:u})=>`<li class="cards-products-list">
    <a href=""
      ><div class="wrap-img">
        <img class="cards-img" src="${s}" alt="${t}" />
      </div>
      <div class="description">
        <h3 class="descr-title">${t}</h3>
        <ul class="list">
          <li class="cards-text">
            <span class="inform-products">Category: </span
            ><span class="inform-products-dom"
              >${a.split("_").join(" ")}</span
            >
          </li>
          <li class="cards-text">
            <span class="inform-products">Size: </span
            ><span class="inform-products-dom">${i}</span>
          </li>
          <li class="cards-text">
            <span class="inform-products">Popularity: </span
            ><span class="inform-products-dom">${o}</span>
          </li>
        </ul>
      </div>
      <button class="btn-green-basket" type="button">
        <svg class="icon-basket-green" width="18" height="18">
          <use href="../img/sprite.svg#icon-green-basket"></use>
        </svg>
      </button>
    </a>
  </li>
  `).join(""),r=document.createElement("ul");return r.innerHTML=n,r.classList="list popular-list",r}async function L(c){const n=(await h()).map(({img:s,is10PercentOff:t,price:a,name:o,_id:i})=>`<li class="cards-products-list">
      <a href=""
        ><div class="wrap-img">
          <img class="cards-img" src="${s}" alt="${o}" />
        </div>
        <div class="description">
          <h3 class="descr-title">${o}</h3>
          <p class="price">$${a}</p>
          <button class="btn-white-basket" type="button">
            <svg class="icon-basket-white" width="18" height="18">
              <use href="../img/sprite.svg#icon-white-basket"></use>
            </svg>
          </button>
        </div>
      </a>
    </li>
    `).join(""),r=document.createElement("ul");return r.innerHTML=n,r.classList="list cards-list",r}const P=document.querySelector(".cards-paggination"),E=document.querySelector(".popular"),M=document.querySelector(".discount");async function j(){const c=await k();P.insertAdjacentElement("beforeend",c);const e=await $();E.insertAdjacentElement("beforeend",e);const n=await L();M.insertAdjacentElement("beforeend",n)}j();
//# sourceMappingURL=commonHelpers2.js.map
