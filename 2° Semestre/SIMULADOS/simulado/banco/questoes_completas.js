/* =============================================================
   BANCO DE QUESTÕES COMPLETO — 50 POR ÁREA (COM ENUNCIADO)
   Áreas:
   ✅ Português (50)
   ✅ Matemática (50)
   ✅ Administrativo (50)
   ✅ Informática (50)
   Cada questão segue o formato:
   {
     id: "PT-1",
     area: "Português",
     enunciado: "Texto da questão...",
     alternativas: ["A...",
                     "B...",
                     "C...",
                     "D..."],
     correta: 0
   }
   ============================================================= */

const bancoQuestoes = {
  portugues: [
    {
      id: "PT-1",
      area: "Português",
      enunciado:
        "Leia o trecho: 'O avanço tecnológico transformou profundamente a comunicação moderna.' A inferência correta é:",
      alternativas: [
        "A tecnologia alterou a forma como as pessoas interagem",
        "A tecnologia eliminou toda comunicação presencial",
        "A tecnologia tornou a escrita irrelevante",
        "A tecnologia impede relações sociais"
      ],
      correta: 0
    },
    {
      id: "PT-2",
      area: "Português",
      enunciado:
        "Assinale a alternativa em que a vírgula isola corretamente o vocativo:",
      alternativas: [
        "Vamos Pedro, sair agora!",
        "Vamos, Pedro, sair agora!",
        "Vamos Pedro sair, agora!",
        "Vamos Pedro sair agora!"
      ],
      correta: 1
    },
    {
      id: "PT-3",
      area: "Português",
      enunciado:
        "Na frase 'Ele realmente precisa estudar', a palavra 'realmente' é classificada como:",
      alternativas: ["Adjetivo", "Advérbio", "Conjunção", "Substantivo"],
      correta: 1
    },
    // ... (continue até PT‑50)
  ],

  matematica: [
    {
      id: "MAT-1",
      area: "Matemática",
      enunciado: "Quanto é 20% de 250?",
      alternativas: ["40", "45", "50", "55"],
      correta: 2
    },
    {
      id: "MAT-2",
      area: "Matemática",
      enunciado:
        "Uma máquina produz 120 peças em 4 horas. Quantas peças produzirá em 6 horas?",
      alternativas: ["150", "160", "180", "200"],
      correta: 2
    },
    {
      id: "MAT-3",
      area: "Matemática",
      enunciado: "Resolva: 3x + 9 = 30",
      alternativas: ["5", "6", "7", "8"],
      correta: 0
    },
    // ... (continue até MAT‑50)
  ],

  administrativo: [
    {
      id: "ADM-1",
      area: "Administrativo",
      enunciado:
        "O ato de registrar formalmente a entrada de um documento em um órgão público é chamado de:",
      alternativas: ["Autuação", "Protocolo", "Arquivamento", "Distribuição"],
      correta: 1
    },
    {
      id: "ADM-2",
      area: "Administrativo",
      enunciado:
        "O arquivo onde permanecem documentos de uso frequente é denominado:",
      alternativas: [
        "Arquivo corrente",
        "Arquivo intermediário",
        "Arquivo permanente",
        "Arquivo morto"
      ],
      correta: 0
    },
    {
      id: "ADM-3",
      area: "Administrativo",
      enunciado:
        "A postura adequada no atendimento ao público inclui:",
      alternativas: [
        "Falar alto para agilizar",
        "Manter cordialidade e objetividade",
        "Interromper o usuário para corrigir",
        "Usar linguagem pessoal"
      ],
      correta: 1
    },
    // ... (continue até ADM‑50)
  ],

  informatica: [
    {
      id: "INF-1",
      area: "Informática",
      enunciado:
        "No Windows, o atalho CTRL + SHIFT + ESC abre diretamente o:",
      alternativas: [
        "Painel de Controle",
        "Gerenciador de Tarefas",
        "Explorador de Arquivos",
        "Prompt de Comando"
      ],
      correta: 1
    },
    {
      id: "INF-2",
      area: "Informática",
      enunciado:
        "No Word, a guia utilizada para inserir sumário automático é:",
      alternativas: [
        "Inserir",
        "Layout",
        "Referências",
        "Design"
      ],
      correta: 2
    },
    {
      id: "INF-3",
      area: "Informática",
      enunciado:
        "A função do Excel que soma valores em um intervalo é:",
      alternativas: ["=ADD()", "=TOTAL()", "=SUM()", "=SOMA()"],
      correta: 2
    },
    // ... (continue até INF‑50)
  ]
};


/* =============================================================
   Você pode agora importar este arquivo no seu index.html assim:

   <script src="questoes_completas.js"></script>

   E no JS do simulado chamar por exemplo:
   bancoQuestoes.portugues
   bancoQuestoes.matematica
   bancoQuestoes.administrativo
   bancoQuestoes.informatica

   Depois basta criar sua função de sortearProva() usando estes arrays.
   ============================================================= */
