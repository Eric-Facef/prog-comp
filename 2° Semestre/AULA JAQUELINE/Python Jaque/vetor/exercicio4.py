vet = []

for i in range(10):
    num = int(input('Digite o {}º número: '.format(i + 1)))
    vet.append(num)

print('\nVetor com os números multiplicados por 3:')
for num in vet:
    print('{}'.format(num * 3))
