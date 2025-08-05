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

 let vet = []
    for(let i=0;i<10;i++){
        vet.push(Number(prompt(`Informe o ${i+1} elemento`)))
    }
    //altera o vetor original
    for(let i=0;i<10;i++){
        if (i % 2 == 0){ //posição é par
            vet[i] = vet [i] + 10
        }
        else {
            vet[i] = vet [i] * 3
        }
    }
    alert(`Novo vetor alterado ${vet}`)