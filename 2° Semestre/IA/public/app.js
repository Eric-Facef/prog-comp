const propsInput = document.getElementById('propsInput');
const savePropsBtn = document.getElementById('saveProps');
const clearPropsBtn = document.getElementById('clearProps');
const propsSaved = document.getElementById('propsSaved');
const inputText = document.getElementById('inputText');
const output = document.getElementById('output');
const btnNlToCpc = document.getElementById('btnNlToCpc');
const btnCpcToNl = document.getElementById('btnCpcToNl');
const btnChat = document.getElementById('btnChat');
const useOpenAI = document.getElementById('useOpenAI');

let currentProps = {};

function show(msg) {
  output.textContent = typeof msg === 'string' ? msg : JSON.stringify(msg, null, 2);
}

function parseProps(txt) {
  try { return JSON.parse(txt); } catch {}
  const map = {};
  txt.split(/\n|,/).forEach(line => {
    const [k, v] = line.split('=').map(s => s?.trim());
    if (k && v) map[k.toUpperCase()] = v;
  });
  return map;
}

savePropsBtn.onclick = () => {
  currentProps = parseProps(propsInput.value);
  propsSaved.textContent = 'Proposições: ' + JSON.stringify(currentProps);
  show('Proposições salvas.');
};

clearPropsBtn.onclick = () => {
  currentProps = {};
  propsInput.value = '';
  propsSaved.textContent = 'Proposições: { }';
  show('Limpo.');
};

async function post(url, body) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  return res.json();
}

btnNlToCpc.onclick = async () => {
  show('Processando NL → CPC...');
  const r = await post('/api/nl-to-cpc', {
    text: inputText.value,
    propositions: currentProps,
    useOpenAI: useOpenAI.checked
  });
  show(r);
};

btnCpcToNl.onclick = async () => {
  show('Processando CPC → NL...');
  const r = await post('/api/cpc-to-nl', {
    formula: inputText.value,
    propositions: currentProps,
    useOpenAI: useOpenAI.checked
  });
  show(r);
};

btnChat.onclick = async () => {
  show('Enviando mensagem...');
  const r = await post('/api/chat', {
    message: inputText.value,
    propositions: currentProps,
    useOpenAI: useOpenAI.checked
  });
  show(r);
};
