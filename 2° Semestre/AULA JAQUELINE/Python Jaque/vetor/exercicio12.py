notas = []  

for i in range(50):
    nota = float(input("Digite a nota {}: ".format(i + 1)))
    notas.append(nota)

media = sum(notas) / len(notas)

limite_superior = media * 1.1
limite_inferior = media * 0.9

acima = 0
abaixo = 0

for nota in notas:
    if nota > limite_superior:
        acima += 1
    elif nota < limite_inferior:
        abaixo += 1

print("\nMédia das notas: {:.2f}".format(media))
print("Notas 10% acima da média: {}".format(acima))
print("Notas 10% abaixo da média: {}".format(abaixo))