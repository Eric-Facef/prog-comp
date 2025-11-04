tab = int(input("Digite o número da tabuada em que deseja: "))

for n in range (11):
    result = n * tab
    print('{} x {} = {}'.format(n, tab, result))