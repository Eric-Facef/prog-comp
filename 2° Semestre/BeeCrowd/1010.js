var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let p1 = lines[0].split(" ")
let p2 = lines[1].split(" ")

let qtd1 = Number(p1[1])
let val1 = Number(p1[2])

let qtd2 = Number(p2[1])
let val2 = Number(p2[2])

let total = (qtd1 * val1) + (qtd2 * val2)

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)
