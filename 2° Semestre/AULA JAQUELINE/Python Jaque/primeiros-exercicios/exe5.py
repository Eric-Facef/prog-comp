somap = 0
qtdp = 0

while True:
    num = int(input("Digite um número (0 para encerrar): "))
    
    if num == 0: 
        break
    
    if num % 2 == 0: 
        somap += num
        qtdp += 1
    else:
        print("Número ímpar ignorado.")

if qtdp > 0:
    media = somap / qtdp
    print("Foram digitados {} números pares e a média é {:.2f}".format(qtdp, media))
else:
    print("Nenhum número par foi digitado.")


