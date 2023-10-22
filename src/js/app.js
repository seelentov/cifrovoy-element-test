import bannerGradient from './modules/bannerGradient.js'
import onEntry from './modules/onEntry.js'

document.addEventListener('DOMContentLoaded',()=>{

  document.addEventListener('scroll', ()=>{
    bannerGradient(window.scrollY)
  })
})