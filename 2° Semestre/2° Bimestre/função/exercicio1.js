function mostrarDobro(x){
    console.log(`Dobro do número: ${x*2}`)
}

function calcularQuadrado(x){
    return x * x
}

function main(){
    let a = Number(prompt(`Informe um número`))

    mostrarDobro(a)

    console.log(`O quadrado de um número é ${calcularQuadrado(a)}`)
}

