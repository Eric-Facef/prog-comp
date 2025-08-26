function decpbin(){
    let valor = document.getElementById("decimal").value
    let dec = parseInt(valor)
    if (!isNaN(dec)){
        document.getElementById("binario").value = dec.toString(2)
    }
    else{
        console.log("Digite um número decimal valido")
    }
    console.log(valor)
}

function binpdec(){
    let valor = document.getElementById("binario").value
    let dec = parseInt(valor, 2)

    if (!isNaN(dec)){
        document.getElementById("decimal").value = dec
    }
    else{
        console.log("Digite um número binario valido (0 e 1)")
    }
    console.log(valor)
}