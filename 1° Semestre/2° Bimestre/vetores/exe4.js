function exe4() {
    let numeros = []
    let acimaDaMedia = []
    let soma = 0

    for (let i = 0; i < 8; i++) {
        let num = parseFloat(prompt(`Digite o ${i + 1}º número:`))
        numeros.push(num)
        soma += num
    }

    let media = soma / numeros.length

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > media) {
            acimaDaMedia.push(numeros[i])
        }
    }

    console.log(`Média: ${media.toFixed(2)}`)
    console.log(`Quantidade de valores acima da média: ${acimaDaMedia.length}`)
    console.log(`Valores acima da média: ${acimaDaMedia.join(', ')}`)
}
