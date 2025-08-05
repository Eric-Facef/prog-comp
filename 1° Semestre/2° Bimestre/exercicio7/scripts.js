function exe7(){
    let contImaior50 = 0
    let somaA10a20 = 0
    let contI10a20 = 0
    let contPmenor40 = 0
    let i = 1

    for (i = 1; i <5; i++){
        let idd = Number(prompt(`Pessoa ${i} - Digite a idade (entre 0 e 120 anos):`))
        if (!Number.isInteger(idd) || idd < 0 || idd > 120) {
            alert("Idade inválida! Digite um número inteiro entre 0 e 120.")
            i--
            continue
        }

        let h = parseFloat(prompt(`Pessoa ${i} - Digite a altura (m):`))
        if (isNaN(h) || h < 0.5 || h > 2.5) {
            alert("Altura inválida! Digite um valor entre 0.5 e 2.5 metros.")
            i--
            continue
        }

        let peso = parseFloat(prompt(`Pessoa ${i} - Digite o peso (Kg)`))
        if (isNaN(peso) || peso < 3 || peso > 300) {
            alert("Peso inválido! Digite um valor entre 3 kg e 300 kg.")
            i--
            continue
        }

        if (idd > 50){
            contImaior50++
        }
        if (idd >= 10 && idd <= 20) {
            somaA10a20 += h
            contI10a20++
        }
        if (peso < 40) {
            contPmenor40++
        }
    }

    let mediah10a20 
    let percentPM40 = (contPmenor40 / 5) * 100

    if ( contI10a20 > 0) {
        mediah10a20 = somaA10a20 / contI10a20
    }
    else {
        mediah10a20 = 0
    }

    let result = `Resultados:\n` + `Quantidade de pessoas com idade > 50 anos: ${contImaior50}\n` + `Média das alturas (10 a 20 anos): ${mediah10a20.toFixed(2)} m\n` + `Porcentagem de pessoas com peso < 40 kg: ${percentPM40.toFixed(2)}%`

    alert(result)
}