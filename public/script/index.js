import { showLoading, hideLoading } from './methods/loading/index.mjs'
// view层
(() => {
  let img = document.querySelector('.picImg');
  function addClick() {
    let pureParam = window.location.pathname.match(/(?<=pure\/)\d*/)
    let pure = pureParam ? pureParam[0] : '001'
    let api = '/getPicUrl';
    if(pure) api += `?pure=${pure}`
    document.removeEventListener('click', addClick)
    showLoading()
    axios.get(api).then(res => {
      img.src = res.data;
      img.onload = () => {
        hideLoading();
        document.addEventListener('click', addClick)
      }
    })
  }
  // click
  document.addEventListener('click', addClick)
})();