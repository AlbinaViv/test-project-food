import { discountMarkup, mainCardsMarkup } from './cards';

const cardsPaggin = document.querySelector('.cards-paggination');
const cardsDiscount = document.querySelector('.discount');

async function render() {
  const mainCardsMarkup = await mainCardsMarkup();
  cardsPaggin.insertAdjacentElement('beforeend', mainCardsMarkup);

  const discountMarkup = await discountMarkup();

  cardsDiscount.insertAdjacentElement('beforeend', discountMarkup);
}
render();
