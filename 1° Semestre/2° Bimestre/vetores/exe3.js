/* Enunciado pesquisa de opnião com vetores:
Crie uma função chamada exe() que simule uma pesquisa de opnião sobre um evento. O programa deve:
Ler as respostas de 10 pessoas, onde cada resposta é um número:
1 = Gostou muito
2 = Gostou
3 = Não gostou 
Armazenar as respostas em um vetor. 
Ao final, exibir: 
Quantaas pessoas responderam casa opção (1, 2, 3)
A porcentagem de pessoas que não gostaram (responderam 3) */

function exe3(){ 
    let vet = [], opcao1 = 0, opcao2 = 0, opcao3 = 0, i
    for(i=0; i<10;1++){
        do { 
            vet[i] = Number(prompt(`Informe sua nota: `))
        }while(vet[i] != 1 && vet[i] != 2 && vet[i] != 3)
    }
    for(i=0; i<10; i++){
        if(vet[i] == 1){ 
            cont1++
        }
        else if(vet[i] == 2){
            cont2++
        }
        else if(vet[i] == 3){
            cont3++
        }
    }
}
