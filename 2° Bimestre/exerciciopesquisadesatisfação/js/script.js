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
    alert(`A média das notas é ${media.toFixed(1)}`);
    alert(`O número de Satisfeitos é ${contaSatisfeitos}`);
    alert(`O número de Insatisfeitos é ${contaInsatisfeitos}`);
}
