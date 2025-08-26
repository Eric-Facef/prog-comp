function exeanalise(){
    let matriz = []
    let diagonalPrincipal = []
    let diagonalSecundaria = []
    let somaPrincipal = 0, somaSecundaria = 0
    let maior, posMaior
    let contCritico = 0
    let mediasRegiao = []

    for (let i = 0; i < 5; i++) {
        matriz[i] = []
        let somaLinha = 0
        for (let j = 0; j < 5; j++) {
            let valor
            do {
                valor = Number(prompt(`Digite o índice de poluição da região ${i+1}, dia ${j+1} (0 a 500):`))
            } while (isNaN(valor) || valor < 0 || valor > 500)

            matriz[i][j] = valor
            somaLinha += valor

            if (i === 0 && j === 0) {
                maior = valor
                posMaior = { regiao: 1, dia: 1 }
            } else if (valor > maior) {
                maior = valor
                posMaior = { regiao: i+1, dia: j+1 }
            }

            if (i === j) {
                diagonalPrincipal.push(valor)
                somaPrincipal += valor
            }

            if (i + j === 4) {
                diagonalSecundaria.push(valor)
                somaSecundaria += valor
            }

            if (valor > 300) {
                contCritico++
            }
        }
        mediasRegiao.push(somaLinha / 5)
    }

    let menorMedia = mediasRegiao[0]
    let regiaoMenor = 1
    for (let i = 1; i < mediasRegiao.length; i++) {
        if (mediasRegiao[i] < menorMedia) {
            menorMedia = mediasRegiao[i]
            regiaoMenor = i + 1
        }
    }

    console.table(matriz)
    console.log("Diagonal Principal:", diagonalPrincipal, "Média:", somaPrincipal / 5)
    console.log("Diagonal Secundária:", diagonalSecundaria, "Média:", somaSecundaria / 5)
    console.log(`Maior índice: ${maior}, Região: ${posMaior.regiao}, Dia: ${posMaior.dia}`)
    console.log("Quantidade de vezes acima de 300 (nível crítico):", contCritico)
    console.log(`Região com menor média de poluição: Região ${regiaoMenor} (Média: ${menorMedia.toFixed(2)})`)
}