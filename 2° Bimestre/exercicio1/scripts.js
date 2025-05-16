function exe1(){
    let a, b, c, d, aux, grupo  = 1, i

    while (grupo <= 5){
        a = Number(prompt(`Informe o valor de A`))
        b = Number(prompt(`Informe o valor de B`))
        c = Number(prompt(`Informe o valor de C`))
        d = Number(prompt(`Informe o valor de D`))
        i = 1
        while (i <= 3){
            if (a > b){
                aux = a
                a = b
                b = aux
            }
            if (b > c) {
                aux = b
                b = c
                c = aux
            }
            if (c > d){
                aux = c
                c = d
                d = aux
            }
            i++
        }
        alert(`Os numeros em ordem crescente são: ${a}, ${b}, ${c}, ${d}\nOs numeros em ordem decrescente são: ${d}, ${c}, ${b}, ${a}`)
        grupo++
    }
}