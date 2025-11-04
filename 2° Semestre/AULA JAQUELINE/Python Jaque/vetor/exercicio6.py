vetor = []

for i in range(100):
    if i % 2 == 0:
        vetor.append(1)
    else:
        vetor.append(0)

print("Vetor gerado (1 em índices pares e 0 em índices ímpares):\n{}".format(vetor))