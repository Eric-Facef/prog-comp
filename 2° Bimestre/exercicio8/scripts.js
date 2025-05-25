function exe8() {
    let qtdIdadeM50PM60 = 0
    let somaIHM150 = 0
    let contHM150 = 0
    let contOlhosA = 0
    let contRuivosNA = 0

    for (let i = 1; i <= 6; i++) {
        let idd = parseFloat(prompt(`Pessoa ${i} - Digite a idade (inteiro, até 120):`))
        if (!Number.isInteger(idd) || idd < 0 || idd > 120) {
            alert("Idade inválida! Digite um número inteiro entre 0 e 120.")
            i--;
            continue
        }

        let peso = parseFloat(prompt(`Pessoa ${i} - Digite o peso (kg, positivo):`))
        if (peso <= 0) {
            alert("Peso inválido! Digite um número positivo.")
            i--
            continue
        }

        let h = parseFloat(prompt(`Pessoa ${i} - Digite a altura (m, positiva):`))
        if (h <= 0) {
            alert("Altura inválida! Digite um número positivo.")
            i--
            continue
        }

        let corOlhos = prompt(`Pessoa ${i} - Cor dos olhos (A-azul, P-preto, V-verde, C-castanho):`).toUpperCase()
        if (corOlhos !== 'A' && corOlhos !== 'P' && corOlhos !== 'V' && corOlhos !== 'C') {
            alert("Cor dos olhos inválida! Digite A, P, V ou C.")
            i--
            continue
        }

        let corCabelo = prompt(`Pessoa ${i} - Cor dos cabelos (P-preto, C-castanho, L-loiro, R-ruivo):`).toUpperCase()
        if (corCabelo !== 'P' && corCabelo !== 'C' && corCabelo !== 'L' && corCabelo !== 'R') {
            alert("Cor dos cabelos inválida! Digite P, C, L ou R.")
            i--
            continue
        }

        if (idd > 50 && peso < 60) {
            qtdIdadeM50PM60++
        }

        if (h < 1.5) {
            somaIHM150 += idd
            contHM150++
        }

        if (corOlhos === 'A') {
            contOlhosA++
        }

        if (corCabelo === 'R' && corOlhos !== 'A') {
            contRuivosNA++
        }
    }

    let mediaIdadeHM150
    if (contHM150 > 0) {
        mediaIdadeHM150 = somaIHM150 / contHM150
    } else {
        mediaIdadeHM150 = 0
    }

    let percentualOlhosA = (contOlhosA / 6) * 100

    let result = `Resultados:\n` + `1. Pessoas com idade > 50 e peso < 60: ${qtdIdadeM50PM60}\n` + `2. Média das idades (altura < 1,50m): ${mediaIdadeHM150.toFixed(2)} anos\n`+ `3. Porcentagem de olhos azuis: ${percentualOlhosA.toFixed(2)}%\n` + `4. Pessoas ruivas sem olhos azuis: ${contRuivosNA}`

    alert(result)
    console.log(result)
}
