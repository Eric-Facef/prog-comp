function exe7(){
    let idd, peso, altura, qtdPessoasIdd = 0, qtdPessoasPeso = 0, somaAltura = 0, qtdPessoasIdd1020 = 0
    for (let i = 1; i <= 5; i++){
        idd = Number(prompt(`Informe a idade da pessoa ${i}`))
        peso = Number(prompt(`Informe o peso da pessoa ${i}`))
        altura = Number(prompt(`Informe a altura da pessoa ${i}`))

        if (idd > 50){
            qtdPessoasIdd++
        }
        if (peso < 40){
            qtdPessoasPeso++
        }
        if (idd >= 10 && idd <= 20){
            somaAltura = somaAltura + altura
            qtdPessoasIdd1020++
        }
    }
    alert(`Item 1 ${qtdPessoasIdd}\n Item 2 ${somaAltura/qtdPessoasIdd1020}\n Item 3 ${qtdPessoasPeso/5*100}`)
}
function exe8(){
    let idd, peso, altura, olhos, cabelo, item1 = 0, item2 = 0, item2qtd = 0, item3= 0, item4 = 0
    for (let cont = 1; cont <= 6; cont++){
        do {
            idd = Number(prompt(`Informe idade > 0`))
        } while ( idd < 0)
        do {
            peso = Number(prompt(`Informe peso > 0`))
        } while ( peso < 0)
        do {
            altura = Number(prompt(`Informe altura > 0`))
        } while ( altura < 0)
        do {
            olhos = prompt(`Informe a cor dos olhos`).toUpperCase()
        } while ( olhos != 'P' && olhos != 'V' && olhos != 'A' && olhos != 'C')
        do {
            cabelo = prompt(`Informe a cor do cabelo`).toUpperCase()
        } while ( cabelo != 'P' && cabelo != 'L' && cabelo != 'R' && cabelo != 'C')

        if (idd > 50 && peso < 60) {
            item1
        }
        if (altura < 1.50) {
            item2 = item2 + idd
            item2qtd
        }
        if (olhos == 'A') {
            item3++
        }
        if (cabelo == 'R' && olhos != 'A'){
            item4++
        }
    }
    alert(`Item 1 ${item1}\n Item 2 ${item2 / item2qtd}\n Item 3 ${item3/6*100}\n Item 4 ${item4}`)
}
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
function exe10(){
    let somaPares = 0
    let somaPrimos = 0 
    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt(`Digite o ${i}º número:`))
        if (numero % 2 === 0) {
            somaPares += numero
        }
    let divisores = 0
    for (let j = 1; j <= numero; j++) {
        if (numero % j === 0) {
            divisores++
        }
    }
    if (divisores === 2) {
        somaPrimos += numero
    }
    }
    console.log("Soma dos números pares:", somaPares)
    console.log("Soma dos números primos:", somaPrimos)
}
