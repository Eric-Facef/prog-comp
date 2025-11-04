// bot.js
/**
 * Conversational agent manager:
 * - pequenas intents (greeting, ask_help, nl2cpc, cpc2nl, define_prop, off_topic)
 * - restringe conversas ao tema "Cálculo Proposicional Clássico (CPC)"
 * - mantém estado por sessionId em memória (último contexto, proposições definidas)
 */

const parser = require('./parser');

const SESSIONS = {}; // { sessionId: { props: {P:desc}, lastIntent: '', step: int } }

function getSession(id) {
  if (!SESSIONS[id]) SESSIONS[id] = { props: {}, lastIntent: null, step: 0 };
  return SESSIONS[id];
}

function detectIntent(msg) {
  const s = msg.trim().toLowerCase();
  // greetings
  if (/(^oi$|^ola$|^olá$|^bom dia|^boa tarde|^boa noite|^tudo bem|^e ai|^ei\b)/i.test(s)) return { intent: 'greeting' };
  if (/(^ajuda$|^o que voce faz|o que pode|do que precisa|como funciona|ajude me|me ajuda)/i.test(s)) return { intent: 'ask_help' };
  if (/^definir propos/i.test(s) || s.startsWith('proposicao') || /p\d?\s*=/.test(s)) return { intent: 'define_prop' };
  // commands for NL -> CPC or CPC -> NL
  if (s.startsWith('nl:') || /^(se |não |nao |esta |está )/i.test(s)) return { intent: 'nl2cpc' };
  if (s.startsWith('cpc:') || /[∧∨¬→↔()]/.test(msg) || /->|<->/.test(msg)) return { intent: 'cpc2nl' };
  // fallback: off-topic detection by keywords (if user asks about unrelated domains)
  if (/(futebol|filme|receita|programa de tv|notícias|clima fora do contexto)/i.test(s)) return { intent: 'off_topic' };
  // otherwise ambiguous
  return { intent: 'unknown' };
}

async function handleMessage(sessionId, message) {
  const session = getSession(sessionId);
  const { intent } = detectIntent(message);

  // greeting
  if (intent === 'greeting') {
    session.lastIntent = 'greeting';
    session.step = 1;
    return { reply: 'Oi — tudo bem? Eu sou um agente focado em Cálculo Proposicional (CPC). Do que precisa? (ex: "Traduzir: Se chover, então...")', followUp: true };
  }

  if (intent === 'ask_help') {
    return {
      reply: `Posso:
- Traduzir NL (pt-BR) → CPC (ex: "Se chover, então a grama ficará molhada.")
- Traduzir CPC → NL (ex: "(P ∧ Q) → R")
- Você pode definir proposições com: {"P":"chover","Q":"grama molhada"} (envie como JSON ou "define P=chover")
Diga "nl: <sua frase>" ou "cpc: <sua fórmula>" ou "definir <P>=<descrição>".`,
      followUp: true
    };
  }

  // define propositions: parse simple patterns like "define P=chover" or a JSON blob
  if (intent === 'define_prop') {
    // try JSON
    const trimmed = message.trim();
    try {
      // se enviado um JSON puro
      if (trimmed.startsWith('{')) {
        const obj = JSON.parse(trimmed);
        session.props = { ...session.props, ...obj };
        return { reply: `Proposições atualizadas: ${JSON.stringify(session.props)}`, followUp: true };
      }
    } catch (e) {
      // ignore JSON parse error
    }
    // try patterns: P=desc ; P: desc ; "definir P = desc"
    const m = trimmed.match(/([A-Za-z]\d?)\s*[:=]\s*(.+)/);
    if (m) {
      const sym = m[1].toUpperCase();
      const desc = m[2].trim();
      session.props[sym] = desc;
      return { reply: `Definição salva: ${sym} => ${desc}`, followUp: true };
    }
    // fallback
    return { reply: `Não entendi. Envie um JSON com o mapeamento {"P":"chover", "Q":"..."} ou "P=descrição".`, followUp: true };
  }

  if (intent === 'off_topic') {
    return { reply: 'Desculpe — posso conversar **apenas** sobre Cálculo Proposicional Clássico (CPC). Se quiser posso traduzir frases NL↔CPC, explicar conectivos (∧,∨,¬,→,↔) e mostrar exemplos. Quer tentar um exemplo?', followUp: true };
  }

  // NL -> CPC
  if (intent === 'nl2cpc') {
    // allow prefix "nl:" to remove ambiguity
    const txt = message.replace(/^nl:\s*/i, '').trim();
    try {
      const res = await parser.nlToCpc(txt, session.props, process.env.USE_OPENAI === 'true');
      session.lastIntent = 'nl2cpc';
      return { reply: `FÓRMULA: ${res.formula}\nMAPPING: ${JSON.stringify(res.mapping)}\nNota: ${res.explanation}`, followUp: true, raw: res };
    } catch (e) {
      return { reply: `Erro ao traduzir: ${e.message}` };
    }
  }

  // CPC -> NL
  if (intent === 'cpc2nl') {
    const txt = message.replace(/^cpc:\s*/i, '').trim();
    try {
      const res = await parser.cpcToNl(txt, session.props, process.env.USE_OPENAI === 'true');
      session.lastIntent = 'cpc2nl';
      return { reply: `FRASE: ${res.sentence}\nNota: ${res.explanation}`, followUp: true, raw: res };
    } catch (e) {
      return { reply: `Erro ao traduzir fórmula: ${e.message}` };
    }
  }

  // unknown: try to keep it on topic by asking user to clarify or offer examples
  if (intent === 'unknown') {
    return {
      reply: 'Desculpei, não entendi. Posso ajudar com: (1) NL→CPC (envie "nl: <frase>"), (2) CPC→NL (envie "cpc: <fórmula>"), (3) definir proposições (JSON ou "P=descrição"). Quer um exemplo?',
      followUp: true
    };
  }

  // default catch-all
  return { reply: 'Hmm... não entendi. Tente "nl: ..." ou "cpc: ..." ou "definir P=..."', followUp: true };
}

module.exports = { handleMessage };
