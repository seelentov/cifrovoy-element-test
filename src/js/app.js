const bannerHover = (scroll) =>{
  const bannerHover = document.querySelector('.banner-hover')

  bannerHover.style.background = `linear-gradient(0deg, rgb(0, 136, 255) 0%, rgb(0, 136, 255) ${scroll/5}%, transparent 100%)`
}

document.addEventListener('DOMContentLoaded',()=>{

  document.addEventListener('scroll', ()=>{
    bannerHover(window.scrollY)
  })

})