function exe1(){
    let a, b, c, d, aux, grupo = 1, i

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

function exe2(){
    let preco = 5.0
    let qtd = 120
    const despesa = 200
    let lucro, maiorLucro = 0
    let aux = ""

    while (preco >= 1.0){
        lucro = (preco * qtd) - despesa
        if (lucro > maiorLucro) {
            maiorLucro = lucro
        }
        aux = aux + '\n' + (`Preço${preco} -- Quantidade${qtd} -- Despesa${despesa} -- Lucro${lucro}`)
        qtd = qtd + 26
        preco = preco + 0.5
    }
    alert(aux)
    alert(maiorLucro)
}

function exercicio3() {
    let idade, conta = 1;
    let f1 = 0, f2 = 0, f3 = 0, f4 = 0, f5 = 0;

    while (conta <= 8) {
        idade = Number(prompt(`Informe a idade ${conta}:`));

        if (isNaN(idade) || idade <= 0 || idade > 120) {
            alert("Idade inválida! Digite um número entre 1 e 120.");
            continue;
        }

        if (idade >= 1 && idade <= 15) {
            f1++;
        } else if (idade >= 16 && idade <= 30) {
            f2++;
        } else if (idade >= 31 && idade <= 45) {
            f3++;
        } else if (idade >= 46 && idade <= 60) {
            f4++;
        } else if (idade > 60) {
            f5++;
        }

        conta++;
    }

    alert(
        `Faixas etárias:\n` +
        `1 a 15 anos: ${f1}\n` +
        `16 a 30 anos: ${f2}\n` +
        `31 a 45 anos: ${f3}\n` +
        `46 a 60 anos: ${f4}\n` +
        `Acima de 60 anos: ${f5}`
    );
}