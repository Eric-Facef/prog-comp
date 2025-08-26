let matriz = [], soma = 0, qtdp = 0, diagonalSecundaria = []

for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        /*matriz[i][j] = Number(prompt(`Digite o valor da posição [${i}][${j}]`))*/
        matriz[i][j] = parseInt(Math.random() * 10)
    }
}

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        soma += matriz[i][j]

        if (matriz[i][j] % 2 === 0) {
            qtdp++
        }
       
        if (i + j === 2) {
            diagonalSecundaria.push(matriz[i][j])
        }
    }
}
console.table(matriz)
console.log("Soma de todos os elementos:", soma)
console.log("Quantidade de números pares:", qtdp)
console.log("Valores da diagonal secundária:", diagonalSecundaria)
