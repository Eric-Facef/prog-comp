//1168

/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

/*let n = parseInt(lines[0])

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

//2779

/* var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let N = parseInt(lines[0])
let M = parseInt(lines[1])

let compradas = new Set()

for (let i = 2; i < 2 + M; i++) {
    compradas.add(parseInt(lines[i])) // Set ignora repetidos
}


let faltando = N - compradas.size

console.log(faltando) */

//2770

/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(/\s+/);

let i = 0
while(i < lines.length){
    let X = parseInt(lines[i++]) //largura
    let Y = parseInt(lines[i++]) //altura
    let P = parseInt(lines[i++]) //qtd peças

    for(j = 0; j < P; j++){
        let Xi = parseInt(lines[i++]) //largura peça cliente
        let Yi = parseInt(lines[i++]) //altura peça cliente

        if ((Xi <= X && Yi <= Y) || (Xi <= Y && Yi <= X)) {
            console.log('Sim')
        }
        else {
            console.log('Nao')
        }
    }
} */

//1179

/*
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let par = [];
let impar = [];

for (let i = 0; i < lines.length; i++) {
  if (parseInt(lines[i]) % 2 === 0) {
    par.push(parseInt(lines[i]));
    if (par.length === 5) { // encheu
      for (let i = 0; i < 5; i++) {
        console.log(`par[${i}] = ${par[i]}`);
      }
      par = []; // esvazia
    }
  } else {
    impar.push(parseInt(lines[i]));
    if (impar.length === 5) { // encheu
      for (let i = 0; i < 5; i++) {
        console.log(`impar[${i}] = ${impar[i]}`);
      }
      impar = []; // esvazia
    }
  }
}

// Depois da leitura, imprime o que restou
for (let i = 0; i < impar.length; i++) {
  console.log(`impar[${i}] = ${impar[i]}`);
}

for (let i = 0; i < par.length; i++) {
  console.log(`par[${i}] = ${par[i]}`);
}*/