def mediap(vet=[]):
    soma = 0

    N = int(input('Digite a quantidade de números: '))

    for i in range(N):
        vet.append(int(input('Entre com o número {}: '.format(i + 1))))
        soma += vet[i]  

    if N > 0:
        media = soma / N
        print('A média dos números é: {:.2f}'.format(media))
    else:
        print('Nenhum número foi digitado.')

mediap()
