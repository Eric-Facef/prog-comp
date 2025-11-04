var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseFloat(lines[0])
let B = parseFloat(lines[1])
let C = parseFloat(lines[2])
let media = (A * 2 + B * 3 + C * 5) / 10

console.log(`MEDIA = ${media.toFixed(1)}`)