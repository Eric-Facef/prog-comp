const resultado = document.getElementById("resultado");

// Função para buscar coordenadas (latitude e longitude)
async function getCoordinates(cidade) {
  const cidadeEncoded = encodeURIComponent(cidade);
  
  const geoResp = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${cidadeEncoded}&count=1&language=pt&format=json`
  );

  if (!geoResp.ok) {
    throw new Error("Erro ao buscar coordenadas.");
  }

  const geoData = await geoResp.json();
  console.log("GeoData:", geoData); // 👀 Para depuração

  if (!geoData.results || geoData.results.length === 0) {
    throw new Error("Cidade não encontrada! Tente incluir o país (ex: Lisboa, Portugal).");
  }

  return geoData.results[0];
}

// Função para buscar clima atual
async function getWeather(latitude, longitude) {
  const climaResp = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=celsius&timezone=America/Sao_Paulo`
  );

  if (!climaResp.ok) {
    throw new Error("Erro ao buscar dados do clima.");
  }

  const climaData = await climaResp.json();
  return climaData.current_weather;
}

// Função para exibir o resultado na tela
function displayWeather(cidadeInfo, clima) {
  resultado.innerHTML = `
    <b>📍 ${cidadeInfo.name}, ${cidadeInfo.country}</b><br>
    🌡️ <b>Temperatura:</b> ${clima.temperature} °C<br>
    💨 <b>Vento:</b> ${clima.windspeed} km/h<br>
    🕒 <b>Atualizado em:</b> ${clima.time.replace("T", " ")}
  `;
}

// Função principal que conecta tudo
async function buscarClima() {
  const cidade = document.getElementById("cidade").value.trim();

  if (!cidade) {
    resultado.innerText = "⚠️ Digite uma cidade!";
    return;
  }

  resultado.innerText = "🔎 Buscando coordenadas...";

  try {
    const cidadeInfo = await getCoordinates(cidade);

    resultado.innerText = "🌦️ Buscando clima...";

    const clima = await getWeather(cidadeInfo.latitude, cidadeInfo.longitude);

    displayWeather(cidadeInfo, clima);
  } catch (erro) {
    resultado.innerText = `❌ Ocorreu um erro: ${erro.message}`;
  }
}

// Permite apertar "Enter" para buscar
document.getElementById("cidade").addEventListener("keypress", (e) => {
  if (e.key === "Enter") buscarClima();
});
