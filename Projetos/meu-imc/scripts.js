const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const resultadoDiv = document.getElementById('resultado');
const graficoCanvas = document.getElementById('graficoIMC');
const btnPDF = document.getElementById('btnPDF');

let grafico; // Chart.js global

pesoInput.addEventListener('input', () => resultadoDiv.textContent = '');
alturaInput.addEventListener('input', () => resultadoDiv.textContent = '');

function calcularIMC() {
  let peso = parseFloat(pesoInput.value);
  let altura = parseFloat(alturaInput.value);

  if (isNaN(peso) || peso <= 0) {
    alert('Peso inválido.');
    return;
  }
  if (isNaN(altura) || altura <= 0) {
    alert('Altura inválida.');
    return;
  }
  if (altura < 0.5 || altura > 2.5) {
    alert('Altura inválida (deve estar entre 0,5 e 2,5 metros).');
    return;
  }

  const imc = peso / (altura * altura);

  let classificacao = '';
  if (imc < 18.5) classificacao = 'Abaixo do peso';
  else if (imc < 24.9) classificacao = 'Peso normal';
  else if (imc < 29.9) classificacao = 'Sobrepeso';
  else if (imc < 34.9) classificacao = 'Obesidade grau I';
  else if (imc < 39.9) classificacao = 'Obesidade grau II';
  else classificacao = 'Obesidade grau III';

  const agora = new Date();
  const dataFormatada = agora.toLocaleDateString('pt-BR');
  const horaFormatada = agora.toLocaleTimeString('pt-BR');

  resultadoDiv.innerHTML = `
    Seu IMC é <strong>${imc.toFixed(2)}</strong> — ${classificacao} <br>
    <small>Calculado em: ${dataFormatada} às ${horaFormatada}</small>
  `;

  exibirGrafico(imc);
}

function exibirGrafico(imc) {
  graficoCanvas.style.display = 'block';

  if (grafico) grafico.destroy();

  grafico = new Chart(graficoCanvas, {
    type: 'bar',
    data: {
      labels: ['Seu IMC'],
      datasets: [{
        label: 'IMC',
        data: [imc],
        backgroundColor: ['rgba(59, 130, 246, 0.7)'],
        borderColor: ['rgba(59, 130, 246, 1)'],
        borderWidth: 1,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: 40,
          ticks: { stepSize: 5 }
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
}

function limparCampos() {
  pesoInput.value = '';
  alturaInput.value = '';
  resultadoDiv.textContent = '';
  graficoCanvas.style.display = 'none';
  if (grafico) {
    grafico.destroy();
    grafico = null;
  }
}

function alternarTema() {
  document.body.classList.toggle('dark');
}

// Exportar PDF (texto + gráfico)
btnPDF.addEventListener('click', () => {
  if (!resultadoDiv.innerHTML) {
    alert('Calcule o IMC antes de exportar o PDF.');
    return;
  }
  if (graficoCanvas.style.display === 'none') {
    alert('O gráfico precisa estar visível para exportar.');
    return;
  }

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();

  pdf.setFontSize(16);
  pdf.text('Resultado do IMC', 10, 20);

  const texto = resultadoDiv.innerText;
  const linhas = pdf.splitTextToSize(texto, 180);
  pdf.setFontSize(12);
  pdf.text(linhas, 10, 30);

  // Converte canvas do gráfico para imagem PNG
  const imgData = graficoCanvas.toDataURL('image/png');

  // Adiciona a imagem no PDF
  pdf.addImage(imgData, 'PNG', 15, 70, 180, 90);

  pdf.save('resultado-imc.pdf');
});

document.addEventListener('keydown', function (event) {
  const isInput = document.activeElement.tagName === 'INPUT';

  if ((event.key === '+' || event.key === '-') && isInput) {
    event.preventDefault();
  }
  if (event.key === 'Enter') {
    calcularIMC();
  } else if (event.key === '-') {
    limparCampos();
  } else if (event.key === '+') {
    alternarTema();
  }
});
