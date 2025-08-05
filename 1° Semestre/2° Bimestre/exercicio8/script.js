function exe8() {
    let idd, peso, altura, olhos, cabelo;
    let item1 = 0, item2 = 0, item2qtd = 0, item3 = 0, item4 = 0;
    for (let cont = 1; cont <= 6; cont++) {
        do {
            idd = Number(prompt(`Informe idade > 0`));
        } while (idd <= 0);
        do {
            peso = Number(prompt(`Informe peso > 0`));
        } while (peso <= 0);
        do {
            altura = Number(prompt(`Informe altura > 0`));
        } while (altura <= 0);
        do {
            olhos = prompt(`Informe a cor dos olhos (P, V, A, C):`).toUpperCase();
        } while (olhos != 'P' && olhos != 'V' && olhos != 'A' && olhos != 'C');
        do {
            cabelo = prompt(`Informe a cor do cabelo (P, L, R, C):`).toUpperCase();
        } while (cabelo != 'P' && cabelo != 'L' && cabelo != 'R' && cabelo != 'C');

        if (idd > 50 && peso < 60) {
            item1++;
        }
        if (altura < 1.50) {
            item2 += idd;
            item2qtd++;
        }
        if (olhos == 'A') {
            item3++;
        }
        if (cabelo == 'R' && olhos != 'A') {
            item4++;
        }
    }
    let mediaIdade = item2qtd > 0 ? (item2 / item2qtd).toFixed(2) : "Sem dados";
    let porcentagemOlhosAzuis = ((item3 / 6) * 100).toFixed(2);
    alert(`Item 1 (idade > 50 e peso < 60): ${item1}\n Item 2 (média de idade dos <1.50m): ${mediaIdade}\n Item 3 (% olhos azuis): ${porcentagemOlhosAzuis}%\n Item 4 (cabelos ruivos e olhos não azuis): ${item4}`)

}
