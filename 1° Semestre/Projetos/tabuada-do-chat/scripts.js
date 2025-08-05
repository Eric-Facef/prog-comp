  function gerarTabuada() {
      const numeroInput = document.getElementById('numero');
      const limiteInput = document.getElementById('limite');
      const resultado = document.getElementById('resultado');

      const numero = numeroInput.value;
      let limite = limiteInput.value;

      resultado.innerHTML = ''; // Limpa o resultado anterior

      if (numero === '') {
        alert('Por favor, digite o número da tabuada!');
        numeroInput.focus();
        return;
      }

      const n = parseInt(numero);
      limite = limite === '' ? 10 : parseInt(limite); // Se vazio, usa 10

      if (limite < 1) {
        alert('O limite deve ser maior ou igual a 1!');
        limiteInput.focus();
        return;
      }

      for (let i = 1; i <= limite; i++) {
        const item = document.createElement('li');
        item.textContent = `${n} x ${i} = ${n * i}`;
        resultado.appendChild(item);

        setTimeout(() => {
          item.classList.add('mostrar');
        }, i * 50);
      }

      numeroInput.value = ''; // Limpa os campos
      limiteInput.value = '';
      numeroInput.focus();
    }

    // Função de imprimir
    function imprimirTabuada() {
      const resultado = document.getElementById('resultado');
      if (resultado.children.length === 0) {
        alert('Gere a tabuada antes de imprimir!');
        return;
      }
      window.print();
    }