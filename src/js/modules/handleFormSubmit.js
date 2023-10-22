const handleFormSubmit = (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('form-name').parentElement;
  const emailInput = document.getElementById('form-email').parentElement;
  const messageInput = document.getElementById('form-message').parentElement;
  const submitInput = document.getElementById('form-submit');
  const formElement = document.getElementById('modal-form');

  const name = document.getElementById('form-name').value;
  const email = document.getElementById('form-email').value;
  const message = document.getElementById('form-message').value;

  const validation = () => {
    const errors = []

    if(name === '' | (/[0-9]/g).test(name)){
      nameInput.classList.remove('_ok')
      nameInput.classList.add('_error')
      errors.push('name')
    } else {
      nameInput.classList.remove('_error')
      nameInput.classList.add('_ok')
    }

    if(email === '' | !(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(email)){
      emailInput.classList.remove('_ok')
      emailInput.classList.add('_error')
      errors.push('email')
    } else {
      emailInput.classList.remove('_error')
      emailInput.classList.add('_ok')
    }

    if(message === ''){
      messageInput.classList.remove('_ok')
      messageInput.classList.add('_error')
      errors.push('message')
    } else {
      messageInput.classList.remove('_error')
      messageInput.classList.add('_ok')
    }

    return errors
  }

  if(validation().length < 1){
    submitInput.innerHTML = "✓"
    formElement.classList.add('_ok')

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    console.log('Отправка формы')



  } else {
    submitInput.classList.add('_error')
  }

}

export default handleFormSubmit