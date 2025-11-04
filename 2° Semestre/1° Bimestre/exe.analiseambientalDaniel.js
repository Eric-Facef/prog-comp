function exeRD(){
    //criar os vetores

    let regioes = []
    let dias = []
    let poluicao = []
    let somaDP = 0, somaDS = 0
    let iMaior = 0, jMaior = 0
    let maior = poluicao[0][0]
    let qtdNC


    for(let i=0; i<5; i++){
        regioes.push(prompt(`Informe o nome das regiões ${i+1}`))
    }
    for(let i=0; i<5; i++){
        dias.push(Number(prompt(`Informe o dia ${i+1}`)))
    }

    //criar matriz e adiciona os niveis de poluição

    for(let i=0; i<5; i++){
        poluicao[i] = [] //cria vetor dentro de um vetor
        for(let j=0; j<5; j++){
            poluicao[i][j] = parseInt(Math.random() * 501)
        }
    }

    //exibir todos os valores da diagonal principal e calcular sua média

    for(let i=0; i<poluicao.length; i++){
        console.log(`Elementos da diagonal principal ${poluicao[i][i]}`)
        somaDP += poluicao[i][i]
    }
    console.log(`A média da diagonal principal é ${somaDP / poluicao.length}`)

    //exibir todos os valores da diagonal secundaria e calcular a media

    for(let i=0; i<poluicao.length; i++){
        console.log(`Elementos da diagonal secundaria ${poluicao[i][4 - i]}`)
        somaDS += poluicao[i][4 - i]
    }
    console.log(`A media da diagonal secundaria é de ${somaDS / poluicao.length}`)

    //exibir qual região teve o maior indice de poluição registrado e em qual dia ocorreu

    for(let i=0; i<5; i++){
        for(let j=0; j<5; j++){
            if(poluicao[i][j] > maior){
                maior = poluicao [i][j]
                iMaior = i; jMaior = j
            }
        }
    }
    console.log(`O nivel ${maior} ocorreu na região ${regioes[iMaior]} no dia ${dias[jMaior]}`)
    
    //calcular quantas vezes o indice for superior a 300

     for(let i=0; i<5; i++){
        for(let j=0; j<5; j++){
            if(poluicao[i][j] > 300){
                qtdNC++
            }
        }
    }
    console.log(`Quantidade de niveis criticos ${qtdNC}`)

    //exibir a região que teve em media o menor indice de poluição ao longo dos 5 dias

    let medias = []
    let somaLinhas
    for(let i=0; i<poluicao.length;i++) {
        somaLinhas = 0
        for(let j=0; j<poluicao.length; j++){
            somaLinhas += poluicao[i][j]
        } 
         medias[i] = somaLinhas / poluicao.length
    }  
    
    let menor = medias[0]
    let posMenor = 0
    for(let i=0; i<medias.length; i++){
        if(medias[i]<menor){
            menor = medias[i]
            posMenor = i
        }
    }
    console.log(`A região com menor média ${menor} foi ${regioes[posMenor]}`)
}
function exeRD(){
    //criar os vetores
    let regioes = []
    let dias = []
    let poluicao = []
    let somaDP = 0, somaDS = 0
    let iMaior = 0, jMaior = 0
    let maior = poluicao[0][0]
    let qtdNC
    for(let i=0; i<5; i++){
        regioes.push(prompt(`Informe o nome das regiões ${i+1}`))
    }
    for(let i=0; i<5; i++){
        dias.push(Number(prompt(`Informe o dia ${i+1}`)))
    }
    //criar matriz e adiciona os niveis de poluição
    for(let i=0; i<5; i++){
        poluicao[i] = [] //cria vetor dentro de um vetor
        for(let j=0; j<5; j++){
            poluicao[i][j] = parseInt(Math.random() * 501)
        }
    }
    //exibir todos os valores da diagonal principal e calcular sua média
    for(let i=0; i<poluicao.length; i++){
        console.log(`Elementos da diagonal principal ${poluicao[i][i]}`)
        somaDP += poluicao[i][i]
    }
    console.log(`A média da diagonal principal é ${somaDP / poluicao.length}`)
    //exibir todos os valores da diagonal secundaria e calcular a media
    for(let i=0; i<poluicao.length; i++){
        console.log(`Elementos da diagonal secundaria ${poluicao[i][4 - i]}`)
        somaDS += poluicao[i][4 - i]
    }
    console.log(`A media da diagonal secundaria é de ${somaDS / poluicao.length}`)
    //exibir qual região teve o maior indice de poluição registrado e em qual dia ocorreu
    for(let i=0; i<5; i++){
        for(let j=0; j<5; j++){
            if(poluicao[i][j] > maior){
                maior = poluicao [i][j]
                iMaior = i; jMaior = j
            }
        }
    }
    console.log(`O nivel ${maior} ocorreu na região ${regioes[iMaior]} no dia ${dias[jMaior]}`)
    //calcular quantas vezes o indice for superior a 300
     for(let i=0; i<5; i++){
        for(let j=0; j<5; j++){
            if(poluicao[i][j] > 300){
                qtdNC++
            }
        }
    }
    console.log(`Quantidade de niveis criticos ${qtdNC}`)
    //exibir a região que teve em media o menor indice de poluição ao longo dos 5 dias
    let medias = []
    let somaLinhas
    for(let i=0; i<poluicao.length;i++) {
        somaLinhas = 0
        for(let j=0; j<poluicao.length; j++){
            somaLinhas += poluicao[i][j]
        } 
         medias[i] = somaLinhas / poluicao.length
    }  
    let menor = medias[0]
    let posMenor = 0
    for(let i=0; i<medias.length; i++){
        if(medias[i]<menor){
            menor = medias[i]
            posMenor = i
        }
    }
    console.log(`A região com menor média ${menor} foi ${regioes[posMenor]}`)
}