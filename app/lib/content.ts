export const company = {
  name: process.env.NEXT_PUBLIC_PUBLISHER_NAME || "Brotto",
  site: process.env.NEXT_PUBLIC_PUBLISHER_SITE || "https://brotto.io",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "brotto@brotto.io"
};

export const appConfig = {
  name: "NUL",
  symbol: "∅",
  appStoreUrl: process.env.NEXT_PUBLIC_APPSTORE_URL || "https://apps.apple.com/",
  youtubeUrl:
    process.env.NEXT_PUBLIC_YOUTUBE_URL ||
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  statusUrl: process.env.NEXT_PUBLIC_STATUS_URL || ""
};

export const navLinks = [
  { label: "Produto", href: "/#produto" },
  { label: "Recursos", href: "/#recursos" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Segurança", href: "/safety" },
  { label: "Suporte", href: "/support" }
];

export const socialProof = [
  "+1.2K criacoes / dia",
  "Criadores, estudios e equipes",
  "Fluxo multimodal em um unico app"
];

export const howItWorks = [
  {
    title: "Escolha o modo",
    description: "Video, Imagem, Audio ou Transcricao em um estudio unico."
  },
  {
    title: "Descreva ou envie referencia",
    description: "Prompt por texto, voz ou upload de material base para guiar a IA."
  },
  {
    title: "Gere, ajuste e exporte",
    description: "Itere rapido, versione e exporte em alta qualidade."
  }
];

export const features = [
  {
    title: "NUL Motion",
    description: "Geracao e edicao de video assistida por IA para narrativas curtas e campanhas."
  },
  {
    title: "NUL Vision",
    description: "Imagens de alta definicao com variacoes de estilo, enquadramento e composicao."
  },
  {
    title: "NUL Voice",
    description: "Voz sintetica e ajustes de entonacao para locucao, dublagem e spots."
  },
  {
    title: "NUL Transcribe",
    description: "Transcricao com timestamps, revisao rapida e exportacao em formatos padrao."
  },
  {
    title: "Biblioteca & versoes",
    description: "Organize projetos, historico de iteracoes e assets multimodais em um so lugar."
  },
  {
    title: "Export em alta qualidade",
    description: "Saidas prontas para redes, campanhas, apresentacoes e processos internos."
  },
  {
    title: "Marca d'agua opcional",
    description: "Controle de branding para testes e publicacao final conforme seu fluxo."
  }
];

export const safetyHighlights = [
  "Filtros anti-abuso",
  "Denuncia e bloqueio",
  "Contato de suporte"
];

export const integrations = [
  "Geracao multimodal via Kie.ai",
  "Voz via ElevenLabs"
];

export const pricingPlans = [
  {
    name: "Free",
    price: "R$0",
    subtitle: "Para testar o estudio",
    points: [
      "Limite mensal de geracoes",
      "Export padrao",
      "Acesso basico aos modos"
    ]
  },
  {
    name: "Pro",
    price: "R$79/m",
    subtitle: "Para criadores",
    points: [
      "Mais creditos de geracao",
      "Export em alta qualidade",
      "Prioridade em processamento"
    ]
  },
  {
    name: "Studio",
    price: "Sob consulta",
    subtitle: "Para equipes",
    points: [
      "Assentos colaborativos",
      "Controles avancados",
      "Suporte dedicado"
    ]
  }
];

export const pricingComparison = [
  {
    feature: "Modos (video, imagem, audio, transcricao)",
    free: "Basico",
    pro: "Completo",
    studio: "Completo"
  },
  {
    feature: "Qualidade de export",
    free: "Padrao",
    pro: "Alta",
    studio: "Alta + fluxos"
  },
  {
    feature: "Biblioteca e versoes",
    free: "Sim",
    pro: "Sim",
    studio: "Sim"
  },
  {
    feature: "Ferramentas de equipe",
    free: "Nao",
    pro: "Limitado",
    studio: "Sim"
  },
  {
    feature: "Suporte",
    free: "Email",
    pro: "Prioritario",
    studio: "Dedicado"
  }
];

export const faqItems = [
  {
    question: "O que e NUL?",
    answer:
      "NUL e um estudio de criacao multimodal por IA para gerar e editar video, imagem, audio e transcricoes em um unico fluxo."
  },
  {
    question: "O que posso gerar?",
    answer:
      "Voce pode gerar pecas visuais, roteiros com voz sintetica, cortes de video e transcricoes com ajustes e exportacao."
  },
  {
    question: "Como funciona a moderacao?",
    answer:
      "Combinamos filtragem automatica, analise contextual e revisao manual quando necessario. Conteudos que violem regras podem ser removidos e contas podem ser bloqueadas."
  },
  {
    question: "Posso gerar conteudo adulto?",
    answer:
      "Nao permitimos conteudo sexual explicito, exploracao sexual, violencia grafica ou qualquer material ilegal. Conteudos sensiveis podem ter restricao por idade."
  },
  {
    question: "Como funciona a privacidade?",
    answer:
      "Tratamos dados conforme a LGPD, com bases legais adequadas, controles de seguranca e canais para exercicio de direitos do titular."
  }
];

export const legalEffectiveDate = "15 de fevereiro de 2026";
