function revisao(){
    let notas = [6, 3, 8]
    for (let i = 0; i < notas.length; i++)
        if(notas[i] >= 6){
            console.log("Aprovado")
        }
        else {
            console.log("Reprovado")
        }
}

function somavetores(){
    let valores = [3, 5, 2]
    let soma = 0
    for(let i = 0; i < valores.length; i++){
        soma += valores[i]
    }
    console.log(soma)
}

function maior(){
    let num = [5, 12, 7]
    let maior = num[0]
    for (let i = 1; num.length; i++) {
        if (num[i] > maior){
            maior = num[i]
        }
        console.log(maior)
    }
}

function tresvet(){
    let A = [1, 2, 3]
    let B = [4, 5, 6]
    let C = []

    for (let i = 0; i < A.length; i++) {
        C.push(A[i] + B[i])
    }
    console.log(C)
}

