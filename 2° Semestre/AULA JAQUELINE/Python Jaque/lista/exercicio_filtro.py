import random

lista = random.randint(-10, 10)
nao_zeros = [x for x in lista if x != 0]
zeros = [x for x in lista if x == 0]
nova_li = nao_zeros + zeros

print(nova_li)
