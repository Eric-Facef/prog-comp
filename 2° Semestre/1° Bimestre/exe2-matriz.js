let matriz = []
let soma = 0
let maior = 0
let posMaior = {}
let totalDia = []
let vendedores = []

for (let i = 0; i < 4; i++) {
    matriz[i] = []
    vendedores[i] = prompt(`Digite o nome do vendedor ${i + 1}:`)
    for (let j = 0; j < 7; j++) {
        matriz[i][j] = parseInt(Math.random() * 100)
        soma += matriz[i][j]
       /* if (matriz[i][j] > maior) {
            maior = matriz[i][j]
            posMaior = { vendedor: vendedores[i], dia: j + 1 }
        }
        if (totalDia[j] === undefined) totalDia[j] = 0
        totalDia[j] += matriz[i][j]*/
    }
}

for (let i = 0; i < 4; i++) {
    let totalVendedor = 0
    for (let j = 0; j < 7; j++) {
        totalVendedor += matriz[i][j]
    }
    console.log(`Total vendido por ${vendedores[i]}: R$ ${totalVendedor.toFixed(2)}`)
}

for (let j = 0; j < 7; j++) {
    console.log(`Total vendido no dia ${j + 1}: R$ ${totalDia[j].toFixed(2)}`)
}

console.log(`\nMaior venda: R$ ${maior.toFixed(2)} (${posMaior.vendedor}, Dia ${posMaior.dia})`)

let media = soma / (4 * 7)

console.log(`Média geral das vendas: R$ ${media.toFixed(2)}\n`)
console.log("Matriz de vendas (Vendedores x Dias):")
console.table(matriz)
