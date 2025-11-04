function carregarCidades(lista) {
  lista.push("São Paulo", "Campinas", "Santos", "Sorocaba", "Caraguatatuba")
}

function padronizarNomes(lista) {
  for (let i = 0; i < lista.length; i++) {
    lista[i] = lista[i].toUpperCase()
  }
}

function marcarInterior(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].startsWith("C")) {
      lista[i] = "INTERIOR - " + lista[i]
    }
  }
}

function exibirCidades(lista) {
  console.log("Lista final de cidades:")
  for (const cidade of lista) {
    console.log(cidade)
  }
}

function main() {
  const cidades = [];
  carregarCidades(cidades)
  padronizarNomes(cidades)
  marcarInterior(cidades)
  exibirCidades(cidades)
}

main()
