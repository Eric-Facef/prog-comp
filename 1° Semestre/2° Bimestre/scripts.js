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

function exe2() {
    let preco = 5.0
    let qtd = 120
    const despesa = 200
    let lucro, maiorLucro = 0
    let precoMaiorLucro = 0
    let aux = ""

    while (preco >= 1.0) {
        lucro = (preco * qtd) - despesa

        if (lucro > maiorLucro) {
            maiorLucro = lucro
            precoMaiorLucro = preco
        }

        aux += `\nPreço: ${preco.toFixed(2)} -- Quantidade: ${qtd} -- Despesa: ${despesa} -- Lucro: ${lucro.toFixed(2)}`
        
        qtd += 26
        preco -= 0.5
    }

    alert(aux)
    alert(`Maior lucro: R$ ${maiorLucro.toFixed(2)}\nCom preço: R$ ${precoMaiorLucro.toFixed(2)}`)
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

function exe4(){
  let num = parseInt(prompt("Digite um número para ver a tabuada:"))

  if (isNaN(num)) {
    alert("Por favor, digite um número válido.")
    return 
  }

  let resultado = `Tabuada do ${num}:\n`

  for (let i = 0; i <= 10; i++) {
    resultado += `${num} x ${i} = ${num * i}\n`
  }

  alert(resultado)
}

function exe5() {
  for (let i = 1; i <= 10; i++) {
    let tabuada = `Tabuada do ${i}:\n`
    
    for (let j = 1; j <= 10; j++) {
      tabuada += `${i} x ${j} = ${i * j}\n`
    }

    alert(tabuada)
    console.log(tabuada)
  }
}

function exe6() {
    let totalVista = 0
    let totalPrazo = 0

    for (let contador = 1; contador <= 15; ) {
        let codigo = prompt(`Transação ${contador}:\nDigite o código (V para à vista, P para a prazo):`)

        if (!codigo) continue

        codigo = codigo.trim().toUpperCase()

        if (codigo !== "V" && codigo !== "P") {
            console.log(`Transação ${contador}: Código inválido.`)
            continue
        }

        let valorStr = prompt(`Digite o valor da transação ${contador}:`)
        let valor = parseFloat(valorStr)

        if (isNaN(valor) || valor <= 0) {
            console.log(`Transação ${contador}: Valor inválido.`)
            continue
        }

        if (codigo === "V") {
            totalVista += valor
        } else {
            totalPrazo += valor
        }

        console.log(`Transação ${contador}: ${codigo === "V" ? "À vista" : "A prazo"} - R$ ${valor.toFixed(2)}`)

        contador++
    }

    let totalGeral = totalVista + totalPrazo
    let primeiraParcela = totalPrazo / 3

    console.log("\nResumo das Transações:");
    console.log(`- Total à vista: R$ ${totalVista.toFixed(2)}`)
    console.log(`- Total a prazo: R$ ${totalPrazo.toFixed(2)}`)
    console.log(`- Total geral: R$ ${totalGeral.toFixed(2)}`)
    console.log(`- Primeira parcela das compras a prazo: R$ ${primeiraParcela.toFixed(2)}`)
}

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