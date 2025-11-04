#imprimir menor dos dois elementos e se forem iguais

def numbers(a, b):
    if a < b:
        print('O menor número é: {}'.format(a))
    elif b < a:
        print('O menor número é: {}'.format(b))
    else:
        print('Os números são iguais.')

x = int(input('Digite o primeiro número: '))
y = int(input('Digite o segundo número: '))

numbers(x, y)

