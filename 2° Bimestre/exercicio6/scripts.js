function exe6 (){
    let totalVista = 0
    let totalPrazo = 0
    let contador = 1

    while (contador <= 15) {
        let codigo = prompt(`Transação ${contador}:\nDigite o código (V para à vista, P para a prazo):`)
    
        if (!codigo) continue

        codigo = codigo.trim().toUpperCase()

        if (codigo !== "V" && codigo !== "P") {
            alert("Código inválido. Digite apenas V ou P.")
            continue
        }

        let valorStr = prompt(`Digite o valor da transação ${contador}:`)
        let valor = parseFloat(valorStr)

        if (isNaN(valor) || valor <= 0) {
            alert("Valor inválido. Digite um número maior que zero.")
            continue;
        }

        if (codigo === "V") {
            totalVista += valor
        }  
        else {
            totalPrazo += valor
        }

        contador++
    }

    let totalGeral = totalVista + totalPrazo
    let primeiraParcela = totalPrazo / 3

    alert(
        `Resumo das Transações:\n` +
        `- Total à vista: R$ ${totalVista.toFixed(2)}\n` +
        `- Total a prazo: R$ ${totalPrazo.toFixed(2)}\n` +
        `- Total geral: R$ ${totalGeral.toFixed(2)}\n` +
        `- Primeira parcela das compras a prazo: R$ ${primeiraParcela.toFixed(2)}`
    )

}