// функция обработчик аккордиона
function accordion() {
  const accordionBtnArr = document.querySelectorAll('.accordion__btn')
  accordionBtnArr.forEach((btn) => {
    btn.addEventListener('click', ((e)=> {
      if(btn.matches('.accordion__btn_active')) {
        const path = e.currentTarget.dataset.path;
        const sablist = document.querySelector(`[data-target="${path}"]`);
        const sablistArr = document.querySelectorAll('.accordion__sublist');
        sablistArr.forEach((i) => {
          i.classList.remove('accordion__sublist_active')
        })
        accordionBtnArr.forEach((j) => {
          j.classList.remove('accordion__btn_active')
        })
      } else { //закрыть при повторном клике
        const path = e.currentTarget.dataset.path;
        const sablist = document.querySelector(`[data-target="${path}"]`);
        const sablistArr = document.querySelectorAll('.accordion__sublist');
        sablistArr.forEach((i) => {
          i.classList.remove('accordion__sublist_active')
        })
        accordionBtnArr.forEach((j) => {
          j.classList.remove('accordion__btn_active')
        })
        sablist.classList.add('accordion__sublist_active')
        btn.classList.add('accordion__btn_active')
      }
    }))
  })
}
accordion()