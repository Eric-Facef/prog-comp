'''dic = {} 
dic = {"um" : "one", "dois" : "two", "tres" : "three"}
print(dic["dois"])

dic["dois"] = 2
print(dic["dois"])

print(dic)'''

'''arquivo  = open('/content/drive/My Drive/Algll - 2025/disciplinas.txt' , 'r')'''

arquivo = open('C:\\Users\\ericm\\OneDrive\\Documents\\teste.txt', 'r')

for linha in arquivo:
    palavras = linha.split()  # divide por espaços
    for palavra in palavras:
        print(palavra)



