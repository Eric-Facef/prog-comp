while True:
    M, N = map(int, input().split())
    if M == 0 and N == 0:
        break
    soma = M + N
    M = int(str(M).replace('0', ''))
    N = int(str(N).replace('0', ''))
    soma = int(str(soma).replace('0', ''))
    print(soma)
