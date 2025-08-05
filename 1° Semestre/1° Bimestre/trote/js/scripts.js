function calcular() {
    // vamos criar duas variaveis
    // JS as variaveis não posuem tipo
    let mascote, homenagem, leite, kit, suplemento, soma, equipe, sangue
    // recupera o valor do mascote digitado pelo usuario
    mascote = Number(document.getElementById("mascote").value)
    // recupera o valor da homenagem digitado pelo usuario
    homenagem = Number(document.getElementById("homenagem").value)
    // recupera a quantidade de litros de leite
    leite = Number(document.getElementById("leite").value)
    // recupera a qtde de kits avulso 
    kit = Number(document.getElementById("kit").value)
    // recupera a qtde de suplemento avulso
    suplemento = Number(document.getElementById("suplemento").value)
    sangue = Number(document.getElementById("sangue").value)
    // calcular a soma
    soma = mascote + homenagem + (2 * (leite))
    // vamos calcular a pontuação considerando metas de kits e suple.
    equipe = document.getElementById("equipe").value
    if (equipe == "Laranja"){
        // verifica kit, suplemento
        if (kit >= 97 && suplemento >= 49) {
            soma = soma + 5000 + ((kit-97) * 30) + ((suplemento - 49) * 15)
        }
        else if (kit >= 78 && suplemento >= 39) {
            soma = soma + 4000 + ((kit-78) * 30) + ((suplemento - 39) * 15)
        }
        else if (kit >= 49 && suplemento >= 25) {
            soma = soma + 2500 + ((kit-49) * 30) + ((suplemento - 25) * 15)
        }
        else if (kit >= 19 && suplemento >= 10) {
            soma = soma + 1000 + ((kit-19) * 30) ((suplemento - 10) * 15)
        }
        // verifica sangue
        if (sangue >= 49){
            soma = soma + 2500 + ((sangue - 49) * 20)
        }
        else {
            soma = soma + (sangue * 20)
        }
    }

   
    // retorna o valor ao HTML
    // template string
    document.getElementById("soma").innerHTML = `A soma é ${soma}`
}
