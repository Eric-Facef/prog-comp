function exe2() {
    let preco = 5.0
    let qtd = 120
    const despesa = 200
    let lucro, maiorLucro = 0
    let precoMaiorLucro = 0
    let aux = ""

    while (preco >= 1.0) {
        lucro = (preco * qtd) - despesa

        if (lucro > maiorLucro) {
            maiorLucro = lucro
            precoMaiorLucro = preco
        }

        aux += `\nPreço: ${preco.toFixed(2)} -- Quantidade: ${qtd} -- Despesa: ${despesa} -- Lucro: ${lucro.toFixed(2)}`
        
        qtd += 26
        preco -= 0.5
    }

    alert(aux)
    alert(`Maior lucro: R$ ${maiorLucro.toFixed(2)}\nCom preço: R$ ${precoMaiorLucro.toFixed(2)}`)
}
