function exe10(){
    let i, j, entrada, num, somaPares = 0, somaPrimos = 0, primo

    for(i = 0; i < 10; i++){
        entrada = prompt(`Digite um ${i+1} número `)
        num = parseInt(entrada)
        if (isNaN(num)) {
            alert(`Por favor, digite um número valido`)
            i--
            continue
        }
        if (num % 2 === 0){
            somaPares += num
        }

        primo = true

        if (num < 2) {
            primo = false
        }
        else {
            for(j =2; j <= num / 2; j++) {
                if(num % j === 0) {
                    primo = false
                    j = num
                }
            }
        }
        if(primo){
            somaPrimos += num
        }
    }
    alert(`Soma dos números pares: ${somaPares}`)
    alert(`Soma dos números primos: ${somaPrimos}`)
}