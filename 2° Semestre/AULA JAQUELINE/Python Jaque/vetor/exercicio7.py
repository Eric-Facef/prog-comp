n = int(input("Digite o valor de N: "))

fibonacci = []

for i in range(n):
    if i == 0 or i == 1:
        fibonacci.append(1)
    else:
        fibonacci.append(fibonacci[i - 1] + fibonacci[i - 2])

print("\nSequência de Fibonacci com {} elementos: {}".format(n, fibonacci))