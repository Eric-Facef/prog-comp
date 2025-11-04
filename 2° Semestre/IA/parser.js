// parser.js
require('dotenv').config();
const OpenAI = require('openai');
const client = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;

function norm(txt){
  if (typeof txt !== 'string') return txt;
  return txt.normalize('NFKD').replace(/[\u0300-\u036f]/g,"").toLowerCase().trim();
}

function assignSymbols(clauses, userMap = {}) {
  // userMap: { P: "chover", Q: "grama molhada" }
  const map = {};    // normalized description -> symbol
  const reverse = {}; // symbol -> original description
  for (const sym of Object.keys(userMap)) {
    const desc = userMap[sym];
    if (!desc) continue;
    map[norm(desc)] = sym.toUpperCase();
    reverse[sym.toUpperCase()] = desc;
  }
  let nextIdx = 1;
  function nextSymbol(){ return `P${nextIdx++}`; }

  const assigned = {}; // clause(original) -> symbol
  for (const c of clauses) {
    const n = norm(c);
    // already present in reverse?
    const existingSym = Object.keys(reverse).find(k => norm(reverse[k]) === n);
    if (existingSym) {
      assigned[c] = existingSym;
      continue;
    }
    if (map[n]) {
      assigned[c] = map[n];
      continue;
    }
    // assign new symbol
    let sym = nextSymbol();
    while (reverse[sym]) sym = nextSymbol();
    assigned[c] = sym;
    reverse[sym] = c;
  }
  return { assigned, reverse };
}

async function nlToCpc(text, propositions = {}, useOpenAI = false) {
  // useOpenAI optional - leaving LLM code but safe if no key
  // heuristics:
  const s = norm(text);
  // se ... então ...
  const seMatch = s.match(/^se (.+) enta?o (.+)$/);
  if (seMatch) {
    const ante = seMatch[1].trim();
    const cons = seMatch[2].trim();
    const { assigned, reverse } = assignSymbols([ante, cons], propositions);
    const formula = `${assigned[ante]} → ${assigned[cons]}`;
    return { formula, mapping: reverse, explanation: 'Implica (se...então) — parser heurístico' };
  }
  // conjunção "e"
  if (/\s+e\s+/.test(s)) {
    const parts = text.split(/\s+e\s+/i).map(p=>p.trim()).filter(Boolean);
    const { assigned, reverse } = assignSymbols(parts, propositions);
    const syms = parts.map(p => assigned[p]).join(' ∧ ');
    return { formula: `(${syms})`, mapping: reverse, explanation: 'Conjunção (e)' };
  }
  // disjunção "ou"
  if (/\s+ou\s+/.test(s)) {
    const parts = text.split(/\s+ou\s+/i).map(p=>p.trim()).filter(Boolean);
    const { assigned, reverse } = assignSymbols(parts, propositions);
    const syms = parts.map(p => assigned[p]).join(' ∨ ');
    return { formula: `(${syms})`, mapping: reverse, explanation: 'Disjunção (ou)' };
  }
  // negação
  const naoMatch = s.match(/^(nao|não)\s+(.+)/);
  if (naoMatch) {
    const clause = naoMatch[2].trim();
    const { assigned, reverse } = assignSymbols([clause], propositions);
    return { formula: `¬${assigned[clause]}`, mapping: reverse, explanation: 'Negação' };
  }

  // fallback simples: proposição única
  const { assigned, reverse } = assignSymbols([text.trim()], propositions);
  return { formula: assigned[text.trim()], mapping: reverse, explanation: 'Proposição simples (fallback)' };
}

async function cpcToNl(formula, propositions = {}, useOpenAI = false) {
  function symToDesc(sym) {
    if (propositions[sym]) return propositions[sym];
    return sym;
  }
  let s = formula.trim();
  // isola símbolos (P, P1, P2, etc)
  s = s.replace(/([A-Za-z]\d*)/g, (m) => `__${m}__`);
  s = s.replace(/→/g, '->').replace(/↔/g, '<->').replace(/∧/g, '&').replace(/∨/g, '|').replace(/¬/g, 'NOT ');
  s = s.replace(/__([A-Za-z]\d*)__/g, (m, sym) => `"${symToDesc(sym)}"`);
  s = s.replace(/"([^"]+)"\s*->\s*"([^"]+)"/, (m,a,b) => `Se ${a}, então ${b}`);
  s = s.replace(/"([^"]+)"\s*&\s*"([^"]+)"/g, (m,a,b) => `${a} e ${b}`);
  s = s.replace(/"([^"]+)"\s*\|\s*"([^"]+)"/g, (m,a,b) => `${a} ou ${b}`);
  s = s.replace(/NOT\s*"([^"]+)"/g, (m,a) => `não ${a}`);
  return { sentence: s, explanation: 'Tradução heurística (rule-based)' };
}

module.exports = { nlToCpc, cpcToNl };
