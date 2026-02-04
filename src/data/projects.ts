export type Project = {
  id: number
  slug: string
  title: string
  category: string
  image: string
  tags: string[]
  link?: string
  description: string
  fullDescription: string
  technologies: string[]
  objectives: string[]
  results: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "autoservice",
    title: "Autoservice - Gestão de Oficinas",
    category: "Sistemas ERP",
    image: "/image/autoservice.png",
    link: "https://autoservice.gleeze.com/",
    tags: ["Gestão", "Automotivo", "Estoque"],
    description: "Sistema completo para gestão de oficinas mecânicas e centros automotivos.",
    fullDescription: "O Autoservice é uma solução robusta desenvolvida para modernizar a gestão de oficinas mecânicas. Ele centraliza o controle de ordens de serviço, estoque, financeiro e relacionamento com clientes em uma única plataforma intuitiva. O sistema elimina o uso de papel e planilhas desconectadas, permitindo que gestores tenham visão em tempo real da produtividade da oficina.",
    technologies: ["React", "Python", "Django", "SQL Server"],
    objectives: [
      "Digitalizar 100% das ordens de serviço.",
      "Reduzir o tempo de atendimento ao cliente.",
      "Controlar o estoque de peças com precisão.",
      "Fornecer relatórios financeiros automáticos."
    ],
    results: [
      "Aumento de 30% na produtividade das oficinas parceiras.",
      "Redução de 90% nos erros de controle de estoque.",
      "Melhoria significativa na satisfação dos clientes finais."
    ]
  },
  {
    id: 2,
    slug: "planvita",
    title: "Planvita - Saúde Integrada",
    category: "SaaS",
    image: "/image/planvita.png",
    link: "https://planvita.com.br",
    tags: ["Saúde", "Benefícios", "Portal"],
    description: "Plataforma de gestão de benefícios e saúde corporativa.",
    fullDescription: "Planvita é uma plataforma inovadora que conecta empresas, colaboradores e prestadores de serviços de saúde. O sistema facilita a gestão de benefícios corporativos, agendamento de consultas e acompanhamento de programas de saúde preventiva, garantindo conformidade com a LGPD e regulamentações da ANS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SQL Server"],
    objectives: [
      "Simplificar a administração de benefícios de saúde.",
      "Oferecer um portal de autoatendimento para colaboradores.",
      "Integrar com redes de prestadores de serviços."
    ],
    results: [
      "Mais de 50.000 vidas gerenciadas na plataforma.",
      "Redução de 40% nos custos operacionais de RH.",
      "Acesso simplificado a redes de saúde para colaboradores."
    ]
  },
  {
    id: 3,
    slug: "tidelli",
    title: "Tidelli - E-commerce B2B",
    category: "E-commerce",
    image: "/image/tidelli.png",
    link: "https://tidelli.softlineinfo.com.br/",
    tags: ["B2B", "Vendas", "Móveis"],
    description: "Portal B2B exclusivo para lojistas e representantes Tidelli.",
    fullDescription: "Desenvolvemos o portal de pedidos B2B da Tidelli, líder em móveis externos. O sistema permite que lojistas e representantes realizem pedidos complexos com personalização de acabamentos, tecidos e cordas, garantindo que a produção receba especificações exatas. Inclui regras de negócio complexas para cálculo de impostos e logística.",
    technologies: ["Next.js", "TypeScript", "Node.js", "SQL Server"],
    objectives: [
      "Automatizar o processo de pedidos B2B.",
      "Permitir personalização visual dos produtos no pedido.",
      "Integrar diretamente com o ERP da fábrica."
    ],
    results: [
      "Eliminação de erros de especificação na produção.",
      "Agilidade no processamento de pedidos de grandes volumes.",
      "Melhoria na experiência de compra dos franqueados."
    ]
  },
  {
    id: 4,
    slug: "callsoft",
    title: "Callsoft - CRM & Vendas",
    category: "Sistemas ERP",
    image: "/image/callsoft.png",
    link: "https://callsoft.softlineinfo.com.br/",
    tags: ["CRM", "Telefonia", "Vendas"],
    description: "CRM integrado com telefonia para times de vendas de alta performance.",
    fullDescription: "Callsoft é uma solução que une CRM e telefonia VoIP. Focado em times de vendas, ele permite discagem automática, gravação de chamadas e registro automático de interações no histórico do cliente. O dashboard em tempo real permite que gestores acompanhem métricas de ligação e conversão.",
    technologies: ["Next.js", "TypeScript", "Node.js", "SQL Server"],
    objectives: [
      "Integrar telefonia e CRM em uma única tela.",
      "Aumentar o volume de ligações diárias por vendedor.",
      "Fornecer métricas detalhadas de performance de chamadas."
    ],
    results: [
      "Aumento de 2x no número de contatos diários.",
      "Melhoria na taxa de conversão de leads.",
      "Controle total sobre a operação de televendas."
    ]
  },
  {
    id: 5,
    slug: "ssa-kimonos",
    title: "SSA Kimonos - Loja Virtual",
    category: "E-commerce",
    image: "/image/ssa.png",
    link: "https://ssakimonos.com.br",
    tags: ["E-commerce", "Esportes", "Varejo"],
    description: "E-commerce especializado em artigos esportivos e artes marciais.",
    fullDescription: "Loja virtual moderna e responsiva para a SSA Kimonos. O projeto foca em alta conversão e experiência do usuário mobile. Implementamos recursos de vitrine dinâmica, recuperação de carrinho e integração com gateways de pagamento e logística otimizados para o varejo brasileiro.",
    technologies: ["Next.js", "TypeScript", "Node.js", "SQL Server"],
    objectives: [
      "Criar uma experiência de compra mobile-first.",
      "Otimizar a velocidade de carregamento da loja.",
      "Aumentar a taxa de conversão do checkout."
    ],
    results: [
      "Crescimento de 150% nas vendas online no primeiro ano.",
      "Melhoria significativa no SEO e tráfego orgânico.",
      "Experiência de compra fluida em qualquer dispositivo."
    ]
  },
  {
    id: 6,
    slug: "tintas-barros",
    title: "Tintas Barros - Gestão Corporativa",
    category: "Sistemas ERP",
    image: "/image/placeholder-tech.svg",
    link: "https://tintasbarros.com.br",
    tags: ["Indústria", "Tintas", "ERP"],
    description: "Sistema de gestão integrado para indústria e varejo de tintas.",
    fullDescription: "ERP customizado para a Tintas Barros, cobrindo desde a formulação de tintas na fábrica até a venda no balcão. O sistema gerencia lotes, validade, controle de estoque químico e integração fiscal, atendendo às especificidades do setor de tintas e revestimentos.",
    technologies: ["Next.js", "TypeScript", "SQL Server"],
    objectives: [
      "Integrar chão de fábrica e pontos de venda.",
      "Controlar formulações e custos de produção.",
      "Gerenciar estoque de múltiplos pontos de venda em tempo real."
    ],
    results: [
      "Redução de desperdício de matéria-prima.",
      "Controle fiscal preciso e automatizado.",
      "Visão unificada do desempenho de todas as filiais."
    ]
  },
  {
    id: 7,
    slug: "rh-gestor",
    title: "RH Gestor - Plataforma de RH",
    category: "Sistemas ERP",
    image: "/image/placeholder-tech.svg",
    link: "https://rhgestor.softlineinfo.com.br/",
    tags: ["RH", "Gestão de Pessoas", "SaaS"],
    description: "Plataforma completa para gestão estratégica de Recursos Humanos.",
    fullDescription: "RH Gestor transforma o departamento pessoal em RH estratégico. A plataforma automatiza processos de recrutamento e seleção, avaliação de desempenho, pesquisa de clima e gestão de treinamentos. Com dashboards intuitivos, apoia a tomada de decisão baseada em dados sobre o capital humano.",
    technologies: ["Next.js", "TypeScript", "Node.js", "SQL Server"],
    objectives: [
      "Automatizar processos manuais de RH.",
      "Centralizar dados dos colaboradores.",
      "Facilitar a avaliação de desempenho e feedback."
    ],
    results: [
      "Redução de 60% no tempo de fechamento de vagas.",
      "Melhoria na retenção de talentos através de feedbacks estruturados.",
      "Eliminação de planilhas para gestão de treinamentos."
    ]
  },
  {
    id: 8,
    slug: "facial",
    title: "Facial - Gestor de Ponto",
    category: "Sistemas ERP",
    image: "/image/facial.png",
    link: "https://facial.softlineinfo.com.br/",
    tags: ["Gestão", "Ponto", "SaaS"],
    description: "Sistema de controle de ponto eletrônico com reconhecimento facial.",
    fullDescription: "Facial é um sistema moderno de controle de jornada que utiliza reconhecimento facial para garantir a autenticidade das marcações de ponto. Totalmente compatível com a Portaria 671 do MTE, oferece geolocalização, aplicativo para colaboradores e área do gestor para tratamento de ponto e relatórios.",
    technologies: ["Node.js", "TypeScript", "SQL Server"],
    objectives: [
      "Eliminar fraudes no registro de ponto.",
      "Facilitar o registro de ponto para equipes externas.",
      "Automatizar o cálculo de horas extras e banco de horas."
    ],
    results: [
      "Segurança jurídica total para as empresas clientes.",
      "Redução drástica no tempo de fechamento da folha de ponto.",
      "Facilidade de uso elogiada pelos colaboradores."
    ]
  },
  {
    id: 9,
    slug: "nfse",
    title: "NFSe - Geração de Notas Fiscais",
    category: "Sistemas ERP",
    image: "/image/nfse.png",
    link: "https://nfse.softlineinfo.com.br/",
    tags: ["Financeiro", "Fiscal", "Notas Fiscais"],
    description: "API e interface para emissão automatizada de Notas Fiscais de Serviço.",
    fullDescription: "Solução robusta para emissão de NFS-e em centenas de prefeituras brasileiras. O sistema abstrai a complexidade dos diferentes padrões municipais, oferecendo uma interface única e uma API simples para que outros softwares possam emitir notas fiscais automaticamente. Inclui validação de esquemas e tratamento inteligente de erros.",
    technologies: ["Node.js", "TypeScript", "SQL Server"],
    objectives: [
      "Unificar a emissão de NFS-e para múltiplas prefeituras.",
      "Garantir alta disponibilidade e performance na emissão.",
      "Simplificar a integração fiscal para desenvolvedores."
    ],
    results: [
      "Cobertura de mais de 500 municípios brasileiros.",
      "Emissão de milhares de notas por dia com estabilidade.",
      "Redução de custos com conformidade fiscal para parceiros."
    ]
  }
]