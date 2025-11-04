vet = []
media = 0
qtdAM = 0
soma = 0

N = int(input('Entre com a quantidade de alunos: '))

for i in range (N):
    nota = float(input('Digite a nota do aluno {}: '.format (i+1)))
    vet.append(nota)
    soma += nota

media = soma / N

for nota in vet:
    if nota > media:
        qtdAM += 1 

print('A média da classe é {:.2f}: '.format (media), '\nA Quantidade de alunnos acima da média é {}: '.format (qtdAM))
