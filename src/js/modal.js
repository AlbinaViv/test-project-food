import { getProduct } from './fetch';

const backdropEl = document.querySelector('.backdrop');
const btnClose = document.querySelector('.close');

btnClose.addEventListener('click', closeModal);

export function closeModal() {
  backdropEl.classList.add('is-hidden');
}

export async function openModal() {
  backdropEl.classList.remove('is-hidden');
  const data = await getProduct('640c2dd963a319ea671e3860');
  console.log(data);
}

export function toggleModal() {
  backdropEl.classList.toggle('is-hidden');
}
