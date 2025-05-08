document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const errorMsg = document.getElementById('errorMessage');

  if (user === 'admin' && pass === 'admin123') {
    window.location.href = '../dashboard/index.html';
  } else {
    errorMsg.textContent = 'Usuário ou senha inválidos.';
  }
});
