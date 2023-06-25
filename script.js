document.getElementById('login-btn').addEventListener('click', (event) => {
  event.preventDefault();

  const email = document.getElementsByName('email')[0].value;
  const password = document.getElementsByName('password')[0].value;

  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
let textarea = document.getElementById('comment');
let maxLength = textarea.getAttribute('maxlength');
let counter = document.getElementById('counter');
const checkbox = document.getElementById('agreement');
const submitButtonElement = document.getElementById('submit-btn');

function caracterqtd() {
  counter.textContent = maxLength - textarea.value.length;
}

function submitBut() {
  submitButtonElement.disabled = !checkbox.checked;
}

textarea.addEventListener('input', caracterqtd);
checkbox.addEventListener('change', submitBut);
document.addEventListener('DOMContentLoaded', () => {
  maxLength = 500;
  counter = document.getElementById('counter');
  textarea = document.getElementById('comment');
  counter.textContent = maxLength.toString();

  textarea.addEventListener('input', () => {
    const currentLength = textarea.value.length;
    const remainingLength = maxLength - currentLength;

    counter.textContent = remainingLength.toString();

    if (remainingLength < 0) {
      textarea.value = textarea.value.slice(0, maxLength);
      counter.textContent = '0';
    }
  });
});
