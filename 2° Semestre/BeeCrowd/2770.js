var input = require('fs').readFileSync('/dev/stdin', 'utf8');
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
}
