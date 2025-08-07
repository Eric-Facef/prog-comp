function exe1(){
    let num = [], i, entrada, numDigitado, par = 0, imp = 0, somaP = 0, mediaP
    for(i = 0; i < 6; i++){
        entrada = prompt(`Digite um número ${i + 1}`)
        numDigitado = parseInt (entrada)

        if (numDigitado){
            num.push(numDigitado)
        } else {
            console.log(`Valor invalido ${i + 1}`)
            i--
        }
    }

    for(i = 0; i < num.length; i++){
        if (num[i] % 2 === 0) {
            par++
            somaP += num[i]
        } else {
            imp++
        }
    }

    mediaP = somaP / par 

    console.log(`Numeros Digitados ${num}`)
    console.log(`Numeros pares ${par}\nNumeros impares ${imp}`)
    console.log(`A média dos números pares é ${mediaP}`)
}

