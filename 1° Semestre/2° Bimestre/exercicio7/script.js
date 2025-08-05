function exe7(){
    let idd, peso, altura, qtdPessoasIdd = 0, qtdPessoasPeso = 0, somaAltura = 0, qtdPessoasIdd1020 = 0
    for (let i = 1; i <= 5; i++){
        idd = Number(prompt(`Informe a idade da pessoa ${i}`))
        peso = Number(prompt(`Informe o peso da pessoa ${i}`))
        altura = Number(prompt(`Informe a altura da pessoa ${i}`))

        if (idd > 50){
            qtdPessoasIdd++
        }
        if (peso < 40){
            qtdPessoasPeso++
        }
        if (idd >= 10 && idd <= 20){
            somaAltura = somaAltura + altura
            qtdPessoasIdd1020++
        }
    }
    alert(`Item 1 ${qtdPessoasIdd}\n Item 2 ${somaAltura/qtdPessoasIdd1020}\n Item 3 ${qtdPessoasPeso/5*100}`)
}