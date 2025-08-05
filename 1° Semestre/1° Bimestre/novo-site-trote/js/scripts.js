function calcular() {

    let mascote, homenagem, leite, kit, suplemento, arroz5, arroz1, feijao2, feijao1, oleo, macarrao, animacao, rAudiovisual, soma, equipe, sangue

    mascote = Number(document.getElementById("mascote").value)
    homenagem = Number(document.getElementById("homenagem").value)
    animacao = Number(document.getElementById("animacao").value)
    rAudiovisual = Number(document.getElementById("rAudiovisual").value)
    leite = Number(document.getElementById("leite").value)
    arroz5 = Number(document.getElementById("arroz5").value)
    arroz1 = Number(document.getElementById("arroz1").value)
    feijao1 = Number(document.getElementById("feijao1").value)
    feijao2 = Number(document.getElementById("feijao2").value)
    oleo = Number(document.getElementById("oleo").value)
    macarrao = Number(document.getElementById("macarrao").value)
    kit = Number(document.getElementById("kit").value);
    suplemento = Number(document.getElementById("suplemento").value);
    sangue = Number(document.getElementById("sangue").value);

    soma = mascote + homenagem + (2 * (leite)) + arroz1 + (5 * (arroz5)) + feijao1 + (2 * (feijao2)) + oleo + ((macarrao) / 2) +  animacao + rAudiovisual 

    equipe = document.getElementById("equipe").value
    if (equipe == "Laranja"){
        if (kit >= 106 && suplemento >= 53) {
            soma += 5000 + ((kit-106) * 30) + ((suplemento - 53) * 15)
        } else if (kit >= 85 && suplemento >= 42) {
            soma += 4000 + ((kit-85) * 30) + ((suplemento - 42) * 15)
        } else if (kit >= 53 && suplemento >= 27) {
            soma += 2500 + ((kit-53) * 30) + ((suplemento - 27) * 15)
        } else if (kit >= 21 && suplemento >= 11) {
            soma += 1000 + ((kit-21) * 30) + ((suplemento - 11) * 15)
        } else {
            soma += (kit * 30) + (suplemento * 15)  
        }
        if (sangue >= 53) {
            soma += 2500 + ((sangue-53) * 20)
        } else {
            soma += (sangue * 20)
        }
    }    
    else if (equipe == "Preta"){
        if (kit >= 104 && suplemento >= 52) {
            soma += 5000 + ((kit-104) * 30) + ((suplemento - 52) * 15)
        } else if (kit >= 83 && suplemento >= 42) {
            soma += 4000 + ((kit-83) * 30) + ((suplemento - 42) * 15)
        } else if (kit >= 52 && suplemento >= 26) {
            soma += 2500 + ((kit-52) * 30) + ((suplemento - 26) * 15)
        } else if (kit >= 21 && suplemento >= 10) {
            soma += 1000 + ((kit-21) * 30) + ((suplemento - 10) * 15)
        } else {
            soma += (kit * 30) + (suplemento * 15)  
        }
        if (sangue >= 52) {
            soma += 2500 + ((sangue-52) * 20)
        } else {
            soma += (sangue * 20)
        }
    }    
    else if (equipe == "Roxa"){
        if (kit >= 105 && suplemento >= 53) {
            soma += 5000 + ((kit-105) * 30) + ((suplemento - 53) * 15)
        } else if (kit >= 84 && suplemento >= 42) {
            soma += 4000 + ((kit-84) * 30) + ((suplemento - 42) * 15)
        } else if (kit >= 53 && suplemento >= 27) {
            soma += 2500 + ((kit-53) * 30) + ((suplemento - 27) * 15)
        } else if (kit >= 21 && suplemento >= 11) {
            soma += 1000 + ((kit-21) * 30) + ((suplemento - 11) * 15)
        } else {
            soma += (kit * 30) + (suplemento * 15)  
        }
        if (sangue >= 53) {
            soma += 2500 + ((sangue-53) * 20)
        } else {
            soma += (sangue * 20)
        }
    }    
    else if (equipe == "Verde"){
        if (kit >= 89 && suplemento >= 45) {
            soma += 5000 + ((kit-89) * 30) + ((suplemento - 45) * 15)
        } else if (kit >= 71 && suplemento >= 36) {
            soma += 4000 + ((kit-71) * 30) + ((suplemento - 36) * 15)
        } else if (kit >= 45 && suplemento >= 23) {
            soma += 2500 + ((kit-45) * 30) + ((suplemento - 23) * 15)
        } else if (kit >= 18 && suplemento >= 9) {
            soma += 1000 + ((kit-18) * 30) + ((suplemento - 9) * 15)
        } else {
            soma += (kit * 30) + (suplemento * 15)  
        }
        if (sangue >= 45) {
            soma += 2500 + ((sangue-52) * 20)
        } else {
            soma += (sangue * 20)
        }
    }    
    else {
        if (kit >= 92 && suplemento >= 46) {
            soma += 5000 + ((kit-92) * 30) + ((suplemento - 46) * 15)
        } else if (kit >= 74 && suplemento >= 37) {
            soma += 4000 + ((kit-74) * 30) + ((suplemento - 37) * 15)
        } else if (kit >= 46 && suplemento >= 23) {
            soma += 2500 + ((kit-46) * 30) + ((suplemento - 23) * 15)
        } else if (kit >= 18 && suplemento >= 9) {
            soma += 1000 + ((kit-18) * 30) + ((suplemento - 9) * 15)
        } else {
            soma += (kit * 30) + (suplemento * 15)  
        }
        if (sangue >= 46) {
            soma += 2500 + ((sangue-52) * 20)
        } else {
            soma += (sangue * 20)
        }
    }    
    
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}

    document.addEventListener("DOMContentLoaded", function () {
    const selectEquipe = document.getElementById("equipe");
    const quadrado = document.getElementById("quadrado-cor");
  
    function atualizarCorQuadrado() {
      const corSelecionada = selectEquipe.value;
      quadrado.className = "quadrado-cor " + corSelecionada;
    }
  
    selectEquipe.addEventListener("change", atualizarCorQuadrado);
    atualizarCorQuadrado(); // Atualiza na primeira carga
  });
  