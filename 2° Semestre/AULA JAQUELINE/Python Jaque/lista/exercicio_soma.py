listas = [[1, 2, 3], [4, 5], [10, -2, 1], [7, 8, 9]]

maior_lista = listas[0]
maior_soma = 0
for num in listas[0]:
    maior_soma += num

for lista in listas[1:]:
    soma = 0
    for num in lista:
        soma += num
    if soma > maior_soma:
        maior_soma = soma
        maior_lista = lista

print(f"A lista com a maior soma é {maior_lista} e a soma total é {maior_soma}.")
