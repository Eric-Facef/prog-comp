function exe5() {
    let numeros = []
    
    for (let i = 0; i < 10; i++) {
        let num = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`))
        numeros.push(num)
    }

    let primeiro = numeros[0]
    let maiores = 0
    let menores = 0
    let iguais = 0

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > primeiro) {
            maiores++
        } else if (numeros[i] < primeiro) {
            menores++
        } else {
            iguais++
        }
    }

    console.log(`Primeiro número: ${primeiro}`)
    console.log(`Maiores que o primeiro: ${maiores}`)
    console.log(`Menores que o primeiro: ${menores}`)
    console.log(`Iguais ao primeiro: ${iguais + 1}`) 
}
