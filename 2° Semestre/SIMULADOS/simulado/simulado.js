/* ==========================================================
   SIMULADO — VERSÃO CORRIGIDA (compatível com questoes_completas.js)
   ========================================================== */

// ---------------- UTILIDADES ----------------
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ---------------- REFERÊNCIAS DE UI ----------------
const tabExam = document.getElementById("tabExam");
const tabKey = document.getElementById("tabKey");
const tabBank = document.getElementById("tabBank");

const examArea = document.getElementById("examArea");
const keyArea = document.getElementById("keyArea");
const bankTab = document.getElementById("bankTab");

const quizForm = document.getElementById("quiz");
const drawBtn = document.getElementById("drawBtn");
const difficultySelect = document.getElementById("difficultySelect");
const noRepeatChk = document.getElementById("noRepeat");
const clearHistory = document.getElementById("clearHistory");
const historyLog = document.getElementById("historyLog");
const bankSummary = document.getElementById("bankSummary");
const bankAll = document.getElementById("bankAll");
const lastDraw = document.getElementById("lastDraw");

const submitBtn = document.getElementById("submitBtn");
const showKeyBtn = document.getElementById("showKeyBtn");
const resultText = document.getElementById("resultText");
const percentText = document.getElementById("percentText");
const keyList = document.getElementById("keyList");

// estado
let currentProva = [];
let usedIds = JSON.parse(localStorage.getItem("simulado_used_ids") || "[]");

// --------------- TABS ----------------
function switchTab(tab) {
  tabExam.classList.remove("active");
  tabKey.classList.remove("active");
  tabBank.classList.remove("active");

  examArea.classList.add("hidden");
  keyArea.classList.add("hidden");
  bankTab.classList.add("hidden");

  if (tab === "exam") {
    tabExam.classList.add("active");
    examArea.classList.remove("hidden");
  }
  if (tab === "key") {
    tabKey.classList.add("active");
    keyArea.classList.remove("hidden");
    renderKey();
  }
  if (tab === "bank") {
    tabBank.classList.add("active");
    bankTab.classList.remove("hidden");
  }
}

tabExam.onclick = () => switchTab("exam");
tabKey.onclick = () => switchTab("key");
tabBank.onclick = () => switchTab("bank");

// --------------- BANCO / RENDER BANCOS ----------------
function safeLength(arr) { return Array.isArray(arr) ? arr.length : 0; }

function summary() {
  // sem caractere inválido — apenas compõe o texto
  bankSummary.textContent =
    `Português: ${safeLength(bancoQuestoes.portugues)} | ` +
    `Matemática: ${safeLength(bancoQuestoes.matematica)} | ` +
    `Administrativo: ${safeLength(bancoQuestoes.administrativo)} | ` +
    `Informática: ${safeLength(bancoQuestoes.informatica)}`;
}

function renderBankAll() {
  bankAll.innerHTML = "";

  for (const area of ["portugues", "matematica", "administrativo", "informatica"]) {
    const title = document.createElement("div");
    title.innerHTML = `<strong style='display:block;margin-top:8px'>${area.toUpperCase()}</strong>`;
    bankAll.appendChild(title);

    const list = bancoQuestoes[area] || [];
    list.forEach(q => {
      const div = document.createElement("div");
      div.className = "bank-item small";
      // mostra id + enunciado (enunciado pode ser longo)
      div.textContent = `${q.id} — ${q.enunciado}`;
      bankAll.appendChild(div);
    });
  }
}

// --------------- SORTEIO ----------------
// pickFrom agora tolera ausência de campo 'difficulty' na questão
function pickFrom(list, n, difficulty, noRepeat) {
  if (!Array.isArray(list)) return [];
  let pool = list.slice();

  if (difficulty && difficulty !== "mix") {
    pool = pool.filter(q => {
      // se não existir q.difficulty, aceita (não remove); se existir, compara
      return !q.difficulty || q.difficulty === difficulty;
    });
  }
  if (noRepeat) {
    pool = pool.filter(q => !usedIds.includes(q.id));
  }
  pool = shuffle(pool);
  return pool.slice(0, n);
}

function sortear() {
  if (!window.bancoQuestoes) {
    alert("O banco de questões não está carregado. Recarregue a página.");
    return;
  }

  const diff = difficultySelect.value;
  const noRepeat = noRepeatChk.checked;

  const p = bancoQuestoes;

  const partPort = pickFrom(p.portugues || [], 10, diff, noRepeat);
  const partMat = pickFrom(p.matematica || [], 10, diff, noRepeat);
  const partAdm = pickFrom(p.administrativo || [], 12, diff, noRepeat);
  const partInf = pickFrom(p.informatica || [], 8, diff, noRepeat);

  currentProva = shuffle([...partPort, ...partMat, ...partAdm, ...partInf]);

  renderProva();

  const now = new Date();
  lastDraw.textContent = now.toLocaleString();

  if (noRepeat) {
    currentProva.forEach(q => {
      if (q && q.id && !usedIds.includes(q.id)) usedIds.push(q.id);
    });
    localStorage.setItem("simulado_used_ids", JSON.stringify(usedIds));
  }
}

// --------------- RENDER PROVA ----------------
function renderProva() {
  quizForm.innerHTML = "";

  if (!currentProva || currentProva.length === 0) {
    quizForm.innerHTML = "<div class='small'>Nenhuma questão gerada. Clique em Sortear Prova.</div>";
    resultText.textContent = "Acertos: —";
    percentText.textContent = "";
    return;
  }

  currentProva.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "q";
    div.id = "q" + i;

    // se a estrutura do objeto for 'alternativas' ou 'opts', acomodamos
    const options = q.alternativas || q.opts || [];

    div.innerHTML = `
      <p><strong>${i + 1}.</strong> ${q.enunciado}</p>
      <div class='opts'>
        ${options
          .map((o, oi) => `
            <label class='opt'>
              <input type='radio' name='q${i}' value='${oi}'>
              <span>${o}</span>
            </label>`
          )
          .join("")}
      </div>
      <div class='small' style='margin-top:6px;color:var(--muted)'>[${q.area || ''}]</div>
    `;

    quizForm.appendChild(div);
  });

  resultText.textContent = "Acertos: —";
  percentText.textContent = "";
}

// --------------- GABARITO ----------------
function renderKey() {
  keyList.innerHTML = "";

  if (!currentProva || currentProva.length === 0) {
    keyList.innerHTML = "<div class='small'>Nenhuma prova gerada.</div>";
    return;
  }

  currentProva.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "bank-item small";

    // resposta pode estar em 'correta' (nova) ou 'a' (antigo)
    const correctIndex = (typeof q.correta === 'number') ? q.correta : (typeof q.a === 'number' ? q.a : 0);
    const options = q.alternativas || q.opts || [];
    const correctText = options[correctIndex] || "(Resposta não disponível)";

    div.innerHTML = `
      <strong>${i + 1}.</strong> ${q.enunciado}
      — <em>Resposta</em>: <strong>${correctText}</strong>
      [${q.area || ''}]
    `;

    keyList.appendChild(div);
  });
}

// --------------- CORREÇÃO ----------------
submitBtn.addEventListener("click", () => {
  if (currentProva.length === 0) return alert("Gere a prova primeiro.");

  const total = currentProva.length;
  let correct = 0;

  currentProva.forEach((q, i) => {
    const sel = document.querySelector(`input[name=q${i}]:checked`);
    const container = document.getElementById("q" + i);

    if (container) container.classList.remove("correct", "wrong");

    if (sel) {
      const val = Number(sel.value);
      const correctIndex = (typeof q.correta === 'number') ? q.correta : (typeof q.a === 'number' ? q.a : 0);
      if (val === correctIndex) {
        correct++;
        if (container) container.classList.add("correct");
      } else {
        if (container) container.classList.add("wrong");
      }
    } else {
      if (container) container.classList.add("wrong");
    }
  });

  const pct = Math.round((correct / total) * 100);
  resultText.textContent = `Acertos: ${correct} / ${total}`;
  percentText.textContent = `${pct}%`;

  // registra no histórico simples
  const logEntry = `${new Date().toLocaleString()} — ${correct}/${total} (${pct}%) — dificuldade: ${difficultySelect.value} — no-repeat: ${noRepeatChk.checked}`;
  const prev = historyLog.textContent === "Nenhuma prova aplicada ainda." ? "" : historyLog.textContent + "\n";
  historyLog.textContent = (prev + logEntry).trim();

  // opcional: atualiza ranking (simples)
  updateRanking(logEntry);
});

// --------------- EVENTOS BÁSICOS ----------------
drawBtn.addEventListener("click", () => { sortear(); switchTab('exam'); });
showKeyBtn.addEventListener("click", () => { 
  if (keyArea.classList.contains("hidden")) switchTab('key'); else switchTab('exam');
});
clearHistory.addEventListener("click", () => {
  if (confirm("Limpar histórico e registro de questões não repetidas?")) {
    usedIds = [];
    localStorage.removeItem("simulado_used_ids");
    historyLog.textContent = "Nenhuma prova aplicada ainda.";
    alert("Histórico limpo!");
  }
});

// --------------- RANKING SIMPLES ----------------
function updateRanking(entry) {
  // ranking salvo localmente (apenas string simples)
  const rk = JSON.parse(localStorage.getItem("simulado_ranking") || "[]");
  rk.unshift(entry);
  if (rk.length > 20) rk.pop();
  localStorage.setItem("simulado_ranking", JSON.stringify(rk));
  renderRanking();
}

function renderRanking() {
  const rk = JSON.parse(localStorage.getItem("simulado_ranking") || "[]");
  const rankingList = document.getElementById("rankingList");
  if (!rankingList) return;
  if (rk.length === 0) rankingList.textContent = "Nenhuma entrada ainda.";
  else rankingList.textContent = rk.join("\n");
}

// --------------- INICIALIZAÇÃO ----------------
function initSimulado() {
  if (!window.bancoQuestoes) {
    // se o banco ainda não foi carregado, tenta novamente depois de 200ms (até 20 vezes)
    let tries = 0;
    const handle = setInterval(() => {
      tries++;
      if (window.bancoQuestoes || tries > 20) {
        clearInterval(handle);
        if (!window.bancoQuestoes) {
          console.error("Banco de questões não encontrado após tentativas. Verifique path em <script>.");
          return;
        }
        // chama init agora
        summary();
        renderBankAll();
        historyLog.textContent = historyLog.textContent || "Nenhuma prova aplicada ainda.";
        renderRanking();
      }
    }, 200);
  } else {
    summary();
    renderBankAll();
    historyLog.textContent = historyLog.textContent || "Nenhuma prova aplicada ainda.";
    renderRanking();
  }
}

// chama init após carregar o script
initSimulado();