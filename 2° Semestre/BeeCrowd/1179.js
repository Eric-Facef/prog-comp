var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

let par = [];
let impar = [];

for (let i = 0; i < lines.length; i++) {
  if (parseInt(lines[i]) % 2 === 0) {
    par.push(parseInt(lines[i]))
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
}