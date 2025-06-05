function exemplo(){
    // declara vetor
    let vet = []
    //solicita a entrada de dados
    for(let i=0; i<10;i++){
        vet.push(Number(prompt(`Informe o ${i+1} elemento`)))
    }
    //calcula a media
    let soma = 0
    for(let i=0; i<vet.length;i++){
        soma = soma + vet[i]
    }
    alert(`A média dos elementos é ${soma/vet.length}`)
}

// faça um programa que solicite 6 numeros e calcule e exiba: os numeros pares e a qtd de pares, os numeros impares e a qtd de impares

function exe1(){
    let numeros = [], num, par = [], impar = [], i 

    for(i=0; i<6; i++){
        num = parseInt(prompt(`Digite o ${i+1}° número`))
        numeros.push(num)
        if(num % 2 === 0){
            par.push(num)
        }
        else{
            impar.push(num)
        }
    }

    console.log(`Números pares: ${par}`)
    console.log(`Quantidade de pares: ${par.length}`)
    console.log(`Números ímpares: ${impar}`)
    console.log(`Quantidade de ímpares: ${impar.length}`)
}

// faça um programa que solicite 10 numeros e calcule e exiba o vetor alterado da seguinte forma: nas posições pares, somar 10 no elemento nas posições impares, multiplicar por 3 o elemento

function exe2(){
    let num,  vetalt = [], numero = []

    for(i=0; i<10; i++){
        num = parseInt(prompt(`Digite o ${i + 1}º número:`))
        numero.push(num)
        if(num % 2 === 0){
            vetalt.push(num+10)
        }
        else{
            vetalt.push(num*3)
        }
    }
   
    console.log(`Vetor original: ${numero}`)
    console.log(`Vetor alterado: ${vetalt}`)
}