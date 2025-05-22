function exe6() {
    let totalVista = 0
    let totalPrazo = 0

    for (let contador = 1; contador <= 15; ) {
        let codigo = prompt(`Transação ${contador}:\nDigite o código (V para à vista, P para a prazo):`)

        if (!codigo) continue

        codigo = codigo.trim().toUpperCase()

        if (codigo !== "V" && codigo !== "P") {
            console.log(`Transação ${contador}: Código inválido.`)
            continue
        }

        let valorStr = prompt(`Digite o valor da transação ${contador}:`)
        let valor = parseFloat(valorStr)

        if (isNaN(valor) || valor <= 0) {
            console.log(`Transação ${contador}: Valor inválido.`)
            continue
        }

        if (codigo === "V") {
            totalVista += valor
        } else {
            totalPrazo += valor
        }

        console.log(`Transação ${contador}: ${codigo === "V" ? "À vista" : "A prazo"} - R$ ${valor.toFixed(2)}`)

        contador++
    }

    let totalGeral = totalVista + totalPrazo
    let primeiraParcela = totalPrazo / 3

    console.log("\nResumo das Transações:");
    console.log(`- Total à vista: R$ ${totalVista.toFixed(2)}`)
    console.log(`- Total a prazo: R$ ${totalPrazo.toFixed(2)}`)
    console.log(`- Total geral: R$ ${totalGeral.toFixed(2)}`)
    console.log(`- Primeira parcela das compras a prazo: R$ ${primeiraParcela.toFixed(2)}`)
}
