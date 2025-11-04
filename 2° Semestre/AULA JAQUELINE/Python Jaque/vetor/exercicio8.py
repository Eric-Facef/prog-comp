numeros = []

for i in range(20):
    n = int(input("Digite o {}º número: ".format(i + 1)))
    numeros.append(n)

maior = max(numeros)
menor = min(numeros)

print("\nVetor: {}".format(numeros))
print("Maior número: {}".format(maior))
print("Menor número: {}".format(menor))