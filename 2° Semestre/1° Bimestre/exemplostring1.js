/*let palavra = prompt(`Informe uma palavra`)
//tira os espaços antes e depois
let limpa = palavra.trim()
//cria um vetor da palavra limpa
let vetor = limpa.split("")
//inverter a palavra dp tipo vetor
let inverter = vetor.reverse()
//converter vetor em string
let inverterString = inverter.join("")

if (inverterString === limpa){ //compara duas strings
    alert(`São palindromas`)
}
else { 
    alert(`Não são palindromas`)
}*/

let palavra = prompt(`Informe uma palavra`)
let inverter = palavra.trim().split("").reverse().join("")

if (inverterString === limpa){ //compara duas strings
    alert(`São palindromas`)
}
else { 
    alert(`Não são palindromas`)
}