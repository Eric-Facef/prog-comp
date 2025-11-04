// exercicio 1000
/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

console.log(`Hello World!`)*/

// exercicio 1001
/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines[0])
let B = parseInt(lines[1])
let X = A + B
console.log(`X = ${X}`)*/

// exercicio 1002

/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let r = parseFloat(lines[0])
let n = 3.14159
let area = n * (r * r)

console.log(`A=${area.toFixed(4)}`)*/

// exercicio 1003

/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines[0])
let B = parseInt(lines[1])
let soma = A + B

console.log(`SOMA = ${soma}`)*/

// exercicio 1004

/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines[0])
let B = parseInt(lines[1])
let prod = A * B

console.log(`PROD = ${prod}`)*/

// exercicio 1005

/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines[0])
let B = parseFloat(lines[1])
let media = (A * 3.5 + B * 7.5) / 11

console.log(`MEDIA = ${media.toFixed(5)}`)*/

// exercicio 1006

/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines[0])
let B = parseFloat(lines[1])
let C = parseFloat(lines[2])
let media = (A * 2 + B * 3 + C * 5) / 10

console.log(`MEDIA = ${media.toFixed(1)}`)*/

// exercicio 1007

/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines[0])
let B = parseInt(lines[1])
let C = parseInt(lines[2])
let D = parseInt(lines[3])
let dif = (A * B - C * D)

console.log(`DIFERENCA = ${dif}`)*/

// exercicio 1008

/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines[0])
let B = parseInt(lines[1])
let C = parseFloat(lines[2])
let salario = B * C

console.log(`NUMBER = ${A}\nSALARY = U$ ${salario.toFixed(2)}`)*/

// exercicio 1009

/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let sfixo = parseFloat(lines[1])
let vendas = parseFloat(lines[2])
let comissao = (vendas * 15 / 100)
let final = sfixo + comissao

console.log(`TOTAL = R$ ${final.toFixed(2)}`)*/

// exercicio 1010

/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let p1 = lines[0].split(" ")
let p2 = lines[1].split(" ")

let qtd1 = Number(p1[1])
let val1 = Number(p1[2])

let qtd2 = Number(p2[1])
let val2 = Number(p2[2])

let total = (qtd1 * val1) + (qtd2 * val2)

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)*/

// exercicio 1168

/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let n = parseInt(lines[0])

const leds = {
  '0': 6,
  '1': 2,
  '2': 5,
  '3': 5,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 3,
  '8': 7,
  '9': 6
}

for (let i = 1; i <= n; i++) {
  let numero = lines[i].trim()
  let total = 0

  for (let d of numero) {
    total += leds[d]
  }

  console.log(`${total} leds`)
}*/