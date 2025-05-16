function exe0(){
    let nota // guarda as notas
    let conta = 1 // conta de 1 a 6
    let soma = 0
    while (conta <= 6){
        nota = Number(prompt(`Informe a nota ${conta}`))
        soma = soma + nota
        conta++ // conta = conta + 1
    }
    let media = soma / 6
    // mostra o resultado
     alert(`A média das notas é ${media.toFixed(1)}`)
}

function pesquisaSatisfacao(){
    let nota; // guarda as notas
    let conta = 1; // conta de 1 a 10
    let soma = 0;
    let contaSatisfeitos = 0;
    let contaInsatisfeitos = 0;
    
    while (conta <= 10) {
        nota = Number(prompt(`Informe a nota do participante ${conta}`));
        
        if (nota < 0 || nota > 10 || isNaN(nota)) {
            alert(`Nota inválida. Por favor, informe um valor entre 0 e 10.`);
            continue; // volta para o início do loop sem contar essa tentativa
        }

        soma = soma + nota;

        if (nota >= 8) {
            contaSatisfeitos++;
        } else if (nota < 5) {
            contaInsatisfeitos++;
        }

        conta++; // conta = conta + 1 (só depois de tudo ok)
    }

    let media = soma / 10;
    
    // mostra o resultado
    alert( `A média das notas é ${media.toFixed(1)}\n` + `O número de Satisfeitos é ${contaSatisfeitos}\n` + `O número de Insatisfeitos é ${contaInsatisfeitos}`);
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