function cadastroInicial(funcionarios) {
    funcionarios.push({ nome: "Ana", salario: 2000, cargo: "back-end" });
    funcionarios.push({ nome: "Carlos", salario: 2200, cargo: "cybersecuryt" });
    funcionarios.push({ nome: "Beatriz", salario: 1900, cargo: "front-end" });
}

function listarNomes(funcionarios) {
    for (let i = 0; i < funcionarios.length; i++) {
        console.log(funcionarios[i].nome);
    }
}

function cadastroNovo(funcionarios) {
    funcionarios.push({
        nome: prompt("Informe o nome do novo funcionario: "),
        idade: Number(prompt("Informe a idade do novo funcionario: ")),
        curso: prompt("Informe o curso do novo funcionario: ")
    });
}

function aumentarSalario(funcionarios) {
    for(let funcionario of funcionarios){
        funcionario.salario = salario * 0.1
    }
}

function buscarSalario(nomeBusca) {
    let funcionario = funcionarios.find(f => f.nome.toLowerCase() === nomeBusca.toLowerCase());
    if (funcionario) {
        alert(`O salário de ${funcionario.nome} é R$ ${funcionario.salario.toFixed(2)}`);
    } 
    alert("Funcionário não encontrado.");
}

function atualizarCargo(nomeAtualiza, novoCargo) {
    let funcionario = funcionarios.find(f => f.nome.toLowerCase() === nomeAtualiza.toLowerCase());
    if (funcionario) {
        funcionario.cargo = novoCargo;
        alert("Cargo atualizado com sucesso!");
    } 
    alert("Funcionário não encontrado.");
}

function removerFuncionario(funcionarios, nome) {
    for(let i=0; i < funcionarios.length; i++){
        if (funcionarios[i].nome == nome) { 
            funcionarios.splice(i, 1) 
            alert(`Funcionario removido com sucesso!`)
            return 
        }
    }
    alert(`Aluno não encontrado`)
}

function mediaSalario(funcionarios) {
    for(let i=0; i < funcionarios.length; i++ ) {
        soma += numeros
    }
    media = soma / funcionarios.length
}

function promoverAbaixoDaMedia(novoCargo) {
    if (funcionarios.length === 0) {
        alert("Nenhum funcionário cadastrado.");
        return;
    }

    let soma = 0;
    for (let i = 0; i < funcionarios.length; i++) {
        soma += funcionarios[i].salario;
    }
    let media = soma / funcionarios.length;

    let promovidos = 0;
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].salario < media) {
        funcionarios[i].cargo = novoCargo;
        funcionarios[i].salario *= 1.15;
        promovidos++;
        }
    }

    if (promovidos > 0) {
        alert(`${promovidos} funcionário(s) foram promovidos para '${novoCargo}' com aumento de 15%!`);
    } else {
        alert("Nenhum funcionário tem salário abaixo da média.");
    }
}

function exibirMaiorSalario() {
    if (funcionarios.length === 0) {
        alert("Nenhum funcionário cadastrado.");
        return;
    }

    let maior = funcionarios[0];
    for (let i = 1; i < funcionarios.length; i++) {
        if (funcionarios[i].salario > maior.salario) {
        maior = funcionarios[i];
        }
    }

    alert(
        `Funcionário com maior salário:\n` +
        `Nome: ${maior.nome}\nCargo: ${maior.cargo}\nSalário: R$ ${maior.salario.toFixed(2)}`
    );
}


function main(){
    let vetor = []
    cadastroInicial(vetor)

    let opcao

    do {
        opcao = Number(prompt(`Digite:\n1 - Criar funcionario\n2 - Listar funcionarios\n3 - Aumentar salário\n4 - Buscar salário pelo nome\n5 - Atualizar cargo\n6 - Remover funcionario\n7 - Exibir média salarial\n8 - Encerrar programa!`))
        switch (opcao){
            case 1: 
                cadastroNovo(vetor);
                break;
            case 2: 
                listarNomes(vetor);
                break;
            case 3: 
                aumentarSalario(vetor);
                break;
            case 4:
                let encontrarSalario = prompt(`Insira o nome do funcionario que dejesa buscar o salário: `)
                buscarSalario(vetor, encontrarSalario);
                break;
            case 5: 
                atualizarCargo(vetor);
                break;
            case 6: 
                let nomeRemove = prompt(`Informe o nome do funcionario que deseja remover: `)
                removerFuncionario(vetor, nomeRemove);
                break;
            case 7:
                mediaSalario(vetor);
                break;
            case 8: 
                alert(`Programa encerrado!`)
            case "9":
                let cargoPromocao = prompt("Digite o cargo para promoção (ex: Analista Júnior):");
                promoverAbaixoDaMedia(cargoPromocao);
                break;
            case "10":
                exibirMaiorSalario();
                break;
            default:
                alert(`Opção invalida!`);
                break;
        }
    } while (opcao !== 1)
    
    console.log(vetor)
}