var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let r = parseFloat(lines[0])
let n = 3.14159
let area = n * (r * r)

console.log(`A=${area.toFixed(4)}`)
