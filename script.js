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

