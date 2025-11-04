const notas = [10, 9, 9, 8, 4, 3, 7, 7, 8, 6];

let soma = 0;
let aprovados = 0;

console.log("Notas dos estudantes:");
notas.forEach((nota, indice) => {
    console.log(`Aluno ${indice + 1}: ${nota}`);
    soma += nota;
    if (nota >= 7) aprovados++;
});

console.log(`\nSoma das notas: ${soma}`);

let media = soma / notas.length;
console.log(`Média das notas: ${media.toFixed(2)}`);

console.log(`Alunos aprovados (nota ≥ 7): ${aprovados}`);

console.log("\nNotas nas posições pares:");
notas.forEach((nota, indice) => {
    if (indice % 2 === 0) console.log(`Posição ${indice}: ${nota}`);
});
