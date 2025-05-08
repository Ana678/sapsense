const pacientes = 128;
const mediaSAP = 7.4;
const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const mediaPorDia = [6.8, 7.1, 7.6, 7.3, 7.8, 7.5, 7.2];

document.getElementById('totalPacientes').textContent = pacientes;
document.getElementById('mediaSAPs').textContent = mediaSAP.toFixed(1);

const ctx = document.getElementById('graficoSAPs').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: diasSemana,
    datasets: [{
      label: 'Média SAPs',
      data: mediaPorDia,
      fill: false,
      borderColor: '#416b44',
      tension: 0.3,
      pointBackgroundColor: '#416b44'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 10
      }
    }
  }
});

document.getElementById?.('loginForm')?.addEventListener?.('submit', function (e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMessage');
    if (user === 'admin' && pass === 'admin123') {
      alert('Login realizado com sucesso!');
    } else {
      errorMsg.textContent = 'Usuário ou senha inválidos.';
    }
  });

  document.getElementById('logoutBtn').addEventListener('click', function () {
    window.location.href = '../login/index.html';
  });
