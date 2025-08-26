let biblioteca = [];
let maior = biblioteca[0]
let soma = 0

for (let i = 0; i < 5; i++) {
    let titulo = prompt(`Informe o livro ${i + 1}:`);
    let autor = prompt(`Informe o autor ${i + 1}:`);
    let ano = Number(prompt(`Informe o ano ${i + 1}:`));
    let paginas = Number(prompt(`Informe o número de páginas ${i + 1}:`));

    let livro = {
        titulo: titulo, 
        autor: autor,
        ano: ano,
        paginas: paginas
    };

    biblioteca.push(areas);
}


for (let i = 0; i < biblioteca.length; i++) {
    if (biblioteca[i].paginas > 300) {
        console.log(biblioteca[i]);
    }
    if (biblioteca[i].paginas > maior.paginas) {
        maior = biblioteca[i];
    }
    soma = soma + biblioteca[i].paginas
}

console.log(`O título do livro com mais páginas é ${maior.titulo}`)
console.log(`A média de paginas dos livros é ${soma / 5}`)