export const toggleModal = () => {
  const modalWrapper = document.querySelector('.modal')
  const body = document.querySelector('body')

  if(modalWrapper.classList.contains('active')) {
    modalWrapper.classList.remove('active')
    body.style.overflow = 'auto'
  }
  else{
    modalWrapper.classList.add('active')
    body.style.overflow = 'hidden'
  }
}