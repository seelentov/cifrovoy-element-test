export const toggleBurger = () => {
  const burgerWrapper = document.querySelector('.burger-menu')

  if(burgerWrapper.classList.contains('active')) {
    burgerWrapper.classList.remove('active')
  }
  else{
    burgerWrapper.classList.add('active')
  }
}