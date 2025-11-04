function cadastroInicial(funcionarios) {
    funcionarios.push({ nome: "Ana", salario: 2000, cargo: "back-end" });
    funcionarios.push({ nome: "Carlos", salario: 2200, cargo: "cybersecurity" });
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
        cargo: prompt("Informe o cargo do novo funcionario: "),
        salario: Number(prompt("Informe o salário do novo funcionario: "))
    });
}

function aumentarSalario(funcionarios) {
    for (let funcionario of funcionarios) {
        funcionario.salario *= 1.1; // aumento de 10%
    }
    alert("Salário de todos os funcionários aumentado em 10%!");
}

function buscarSalario(funcionarios, nomeBusca) {
    let funcionario = funcionarios.find(f => f.nome.toLowerCase() === nomeBusca.toLowerCase());
    if (funcionario) {
        alert(`O salário de ${funcionario.nome} é R$ ${funcionario.salario.toFixed(2)}`);
    } else {
        alert("Funcionário não encontrado.");
    }
}

function atualizarCargo(funcionarios, nomeAtualiza, novoCargo) {
    let funcionario = funcionarios.find(f => f.nome.toLowerCase() === nomeAtualiza.toLowerCase());
    if (funcionario) {
        funcionario.cargo = novoCargo;
        alert("Cargo atualizado com sucesso!");
    } else {
        alert("Funcionário não encontrado.");
    }
}

function removerFuncionario(funcionarios, nome) {
    for (let i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].nome.toLowerCase() === nome.toLowerCase()) {
            funcionarios.splice(i, 1);
            alert(`Funcionario removido com sucesso!`);
            return;
        }
    }
    alert(`Funcionario não encontrado`);
}

function mediaSalario(funcionarios) {
    if (funcionarios.length === 0) {
        alert("Nenhum funcionário cadastrado.");
        return;
    }
    let soma = 0;
    for (let i = 0; i < funcionarios.length; i++) {
        soma += funcionarios[i].salario;
    }
    let media = soma / funcionarios.length;
    alert(`A média salarial da empresa é R$ ${media.toFixed(2)}`);
}

// Desafio 1
function promoverAbaixoDaMedia(funcionarios, novoCargo) {
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

// Desafio 2
function exibirMaiorSalario(funcionarios) {
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

function main() {
    let vetor = [];
    cadastroInicial(vetor);

    let opcao;

    do {
        opcao = Number(prompt(`Digite:\n1 - Criar funcionário\n2 - Listar funcionários\n3 - Aumentar salário\n4 - Buscar salário pelo nome\n5 - Atualizar cargo\n6 - Remover funcionário\n7 - Exibir média salarial\n8 - Promover abaixo da média\n9 - Exibir funcionário com maior salário\n10 - Encerrar programa`));

        switch (opcao) {
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
                let encontrarSalario = prompt(`Insira o nome do funcionário que deseja buscar o salário: `);
                buscarSalario(vetor, encontrarSalario);
                break;

            case 5:
                let nomeAtualiza = prompt("Informe o nome do funcionário que deseja atualizar o cargo:");
                let novoCargo = prompt("Informe o novo cargo:");
                atualizarCargo(vetor, nomeAtualiza, novoCargo);
                break;

            case 6:
                let nomeRemove = prompt(`Informe o nome do funcionário que deseja remover: `);
                removerFuncionario(vetor, nomeRemove);
                break;

            case 7:
                mediaSalario(vetor);
                break;

            case 8:
                let cargoPromocao = prompt("Digite o cargo para promoção (ex: Analista Júnior):");
                promoverAbaixoDaMedia(vetor, cargoPromocao);
                break;

            case 9:
                exibirMaiorSalario(vetor);
                break;

            case 10:
                alert(`Programa encerrado!`);
                break;

            default:
                alert(`Opção inválida!`);
                break;
        }

    } while (opcao !== 10);

    console.log(vetor);
}

main();
