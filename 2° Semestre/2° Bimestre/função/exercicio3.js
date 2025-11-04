/*let nome = ["Eric", "Gabriel", "Wellington", "Elias", "Ana"]

function maiusculo(vet) {
    for (let i = 0; i < vet.length; i++) {
        console.log(vet[i].toUpperCase())
    }
}

function subsA(vet) {
    for (let i = 0; i < vet.length; i++) {
        if (vet[i][0].toUpperCase() === 'A') {
            vet[i] = "ANÔNIMO";
        }
    }
}

function main() {
    console.log("Nomes em maiúsculo:");
    maiusculo(nome);

    subsA(nome); 

    console.log("\nVetor após modificações:");
    console.log(nome);
}

main();*/

function leitura(vet){
    vet.push("Eric", "Gabriel", "Wellington", "Elias", "Ana")
}

function maiuscula(vet){
    for(let i=0; i<vet.length; i++){
        vet[i] = vet[i].toUpperCase()
    }
}

function anonimo(vet){
    for (let i = 0; i < vet.length; i++) {
        if (vet[i][0] === 'A') {
            vet[i] = "ANÔNIMO";
        }
    }
}

function mostra(vet){
    console.log(vet)
}

function main(){
    let nomes = []
    leitura(nomes)
    maiuscula(nomes)
    anonimo(nomes)
    mostra(nomes)
}

main() 