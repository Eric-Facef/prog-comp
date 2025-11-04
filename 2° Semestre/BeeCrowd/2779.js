var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let N = parseInt(lines[0])
let M = parseInt(lines[1])

let compradas = new Set()

for (let i = 2; i < 2 + M; i++) {
    compradas.add(parseInt(lines[i])) // Set ignora repetidos
}


let faltando = N - compradas.size

console.log(faltando)
