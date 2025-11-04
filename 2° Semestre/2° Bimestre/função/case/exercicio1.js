function listarNomes(alunos) {
    for (let i = 0; i < alunos.length; i++) {
        console.log(alunos[i].nome);
    }
}

function aumentarIdade(alunos) {
    for (let aluno of alunos) {
        aluno.idade += 1;
    }
}

function cadastroInicial(alunos) {
    alunos.push({ nome: "Ana", idade: 20, curso: "ES" });
    alunos.push({ nome: "Carlos", idade: 22, curso: "Engenharia" });
    alunos.push({ nome: "Beatriz", idade: 19, curso: "Medicina" });
}

function cadastroNovo(alunos) {
    alunos.push({
        nome: prompt("Informe o nome do novo aluno: "),
        idade: Number(prompt("Informe a idade do novo aluno: ")),
        curso: prompt("Informe o curso do novo aluno: ")
    });
}

function nomeRemove(alunos, nome){
    for(let i=0; i < alunos.length; i++){
        if (alunos[i].nome == nome){ // achei
            alunos.splice(i, 1) // removeu
            return // sai da função
        }
    }
}

function main() {
    let vetor = [];
    cadastroInicial(vetor); // cadastro inicial

    let opcao;
    do {
        opcao = Number(prompt("Digite:\n1 - Criar aluno\n2 - Listar nomes\n3 - Atualizar idade\n4 - Remover um aluno\n5 - Sair"));
        switch (opcao) {
            case 1:
                cadastroNovo(vetor);
                break;
            case 2:
                listarNomes(vetor);
                break;
            case 3:
                aumentarIdade(vetor);
                break;
            case 4:
                let  nomeRemove = prompt(`Informe o nome do aluno que deseja remover`);
                removeAluno(vetor, nomeRemove)
                break;
            case 5:
                alert("Programa encerrado!");
                break;
            default:
                alert("Opção inválida!");
                break;
        }
    } while (opcao !== 4);

    console.log(vetor)
}

main()

// nao fazer prompt dentro da função