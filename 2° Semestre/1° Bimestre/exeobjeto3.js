    function exeobj3() {
        let projetos = [], i, nomeProjeto, empresa, duracaoMeses, orcamento, projeto, somaDuracao = 0, qtdInovaTech = 0, totalCurtaDuracao = 0;

        for (i = 0; i < 7; i++) {
            nomeProjeto = prompt(`Digite o nome do projeto:`);
            empresa = prompt(`Digite o nome da empresa do projeto:`).trim();
            duracaoMeses = Number(prompt(`Digite a duração em meses do projeto:`));
            orcamento = Number(prompt(`Digite o orçamento do projeto (em reais):`));

            projeto = {
                nomeProjeto: nomeProjeto,
                empresa: empresa,
                duracaoMeses: duracaoMeses,
                orcamento: orcamento
            };

            projetos.push(projeto);
        }
        let maior = projetos[0];
        for (i = 0; i < projetos.length; i++) {

            if (projetos[i].duracaoMeses > 12 && projetos[i].orcamento > 1000000) {
                console.log(`Projeto: ${projetos[i].nomeProjeto}, Empresa: ${projetos[i].empresa}, 
                Duração: ${projetos[i].duracaoMeses} meses, Orçamento: R$ ${projetos[i].orcamento.toLocaleString()}`);
            }
            if (projetos[i].orcamento > maior.orcamento) {
                maior = projetos[i];
            }
            somaDuracao += projetos[i].duracaoMeses;

            if (projetos[i].empresa.toLowerCase() === "inovatech") {
                qtdInovaTech++;
            }
            if (projetos[i].duracaoMeses < 6) {
                totalCurtaDuracao += projetos[i].orcamento;
            }
        }
        console.log(`\nProjeto com maior orçamento: ${maior.nomeProjeto} (R$ ${maior.orcamento.toLocaleString()})`);
        console.log(`Média de duração dos projetos: ${(somaDuracao / projetos.length).toFixed(2)} meses`);
        console.log(`Quantidade de projetos da InovaTech: ${qtdInovaTech}`);
        console.log(`Total gasto com projetos de menos de 6 meses: R$ ${totalCurtaDuracao.toLocaleString()}`);
    }
