// Obtendo referências aos elementos do formulário
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('nome');
const emailInput = document.getElementById('e-mail');
const messageInput = document.getElementById('messagem');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const isFormValid = validateForm();
  
    if (isFormValid) {
      successMessage.textContent = 'Formulário enviado com sucesso!'
      FormData.reset();
    }else{
      successMessage.textContent = '';
    }
  });
  
  function validateForm() {
    let isValid = true;
  
    nameError.textContent ='';
    emailError.textContent ='';
    messageError.textContent ='';
  
    if (nameInput.value.trim().length < 3) {
      nameError.textContent = 'O nome deve ter pelo menos 3 caracteres.';
      isValid = false;
    }
  
  
    if (!emailInput.value.includes('@')) {
      emailError.textContent = 'Por favoro, insira um e-mail válido.'
      isValid = false;
    }
    if (messageInput.value.trim() === '') {
      messageError.textContent = 'A mensagem não pode estar vazia.'
      isValid = false;
    }
  
    return isValid;
  
  
  }

