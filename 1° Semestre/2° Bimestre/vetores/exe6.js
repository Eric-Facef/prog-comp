function exe6() {
    let vetor = []

    for (let i = 0; i < 12; i++) {
        let num = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`))
        vetor.push(num)
    }

    let busca = parseInt(prompt("Digite o número a ser buscado no vetor:"))
    let posicoes = []

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === busca) {
            posicoes.push(i)
        }
    }

    if (posicoes.length > 0) {
        console.log(`O número ${busca} aparece ${posicoes.length} vez(es), nas posições: ${posicoes.join(', ')}`)
    } else {
        console.log(`O número ${busca} não foi encontrado no vetor.`)
    }
}
