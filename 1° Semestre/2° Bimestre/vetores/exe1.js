// faça um programa que solicite 6 numeros e calcule e exiba: os numeros pares e a qtd de pares, os numeros impares e a qtd de impares

function exe1(){
    let numeros = [], num, par = [], impar = [], i 

    for(i=0; i<6; i++){
        num = parseInt(prompt(`Digite o ${i+1}° número`))
        numeros.push(num)
        if(num % 2 == 0){
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

let vet = [], par = [], impar = [], i
for(i=0; i<6; i++){
    vet.push(Number(prompt(`Informe o ${i+1} elementos`)))
}
for(i=0; i<6; i++){
    if(vet[i] % 2 == 0){ 
        par.push(vet[1])
    }
    else{
        impar.push(vet[i])
    }
}

alert(`Qtd de pares ${par.length} -- ${par}`)
alert(`Qtd de impar ${impar.length} -- ${impar}`)