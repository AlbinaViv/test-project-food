import { discountMarkup, mainCardsMarkup, popularMarkup } from './cards';

const cardsPaggin = document.querySelector('.cards-paggination');
const cardsPopular = document.querySelector('.popular');
const cardsDiscount = document.querySelector('.discount');

async function render() {
  const mainCards = await mainCardsMarkup();
  cardsPaggin.insertAdjacentElement('beforeend', mainCards);

  const popularCards = await popularMarkup();
  cardsPopular.insertAdjacentElement('beforeend', popularCards);

  const discountCards = await discountMarkup();
  cardsDiscount.insertAdjacentElement('beforeend', discountCards);
}
render();
