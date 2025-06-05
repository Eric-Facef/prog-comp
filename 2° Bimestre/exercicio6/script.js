function exe6(){
    let cod, valor, valorV = 0, valorP = 0, total, primeiraParcela

    for (let i = 0; i < 5; i++){
        cod = prompt(`Informe V (a vista) ou P (a prazo)`).toUpperCase()
        valor = Number(prompt(`Informe o ${i} valor`))

        if (cod == 'V'){
            valorV = valorV + valor
        }
        else if (cod == 'P'){
            valorP = valorP + valor
        }
        else {
            alert(`Código inálido!`)
            i--
        }
    }
    total = valorV + valorP
    primeiraParcela = valorP / 3
    alert(`--Total a vista ${valorV}--\n -- Total a prazo ${valorP}--\n -- Total ${total}--\n -- 1° parcela ${primeiraParcela}--`)
}