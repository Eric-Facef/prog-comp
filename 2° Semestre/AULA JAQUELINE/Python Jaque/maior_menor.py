def maior(vetor):
    nMaior = vetor[0]
    for i in vetor:
        if i > nMaior:
            nMaior = i
    return nMaior

def segundoMaior(vetor):
    maiorN = maior(vetor)
    nSegunda = vetor[0]
    
    if maiorN == vetor[0]:
        nSegunda = vetor[1]
    else:
        nSegunda = vetor[0]

    for i in vetor:
        if i > nSegunda and i != maiorN:
            nSegunda = i
    return nSegunda

vet = []
for i in range(5):
    num = int(input(f"Digite o {i+1}º número: "))
    vet.append(num)

print("Vetor:", vet)
print("Maior número:", maior(vet))
print("Segundo maior número:", segundoMaior(vet))