import { Loading } from 'notiflix';

export function addLoader() {
  Loading.pulse({
    backgroundColor: 'rgba(0,0,0,0.8)',
    svgSize: '70px',
    svgColor: 'var(--primary-dark-color)',
  });
}

export function removeLoader() {
  Loading.remove(2000);
}
