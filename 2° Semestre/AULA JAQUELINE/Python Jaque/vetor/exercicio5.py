vet1 = []
vet2 = []
vet_soma = []

print('Digite os 50 números do primeiro vetor:')
for i in range(50):
    num = int(input('Número {} do vetor 1: '.format(i + 1)))
    vet1.append(num)

print('\nDigite os 50 números do segundo vetor:')
for i in range(50):
    num = int(input('Número {} do vetor 2: '.format(i + 1)))
    vet2.append(num)

for i in range(50):
    vet_soma.append(vet1[i] + vet2[i])

print('\nResultado da soma dos vetores:')
for i in range(50):
    print('Posição {}: {}'.format(i + 1, vet_soma[i]))
