def somatorio(n):
    soma = 0
    for i in range(2, n+1):
        soma += i / i**2
    return soma

n = int(input("Digite um número: "))
result = somatorio(n)
print('A soma é {:.2f}'.format(result))
