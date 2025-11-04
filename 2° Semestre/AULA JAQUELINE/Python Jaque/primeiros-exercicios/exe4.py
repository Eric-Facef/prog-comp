somap = 0
qtdp = 0

while qtdp < 10: 
    num = int(input('Digite um número: '))

    if num % 2 == 0:  
        somap += num
        qtdp += 1
    else:
        print("Número ímpar ignorado.")

media = somap / qtdp
print('Foram digitados {} números pares e a média é {:.2f}'.format(qtdp, media))
