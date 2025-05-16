function aplicarFocoVisual(input) {
    if (window.innerWidth > 600) {
        input.classList.add('foco');
    }
}

function removerFocoVisual(input) {
    input.classList.remove('foco');
}

function fazerChute() {
    const input = document.getElementById('chuteInput');
    const valorDigitado = input.value.trim();
    const chute = Number(valorDigitado);
    const mensagem = document.getElementById('mensagem');
    const tentativasLista = document.getElementById('tentativasLista');
    const divChutesBaixos = document.getElementById('chutesBaixos');
    const divChutesAltos = document.getElementById('chutesAltos');

    if (valorDigitado === '' || isNaN(chute) || chute < 0 || chute > 100) {
        mensagem.textContent = "Por favor, digite um número válido entre 0 e 100.";
        input.value = '';
        input.focus();
        aplicarFocoVisual(input);
        return;
    }

    if (numerosTentados.includes(chute)) {
        mensagem.textContent = "Você já tentou esse número! Tente outro.";
        input.value = '';
        input.focus();
        aplicarFocoVisual(input);
        return;
    }

    tt++;
    cA.push(chute);
    numerosTentados.push(chute);  

    if (chute < numeroSecreto) {
        mensagem.textContent = "Seu chute foi BAIXO! Tente novamente.";
        cB.push(chute);
    } else if (chute > numeroSecreto) {
        mensagem.textContent = "Seu chute foi ALTO! Tente novamente.";
        cH.push(chute);
    } else {
        mensagem.innerHTML = `<strong>O número está CORRETO!</strong><br> Parabéns! Você acertou o número em ${tt} tentativa(s)`;
        console.log(`Acertou o número em ${tt} tentativas! Número secreto: ${numeroSecreto}`); 
    }

    tentativasLista.innerHTML = `<strong>Números tentados:</strong> ${cA.join(', ')}`;
    divChutesBaixos.innerHTML = `<strong>Chutes baixos:</strong> <span class="chutes-baixos">${cB.join(', ') || 'Nenhum' }</span>`;
    divChutesAltos.innerHTML = `<strong>Chutes altos:</strong> <span class="chutes-altos">${cH.join(', ') || 'Nenhum' }</span>`;

    input.value = '';
    input.focus();
    aplicarFocoVisual(input);
}


function reiniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 101);
    console.log("Novo número secreto é:", numeroSecreto);

    tt = 0;
    cA = [];
    cB = [];
    cH = [];
    numerosTentados = [];  

    document.getElementById('mensagem').textContent = '';
    document.getElementById('tentativasLista').textContent = '';
    document.getElementById('chutesBaixos').textContent = '';
    document.getElementById('chutesAltos').textContent = '';

    const input = document.getElementById('chuteInput');
    input.disabled = false;
    input.value = '';
    input.focus();
    aplicarFocoVisual(input);
}

function alternarDarkMode(){
    document.body.classList.toggle('dark');
    const currentTheme = document.body.classList.contains('dark') ? 'Dark mode' : 'Light mode';
    console.log(`O tema foi alterado para: ${currentTheme}`);

    const input = document.getElementById('chuteInput');
    input.focus();
    aplicarFocoVisual(input);
}

function mostrarAjuda() {
    const mensagem = document.getElementById('mensagem');
    mensagem.innerHTML = `
        <strong>Modo Ajuda:</strong><br>
        - Digite um número entre 0 e 100 e pressione ENTER para chutar.<br>
        - Pressione <strong>+</strong> para reiniciar o jogo.<br>
        - Pressione <strong>-</strong> para alternar o tema (Dark/Light).<br>
        - Não repita números já tentados.<br>
        - O objetivo é adivinhar o número secreto gerado aleatoriamente.<br>
        - Pressione <strong>?</strong> para ver esta ajuda novamente.
    `;
    console.log("Modo ajuda ativado. Regras exibidas na tela.");

    const input = document.getElementById('chuteInput');
    input.focus();
    aplicarFocoVisual(input);
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        fazerChute();
    } else if (event.key === '+'){
        event.preventDefault();
        reiniciarJogo();
    } else if (event.key === '-') {
        event.preventDefault();
        alternarDarkMode();
    }
    else if (event.key === '?' || (event.code === 'Slash' && event.shiftKey)) {
        event.preventDefault();
        mostrarAjuda();
    }
});
