vet = []
soma = 0

N = int(input('Digite uma quantidade: '))

for i in range(N):
    vet.append(int(input('Entre com um número {}: '.format(i+1))))

for i in range(N):   # percorre os índices
    soma += vet[i]

print('A soma é {} '.format(soma))
