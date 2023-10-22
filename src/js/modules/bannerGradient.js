const bannerGradientElement = document.querySelector('.banner-gradient')

const bannerGradient = (scroll) =>{
  if(scroll > 500) return
  bannerGradientElement.style.background = `linear-gradient(0deg, #98C3E8 ${scroll/5}%, rgba(152, 195, 232, 0.00) ${(scroll/5) + 20}%)`
  
}

export default bannerGradient 