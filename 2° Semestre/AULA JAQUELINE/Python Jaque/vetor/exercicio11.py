numeros = []
pares = []
impares = []

for i in range(20):
    n = int(input("Digite o {}º número: ".format(i + 1)))
    numeros.append(n)

for n in numeros:
    if n % 2 == 0:
        pares.append(n)
    else:
        impares.append(n)

print("\nVetor completo: {}".format(numeros))
print("Números pares: {}".format(pares))
print("Números ímpares: {}".format(impares))