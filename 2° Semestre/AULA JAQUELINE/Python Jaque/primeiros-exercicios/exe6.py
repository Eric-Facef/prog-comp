secreto = int(input("Jogador 1, digite o número secreto: "))

tentativas = 0
chute = -1 

print("\n Jogador 2, tente adivinhar o número!")

while chute != secreto:
    chute = int(input("Digite seu chute: "))
    tentativas += 1

    if chute < secreto:
        print("Seu chute foi BAIXO!")
    elif chute > secreto:
        print("Seu chute foi ALTO!")
    else:
        print("Parabéns! Você acertou em {} tentativas.".format(tentativas))
