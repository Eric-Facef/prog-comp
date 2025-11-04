vet = []
somap = 0
qtdp = 0
media = 0

N = int(input('Entre com uma quantidade de números: '))

for i in range (N):
    vet.append(int(input('Entre com um número:')))

for num in vet:
    if num % 2 == 0:
        somap += num
        qtdp += 1

if qtdp > 0:
    media = somap / qtdp
    print('A média dos números pares é: {}'.format (media))
else:
    print('Não há números pares no vetor.')
