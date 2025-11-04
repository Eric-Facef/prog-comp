import sys

for linha in sys.stdin:
    resultado = ""
    italico = False
    negrito = False
    for c in linha:
        if c == '_':
            if not italico:
                resultado += "<i>"
            else:
                resultado += "</i>"
            italico = not italico
        elif c == '*':
            if not negrito:
                resultado += "<b>"
            else:
                resultado += "</b>"
            negrito = not negrito
        else:
            resultado += c
    print(resultado, end="")
