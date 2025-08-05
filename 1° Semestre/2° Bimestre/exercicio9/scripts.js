function exe9() {
    let somaI = 0, contPA = 0, contA = 0, contI1030 = 0

    for (let i = 1; i <= 10; i++) {
        let idade = Number(prompt(`Pessoa ${i} - Digite a idade (entre 0 e 120):`))

        if (!Number.isInteger(idade) || idade < 0 || idade > 120) {
            alert("Idade inválida! Digite um número entre 0 e 120.")
            i--
            continue
        }

        let peso = parseFloat(prompt(`Pessoa ${i} - Digite o peso (kg, entre 3 e 300):`))
        if (isNaN(peso) || peso < 3 || peso > 300) {
            alert("Peso inválido! Digite um valor entre 3kg e 300kg.")
            i--
            continue
        }

        let altura = parseFloat(prompt(`Pessoa ${i} - Digite a altura (m, entre 0.5 e 2.5):`))
        if (isNaN(altura) || altura < 0.5 || altura > 2.5) {
            alert("Altura inválida! Digite um valor entre 0.5m e 2.5m.")
            i--
            continue
        }

        somaI += idade

        if (peso > 90 && altura < 1.50) {
            contPA++
        }

        if (altura > 1.90) {
            contA++
            if (idade >= 10 && idade <= 30) {
                contI1030++
            }
        }
    }

    let mediaI = somaI / 10
    let porcentagem10a30Altos

    if (contA > 0) {
        porcentagem10a30Altos = (contI1030 / contA) * 100
    } else {
        porcentagem10a30Altos = 0
    }

    console.log(`\nResultados:`)
    console.log(`Média das idades: ${mediaI.toFixed(2)} anos`)
    console.log(`Quantidade de pessoas com peso > 90kg e altura < 1.50m: ${contPA}`)
    console.log(`Porcentagem de pessoas com idade entre 10 e 30 anos entre as que medem mais de 1.90m: ${porcentagem10a30Altos.toFixed(2)}%`)
}
