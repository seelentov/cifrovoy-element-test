import bannerGradient from './modules/bannerGradient.js'
import onEntry from './modules/onEntry.js'
import {toggleModal} from './modules/modal.js'
import form from './modules/handleFormSubmit.js'
import handleFormSubmit from './modules/handleFormSubmit.js'

document.addEventListener('DOMContentLoaded',()=>{

  document.addEventListener('scroll', ()=>{
    bannerGradient(window.scrollY)
  })

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal') || e.target.classList.contains('action__button')) {
      toggleModal()
    }
  });

  const form = document.querySelector('#modal-form')
  form.addEventListener('submit', (e)=>{
    handleFormSubmit(e)
  })

})