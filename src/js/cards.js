import {
  getAllProducts,
  getDiscountProducts,
  getPopularProducts,
} from './fetch';

import { openModal } from './modal';

export async function mainCardsMarkup(arr) {
  const { results } = await getAllProducts();
  const markup = results
    .map(
      ({
        img,
        name,
        category,
        popularity,
        price,
        size,
        _id,
        is10PercentOff,
      }) => `<li class="cards-products-list">
     <a href=""><div class="wrap-img"><img class="cards-img" src="${img}" alt="${name}"></div>
     <h3 class="descr-title">${name}</h3>
     <div class="description">
             <ul class="list discription-list">
                 <li class="cards-text"><span class="inform-products">Category: </span><span class="inform-products-dom">${category
                   .split('_')
                   .join(' ')}</span></li>
                 <li class="cards-text"><span class="inform-products">Size: </span><span class="inform-products-dom">${size}</span></li>
                 <li class="cards-text"><span class="inform-products">Popularity: </span><span class="inform-products-dom">${popularity}</span></li>
             </ul>
         </div>
         <div class="price-btn">
             <p class="price">$${price}</p>
             <button class="btn-white-basket" type="button">
             <svg class="icon-basket-white" width="18" height="18">
             <use href="../img/sprite.svg#icon-white-basket"></use>
    </svg>
             </button>
         </div>
     </a>
 </li>`
    )
    .join('');

  const ul = document.createElement('ul');
  ul.innerHTML = markup;
  // створили ul і всередину(innerHTML) поклали markup
  ul.classList = 'list cards-list';

  ul.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName === 'UL') {
      return;
    }
    openModal();
  });

  return ul;
}

// mainCardsMarkup().then(console.log);
export async function popularMarkup(arr) {
  const result = await getPopularProducts();

  const markup = result
    .map(
      ({
        img,
        name,
        category,
        popularity,
        size,
        _id,
      }) => `<li class="cards-products-list">
    <a href=""
      ><div class="wrap-img">
        <img class="cards-img" src="${img}" alt="${name}" />
      </div>
      <div class="description">
        <h3 class="descr-title">${name}</h3>
        <ul class="list">
          <li class="cards-text">
            <span class="inform-products">Category: </span
            ><span class="inform-products-dom"
              >${category.split('_').join(' ')}</span
            >
          </li>
          <li class="cards-text">
            <span class="inform-products">Size: </span
            ><span class="inform-products-dom">${size}</span>
          </li>
          <li class="cards-text">
            <span class="inform-products">Popularity: </span
            ><span class="inform-products-dom">${popularity}</span>
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
  `
    )
    .join('');

  const ul = document.createElement('ul');
  ul.innerHTML = markup;
  // створили ul і всередину(innerHTML) поклали markup
  ul.classList = 'list popular-list';
  return ul;
}

export async function discountMarkup(arr) {
  const results = await getDiscountProducts();

  const markup = results
    .map(
      ({
        img,
        is10PercentOff,
        price,
        name,
        _id,
      }) => `<li class="cards-products-list">
      <a href=""
        ><div class="wrap-img">
          <img class="cards-img" src="${img}" alt="${name}" />
        </div>
        <div class="description">
          <h3 class="descr-title">${name}</h3>
          <p class="price">$${price}</p>
          <button class="btn-white-basket" type="button">
            <svg class="icon-basket-white" width="18" height="18">
              <use href="../img/sprite.svg#icon-white-basket"></use>
            </svg>
          </button>
        </div>
      </a>
    </li>
    `
    )
    .join('');

  const ul = document.createElement('ul');
  ul.innerHTML = markup;
  // створили ul і всередину(innerHTML) поклали markup
  ul.classList = 'list cards-list';
  return ul;
}
