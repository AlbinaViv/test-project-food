import { getAllProducts } from "./fetch";

export async function mainCardsMarkup(arr) {
    const {results} = await getAllProducts();
     const markup = results.map(({img, name, category, popularity, price, size, _id , is10PercentOff})=>`<li>
     <a href=""><img src="${img}" alt="${name}">
         <div class="description">
             <h3>${name}</h3>
             <ul>
                 <li><span>${category}</span></li>
                 <li><span>${size}</span></li>
                 <li><span>${popularity}</span></li>
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
    return ul;

};
    
mainCardsMarkup().then(console.log);