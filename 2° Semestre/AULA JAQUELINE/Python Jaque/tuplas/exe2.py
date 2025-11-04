nome = input("Digite o nome do arquivo (com o caminho completo): ")

arquivo = open(nome, 'r', encoding='utf-8')

contagem = {}

for linha in arquivo:
    palavras = linha.split() 
    for palavra in palavras:
        if palavra in contagem:
            contagem[palavra] += 1
        else:
            contagem[palavra] = 1

arquivo.close()
print(contagem)
