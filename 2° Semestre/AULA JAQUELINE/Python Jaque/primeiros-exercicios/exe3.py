a = int(input("Digite o primeiro lado: "))
b = int(input("Digite o segundo lado: "))
c = int(input("Digite o terceiro lado: "))

if a < b + c and b < a + c and c < a + b:
    
    if a == b == c:
        print("Os lados %d, %d e %d formam um triângulo %s" % (a, b, c, "equilátero"))
    elif a == b or b == c or a == c:
        print("Os lados %d, %d e %d formam um triângulo %s" % (a, b, c, "isósceles"))
    else:
        print("Os lados %d, %d e %d formam um triângulo %s" % (a, b, c, "escaleno"))
else:
    print("Os lados %d, %d e %d não podem formar um triângulo" % (a, b, c))
