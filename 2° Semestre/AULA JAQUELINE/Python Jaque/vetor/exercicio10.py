numeros = []
invertido = []

for i in range(30):
    n = int(input("Digite o {}º número: ".format(i + 1)))
    numeros.append(n)

for i in range(29, -1, -1):
    invertido.append(numeros[i])

print("\nVetor original: {}".format(numeros))
print("Vetor invertido: {}".format(invertido))