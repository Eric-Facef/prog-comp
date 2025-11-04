var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let sfixo = parseFloat(lines[1])
let vendas = parseFloat(lines[2])
let comissao = (vendas * 15 / 100)
let final = sfixo + comissao

console.log(`TOTAL = R$ ${final.toFixed(2)}`)

