// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const parser = require('./parser');
const OpenAI = require('openai');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔹 Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// 🔹 Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 🔹 Configuração opcional do OpenAI
let openai = null;
if (process.env.OPENAI_API_KEY) {
  try {
    openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    console.log('✅ OpenAI client inicializado.');
  } catch (err) {
    console.warn('⚠️ Falha ao inicializar OpenAI:', err.message);
  }
} else {
  console.log('⚠️ OPENAI_API_KEY não fornecida — modo LLM desativado.');
}

const sessions = {}; // sessionId -> mensagens

function getSystemMessage() {
  return {
    role: 'system',
    content: `Você é um Assistente especializado em Tradução NL ⇄ CPC. Responda em português e mantenha-se estritamente no tema.`
  };
}

// 🔹 Endpoint principal /api/chat
app.post('/api/chat', async (req, res) => {
  try {
    const { sessionId = 'default', message, propositions = {}, useOpenAI = false } = req.body;
    if (!message) return res.status(400).json({ error: 'message é obrigatório' });

    if (!sessions[sessionId]) sessions[sessionId] = [getSystemMessage()];
    sessions[sessionId].push({ role: 'user', content: message });

    const lower = message.trim().toLowerCase();
    const greetings = ['oi', 'ola', 'olá', 'bom dia', 'boa tarde', 'boa noite', 'tudo bem', 'como vai'];

    if (greetings.some(g => lower === g || lower.startsWith(g + ' '))) {
      const reply = `Oi! 😊 Posso ajudar com NL→CPC, CPC→NL ou definição de proposições. Diga "nl: <frase>" ou "cpc: <fórmula>"`;
      return res.json({ reply, sessionId });
    }

    const looksLikeFormula = /[∧∨¬→↔()]/.test(message) || /->|<->/.test(message);
    const looksLikeNl = /se |entao|então| não | nao | e | ou /i.test(lower);

    if (!useOpenAI) {
      if (looksLikeNl) {
        const out = await parser.nlToCpc(message, propositions, false);
        const reply = `Tradução heurística:\nFórmula: ${out.formula}\nMapeamento: ${JSON.stringify(out.mapping)}\nExplicação: ${out.explanation}`;
        return res.json({ reply, result: out, sessionId });
      }
      if (looksLikeFormula) {
        const out = await parser.cpcToNl(message, propositions, false);
        const reply = `Tradução heurística:\nFrase: ${out.sentence}\nExplicação: ${out.explanation}`;
        return res.json({ reply, result: out, sessionId });
      }
    }

    if (useOpenAI && openai) {
      const history = sessions[sessionId].slice(-10);
      if (Object.keys(propositions).length > 0)
        history.push({ role: 'system', content: `Proposições: ${JSON.stringify(propositions)}` });

      const resp = await openai.chat.completions.create({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        messages: history,
        max_tokens: 600,
        temperature: 0.2
      });

      const assistantMessage = resp.choices[0].message.content;
      return res.json({ reply: assistantMessage, sessionId });
    }

    const fallback = 'Desculpe — não entendi. Envie "nl: ..." ou "cpc: ..."';
    return res.json({ reply: fallback, sessionId });

  } catch (err) {
    console.error('Erro em /api/chat:', err);
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Endpoints diretos
app.post('/api/nl-to-cpc', async (req, res) => {
  try {
    const { text, propositions, useOpenAI } = req.body;
    const result = await parser.nlToCpc(text, propositions || {}, useOpenAI);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/cpc-to-nl', async (req, res) => {
  try {
    const { formula, propositions, useOpenAI } = req.body;
    const result = await parser.cpcToNl(formula, propositions || {}, useOpenAI);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
