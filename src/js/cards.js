import { getAllProducts } from "./fetch";

export async function mainCardsMarkup(arr) {
    const {results} = await getAllProducts();
     const markup = results.map(({img, name, category, popularity, price, size, _id , is10PercentOff})=>`<li class="cards-products-list">
     <a href=""><div class="wrap-img"><img class="cards-img" src="${img}" alt="${name}"></div>
     <div class="description">
             <h3 class="descr-title">${name}</h3>
             <ul>
                 <li class="cards-text"><span>${category}</span></li>
                 <li class="cards-text"><span>${size}</span></li>
                 <li class="cards-text"><span>${popularity}</span></li>
             </ul>
         </div>
         <div class="price">
             <p>${price}</p>
             <button type="button"></button>
         </div>
     </a>
 </li>`
    
    ).join('')

    const ul =document.createElement('ul');
    ul.innerHTML = markup;
    // створили ul і всередину(innerHTML) поклали markup 
    ul.classList = "list cards-list";
    return ul;

};
    
mainCardsMarkup().then(console.log);