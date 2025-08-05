function exe10(){
    let somaPares = 0
    let somaPrimos = 0 
    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt(`Digite o ${i}º número:`))
        if (numero % 2 === 0) {
            somaPares += numero
        }
    let divisores = 0
    for (let j = 1; j <= numero; j++) {
        if (numero % j === 0) {
            divisores++
        }
    }
    if (divisores === 2) {
        somaPrimos += numero
    }
    }
    console.log("Soma dos números pares:", somaPares)
    console.log("Soma dos números primos:", somaPrimos)
}
