soma = 0

for numero in range(1, 501):
    if numero % 2 != 0 and numero % 3 == 0:
        soma += numero

print("A soma dos números ímpares múltiplos de 3 entre 1 e 500 é: %d" % (soma))
