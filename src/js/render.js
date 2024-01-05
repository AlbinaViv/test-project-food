import { mainCardsMarkup } from "./cards";

const divEl = document.querySelector('.cards-paggination');

async function render() {
const markup = await mainCardsMarkup();
divEl.insertAdjacentElement("beforeend", markup);

}
render();
