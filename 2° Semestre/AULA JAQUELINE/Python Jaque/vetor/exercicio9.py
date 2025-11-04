numeros = []
novo_vetor = []

for i in range(30):
    n = int(input("Digite o {}º número: ".format(i + 1)))
    numeros.append(n)

for i in range(30):
    if i % 2 == 0:  
        novo_vetor.append(numeros[i] * 2)
    else:           
        novo_vetor.append(numeros[i] * 3)

print("\nVetor original: {}".format(numeros))
print("Novo vetor: {}".format(novo_vetor))