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

function updateCharacterCount(textarea) {
  const maxLength = textarea.getAttribute('maxlength');
  const counter = document.getElementById('counter');
  counter.textContent = maxLength - textarea.value.length;
}

function toggleSubmitButton(checkbox) {
  const submitButton = document.getElementById('submit-btn');
  submitButton.disabled = !checkbox.checked;
}

document.addEventListener('DOMContentLoaded', () => {
  const maxLength = 500;
  const counter = document.getElementById('counter');
  const textarea = document.getElementById('comment');

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