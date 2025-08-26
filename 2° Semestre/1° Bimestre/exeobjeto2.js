function exeobj2() {
    let rh = [], i , nome, cargo, salario, tempoS, funcionario, soma = 0, qtdGerente = 0

    for(i = 0; i < 6; i++) {
        nome = prompt(`Digite o nome do funcionario: `)
        cargo = prompt(`Digite o cargo do funcionario: `).toLowerCase()
        salario = Number(prompt(`Digite o salario do funncionario: `))
        tempoS = Number(prompt(`Digite o tempo de serviço do funcionario`))

        funcionario = {
            nome: nome,
            cargo: cargo,
            salario: salario,
            tempoS: tempoS
        }

        rh.push(funcionario)
    }

    maior = rh[0]

    for(i = 0; i < rh.length; i++) {
        if(rh[i].salario > 5000 && rh[i].tempoS > 5){
            console.log(`Os funcionarios com salario acima de 5000 e mais de 5 anos de serviço ${rh[i]}`)
        }
        if(rh[i].salario > maior.salario){
            maior = rh[i]
        }
        soma += rh[i].salario
        if(rh[i].cargo == "gerente"){
            qtdGerente++
        }
    }

    console.log(`Nome do funcionario com maior salario ${maior.nome}`)
    console.log(`A qtd de gerentes é de ${qtdGerente}`)
    console.log(`Media de salario da empresa é de ${soma / rh.length}`) 
}
