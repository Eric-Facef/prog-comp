function exe2(){
    let preco = 5.0
    let qtd = 120
    const despesa = 200
    let lucro, maiorLucro = 0
    let aux = ""

    while (preco >= 1.0){
        lucro = (preco * qtd) - despesa
        if (lucro > maiorLucro) {
            maiorLucro = lucro
        }
        aux = aux + '\n' + (`Preço${preco} -- Quantidade${qtd} -- Despesa${despesa} -- Lucro${lucro}`)
        qtd = qtd + 26
        preco = preco + 0.5
    }
    alert(aux)
    alert(maiorLucro)
}