n = int(input("Digite a quantidade de alunos: "))

notas = []
for i in range(n):
    nota = float(input(f"Digite a nota do {i+1}º aluno: "))
    notas.append(nota)

media = sum(notas) / n

print(f"Média da turma: {media:.2f}")
print("Notas acima da média:")
for nota in notas:
    if nota > media:
        print(nota)
