matriz = [[int(input(f"Digite um número para a posição [{i}][{j}]: ")) for j in range(3)] for i in range(3)]

print("\n  Matriz 3x3:")
[print(f"{matriz[i][0]:4}{matriz[i][1]:4}{matriz[i][2]:4}") for i in range(3)]

soma_pares = [matriz[i][j] for i in range(3) for j in range(3) if matriz[i][j] % 2 == 0]
soma_terceira_coluna = [matriz[i][2] for i in range(3)]
maior_segunda_linha = matriz[1][0]
[maior_segunda_linha := num if num > maior_segunda_linha else maior_segunda_linha for num in matriz[1]]

soma_pares_total = 0
[soma_pares_total := soma_pares_total + n for n in soma_pares]

soma_coluna_total = 0
[soma_coluna_total := soma_coluna_total + n for n in soma_terceira_coluna]

print("\nSoma dos valores pares:", soma_pares_total)
print("Soma dos valores da terceira coluna:", soma_coluna_total)
print("Maior valor da segunda linha:", maior_segunda_linha)
