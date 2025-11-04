#somar os elmentos de um vetor com função

def soma(vet=[]):
    soma = 0
    N = int(input('Digite a quantidade de números: '))

    for i in range(N):
        vet.append(int(input('Entre com o número {}: '.format(i + 1))))

    for i in range(N):
        soma += vet[i]

    return soma

resultado = soma()
print('A soma dos elementos é: {}'.format(resultado))

