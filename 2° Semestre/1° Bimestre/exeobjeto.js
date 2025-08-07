function cadlivros() {
    let biblioteca = []
    let somaPaginas = 0
    let maiorPaginas = 0
    let livroMaisPaginas

    for (let i = 0; i < 5; i++) {
        let titulo = prompt(`Informe o nome do livro ${i + 1}`)
        let autor = prompt(`Informe o nome do autor ${i + 1}`)

    let ano
    do {
        ano = Number(prompt(`Informe o ano de lançamento do livro ${i + 1}`))
        if (isNaN(ano)) {
            alert("Ano inválido! Digite um número válido.")
        }
    } while (isNaN(ano))

    let pg
    do {
        pg = Number(prompt(`Informe o número de páginas do livro ${i + 1}`))
        if (isNaN(pg)) {
            alert("Número de páginas inválido! Digite apenas números.")
        }
    } while (isNaN(pg))

    let livro = {
        titulo: titulo,
        autor: autor,
        ano: ano,
        pg: pg
    }

    biblioteca.push(livro)
    somaPaginas += pg

        if (pg > maiorPaginas) {
            maiorPaginas = pg
            livroMaisPaginas = titulo
        }
    }

    console.log("=== Livros com mais de 300 páginas ===")
    for (let i = 0; i < biblioteca.length; i++) {
        if (biblioteca[i].pg > 300) {
            console.log(`- ${biblioteca[i].titulo}`)
        }
    }

    let media = somaPaginas / biblioteca.length

    console.log(`\nLivro com maior número de páginas: ${livroMaisPaginas} (${maiorPaginas} páginas)`)
    console.log(`Média de páginas dos livros: ${media.toFixed(2)}`)
}
