var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines[0])
let B = parseInt(lines[1])
let C = parseFloat(lines[2])
let salario = B * C

console.log(`NUMBER = ${A}\nSALARY = U$ ${salario.toFixed(2)}`)