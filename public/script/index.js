// view层
(() => {
  let img = document.querySelector('.picImg');
  function addClick() {
    let mask = document.querySelector('.picPage .mask');
    let pure = window.location.pathname.match(/(?<=\/)\d*/)[0]
    let api = '/getPicUrl';
    if(pure) api += `?pure=${pure}`
    document.removeEventListener('click', addClick)
    mask.classList.remove('hidden');
    axios.get(api).then(res => {
      img.src = res.data;
      img.onload = () => {
        mask.classList.add('hidden');
        document.addEventListener('click', addClick)
      }
    })
  }
  // click
  document.addEventListener('click', addClick)
})();