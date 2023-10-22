import bannerGradient from './modules/bannerGradient.js'
import onEntry from './modules/onEntry.js'
import {toggleModal} from './modules/modal.js'
import {toggleBurger} from './modules/burger.js'
import form from './modules/handleFormSubmit.js'
import handleFormSubmit from './modules/handleFormSubmit.js'

document.addEventListener('DOMContentLoaded',()=>{

  document.addEventListener('scroll', ()=>{
    bannerGradient(window.scrollY)
  })

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal') || e.target.classList.contains('action__button') || e.target.closest('.form__header-close')) {
      toggleModal()
    }
    if (e.target.closest('.header__burger-btn') || e.target.closest('.burger-menu__close') || e.target.closest('.burger-menu__nav-link')) {
      toggleBurger()
    }
  });

  const form = document.querySelector('#modal-form')
  form.addEventListener('submit', (e)=>{
    handleFormSubmit(e)
  })

})