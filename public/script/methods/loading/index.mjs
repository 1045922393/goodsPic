export function showLoading() {
  let mask = document.querySelector('.mask');
  mask.classList.remove('hidden');
}

export function hideLoading() {
  let mask = document.querySelector('.mask');
  mask.classList.add('hidden');
}
