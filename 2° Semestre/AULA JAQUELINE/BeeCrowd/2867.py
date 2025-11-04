C = int(input())

for _ in range(C):
    n, m = map(int, input().split())
    valor = n ** m
    digitos = len(str(valor))
    print(digitos)
