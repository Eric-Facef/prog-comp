for m in range(9, -1, -1):      
    for s in range(59, -1, -1):  
        if m == 10 and s == 59:   
            continue
        print(f"{m:02d}:{s:02d}")