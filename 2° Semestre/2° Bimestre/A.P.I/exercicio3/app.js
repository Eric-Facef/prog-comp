const apiKey = "50f3858c";

async function traduzirTexto(texto) {
  const resp = await fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=en|pt`
  );
  const data = await resp.json();
  return data.responseData.translatedText;
}

async function buscarFilme() {
  const nomeFilme = document.getElementById("filme").value.trim();
  const resultado = document.getElementById("resultado");

  if (!nomeFilme) {
    resultado.innerText = "Digite o nome de um filme.";
    return;
  }

  resultado.innerText = "Buscando...";

  try {
    const resp = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(nomeFilme)}&apikey=${apiKey}`);
    const data = await resp.json();

    if (data.Response === "False") {
      resultado.innerText = "Filme não encontrado.";
      return;
    }

    let enredoTraduzido = data.Plot;
    if (data.Plot && data.Plot !== "N/A") {
      resultado.innerText = "Traduzindo enredo...";
      enredoTraduzido = await traduzirTexto(data.Plot);
    }

    resultado.innerHTML = `
      <h2>${data.Title} (${data.Year})</h2>
      <img src="${data.Poster !== "N/A" ? data.Poster : ""}" alt="Poster do filme" width="200">
      <p><strong>Gênero:</strong> ${data.Genre}</p>
      <p><strong>Diretor:</strong> ${data.Director}</p>
      <p><strong>Atores:</strong> ${data.Actors}</p>
      <p><strong>Enredo:</strong> ${enredoTraduzido}</p>
      <p><strong>Nota IMDb:</strong> ${data.imdbRating}</p>
    `;
  } catch (erro) {
    resultado.innerText = "Erro ao buscar o filme.";
  }
}

/*
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Exemplo de Consumo de API</title>
</head>
<body>
  <h1>Lista de Filmes</h1>
  <h2>
    Informe o nome do filme <input type="text" id="titulo"/>
  </h2>
  <button onclick="carregarFilmes()">Carregar Dados</button>
  <div id="listaFilmes"></div>

  <script>
    // livra de fazer outra atividade quem chamou esta função
    async function carregarFilmes() {
      let titulo = document.getElementById("titulo").value
      try {
        // await -> aguarda resposta da API
        const resposta = await fetch(`http://www.omdbapi.com/?apikey=294dff3&t=${titulo}`);
        // a API retornou string, precisamos converter para JSON
        const filme = await resposta.json();
   //     console.log(filmes.length)
        const lista = document.getElementById("listaFilmes");
        lista.innerHTML = ""; // limpa lista

        // para cada usuário
      //  for (let i = 0; i < filmes.length; i++) {
          const secao = document.createElement("section");
          const imagem = document.createElement("img");
          // insere texto no item da lista
          imagem.src = filme.Poster;
          secao.appendChild(imagem)
          // associa o item da lista à lista
          lista.appendChild(secao);
      //  }
      } catch (erro) {
        console.error("Erro ao carregar usuários:", erro);
        alert("Não foi possível carregar os dados da API.");
      }
    }
  </script>
</body>
</html>
*/