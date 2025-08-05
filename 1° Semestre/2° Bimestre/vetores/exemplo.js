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




