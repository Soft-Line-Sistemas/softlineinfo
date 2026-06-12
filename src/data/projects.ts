export type ProjectTranslation = {
  title: string
  category: string
  tags: string[]
  description: string
  fullDescription: string
  objectives: string[]
  results: string[]
}

export type Project = {
  id: number
  slug: string
  image: string
  link?: string
  technologies: string[]
  translations: {
    pt: ProjectTranslation
    en: ProjectTranslation
    es: ProjectTranslation
  }
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "autoservice",
    image: "/image/autoservice.png",
    link: "https://autoservice.gleeze.com/",
    technologies: ["React", "Python", "Django", "SQL Server"],
    translations: {
      pt: {
        title: "Autoservice - Gestão de Oficinas",
        category: "Sistemas ERP",
        tags: ["Gestão", "Automotivo", "Estoque"],
        description: "Sistema completo para gestão de oficinas mecânicas e centros automotivos.",
        fullDescription: "O Autoservice é uma solução robusta desenvolvida para modernizar a gestão de oficinas mecânicas. Ele centraliza o controle de ordens de serviço, estoque, financeiro e relacionamento com clientes em uma única plataforma intuitiva. O sistema elimina o uso de papel e planilhas desconectadas, permitindo que gestores tenham visão em tempo real da produtividade da oficina.",
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
      en: {
        title: "Autoservice - Workshop Management",
        category: "ERP Systems",
        tags: ["Management", "Automotive", "Inventory"],
        description: "Complete system for the management of mechanical workshops and automotive centers.",
        fullDescription: "Autoservice is a robust solution developed to modernize the management of mechanical workshops. It centralizes the control of service orders, inventory, financials, and customer relationships in a single intuitive platform. The system eliminates the use of paper and disconnected spreadsheets, allowing managers to have a real-time view of workshop productivity.",
        objectives: [
          "Digitize 100% of service orders.",
          "Reduce customer service time.",
          "Control parts inventory with precision.",
          "Provide automatic financial reports."
        ],
        results: [
          "30% increase in productivity for partner workshops.",
          "90% reduction in inventory control errors.",
          "Significant improvement in final customer satisfaction."
        ]
      },
      es: {
        title: "Autoservice - Gestión de Talleres",
        category: "Sistemas ERP",
        tags: ["Gestión", "Automotriz", "Inventario"],
        description: "Sistema completo para la gestión de talleres mecánicos y centros automotrices.",
        fullDescription: "Autoservice es una solución robusta desarrollada para modernizar la gestión de talleres mecánicos. Centraliza el control de órdenes de servicio, inventario, finanzas y relaciones con los clientes en una única plataforma intuitiva. El sistema elimina el uso de papel y hojas de cálculo desconectadas, lo que permite a los gerentes tener una visión en tiempo real de la productividad del taller.",
        objectives: [
          "Digitalizar el 100% de las órdenes de servicio.",
          "Reducir el tiempo de atención al cliente.",
          "Controlar el inventario de piezas con precisión.",
          "Proporcionar informes financieros automáticos."
        ],
        results: [
          "Aumento del 30% en la productividad de los talleres asociados.",
          "Reducción del 90% en errores de control de inventario.",
          "Mejora significativa en la satisfacción del cliente final."
        ]
      }
    }
  },
  {
    id: 2,
    slug: "planvita",
    image: "/image/planvita.png",
    link: "https://planvita.com.br",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SQL Server"],
    translations: {
      pt: {
        title: "Planvita - Saúde Integrada",
        category: "SaaS",
        tags: ["Saúde", "Benefícios", "Portal"],
        description: "Plataforma de gestão de benefícios e saúde corporativa.",
        fullDescription: "Planvita é uma plataforma inovadora que conecta empresas, colaboradores e prestadores de serviços de saúde. O sistema facilita a gestão de benefícios corporativos, agendamento de consultas e acompanhamento de programas de saúde preventiva, garantindo conformidade com a LGPD e regulamentações da ANS.",
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
      en: {
        title: "Planvita - Integrated Health",
        category: "SaaS",
        tags: ["Health", "Benefits", "Portal"],
        description: "Management platform for corporate health and benefits.",
        fullDescription: "Planvita is an innovative platform that connects companies, employees, and healthcare providers. The system facilitates corporate benefits administration, appointment scheduling, and preventive health program monitoring, ensuring compliance with LGPD (Brazilian GDPR) and ANS regulations.",
        objectives: [
          "Simplify health benefits administration.",
          "Offer a self-service portal for employees.",
          "Integrate with healthcare provider networks."
        ],
        results: [
          "Over 50,000 lives managed on the platform.",
          "40% reduction in HR operational costs.",
          "Simplified access to healthcare networks for employees."
        ]
      },
      es: {
        title: "Planvita - Salud Integrada",
        category: "SaaS",
        tags: ["Salud", "Beneficios", "Portal"],
        description: "Plataforma de gestión de beneficios y salud corporativa.",
        fullDescription: "Planvita es una plataforma innovadora que conecta empresas, colaboradores y proveedores de servicios de salud. El sistema facilita la gestión de beneficios corporativos, programación de citas y seguimiento de programas de salud preventiva, garantizando el cumplimiento de la LGPD y las regulaciones de la ANS.",
        objectives: [
          "Simplificar la administración de beneficios de salud.",
          "Ofrecer un portal de autoservicio para los colaboradores.",
          "Integrar con redes de proveedores de salud."
        ],
        results: [
          "Más de 50.000 vidas gestionadas en la plataforma.",
          "Reducción del 40% en los costos operativos de RRHH.",
          "Acceso simplificado a redes de salud para los colaboradores."
        ]
      }
    }
  },
  {
    id: 3,
    slug: "tidelli",
    image: "/image/tidelli.png",
    link: "https://tidelli.softlineinfo.com.br/",
    technologies: ["Next.js", "TypeScript", "Node.js", "SQL Server"],
    translations: {
      pt: {
        title: "Tidelli - E-commerce B2B",
        category: "E-commerce",
        tags: ["B2B", "Vendas", "Móveis"],
        description: "Portal B2B exclusivo para lojistas e representantes Tidelli.",
        fullDescription: "Desenvolvemos o portal de pedidos B2B da Tidelli, líder em móveis externos. O sistema permite que lojistas e representantes realizem pedidos complexos com personalização de acabamentos, tecidos e cordas, garantindo que a produção receba especificações exatas. Inclui regras de negócio complexas para cálculo de impostos e logística.",
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
      en: {
        title: "Tidelli - B2B E-commerce",
        category: "E-commerce",
        tags: ["B2B", "Sales", "Furniture"],
        description: "Exclusive B2B portal for Tidelli store owners and sales representatives.",
        fullDescription: "We developed Tidelli's B2B order portal, a leader in outdoor furniture. The system allows store owners and representatives to make complex orders with customization of finishes, fabrics, and ropes, ensuring that production receives exact specifications. It includes complex business rules for tax calculation and logistics.",
        objectives: [
          "Automate the B2B order process.",
          "Allow visual customization of products in the order.",
          "Integrate directly with the factory's ERP."
        ],
        results: [
          "Elimination of specification errors in production.",
          "Agility in processing high-volume orders.",
          "Improvement in franchisees' buying experience."
        ]
      },
      es: {
        title: "Tidelli - E-commerce B2B",
        category: "E-commerce",
        tags: ["B2B", "Ventas", "Muebles"],
        description: "Portal B2B exclusivo para tiendas y representantes de Tidelli.",
        fullDescription: "Desarrollamos el portal de pedidos B2B de Tidelli, líder en muebles de exterior. El sistema permite a comerciantes y representantes realizar pedidos complejos con personalización de acabados, telas y cuerdas, garantizando que la producción reciba especificaciones exactas. Incluye reglas comerciales complejas para el cálculo de impuestos y logística.",
        objectives: [
          "Automatizar el proceso de pedidos B2B.",
          "Permitir la personalización visual de los productos en el pedido.",
          "Integrar directamente con el ERP de la fábrica."
        ],
        results: [
          "Eliminación de errores de especificación en la producción.",
          "Agilidad en el procesamiento de pedidos de gran volumen.",
          "Mejora en la experiencia de compra de los franquiciados."
        ]
      }
    }
  },
  {
    id: 4,
    slug: "callsoft",
    image: "/image/callsoft.png",
    link: "https://callsoft.softlineinfo.com.br/",
    technologies: ["Next.js", "TypeScript", "Node.js", "SQL Server"],
    translations: {
      pt: {
        title: "Callsoft - CRM & Vendas",
        category: "Sistemas ERP",
        tags: ["CRM", "Telefonia", "Vendas"],
        description: "CRM integrado com telefonia para times de vendas de alta performance.",
        fullDescription: "Callsoft é uma solução que une CRM e telefonia VoIP. Focado em times de vendas, ele permite discagem automática, gravação de chamadas e registro automático de interações no histórico do cliente. O dashboard em tempo real permite que gestores acompanhem métricas de ligação e conversão.",
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
      en: {
        title: "Callsoft - CRM & Sales",
        category: "ERP Systems",
        tags: ["CRM", "Telephony", "Sales"],
        description: "CRM integrated with telephony for high-performance sales teams.",
        fullDescription: "Callsoft is a solution that combines CRM and VoIP telephony. Focused on sales teams, it enables automatic dialing, call recording, and automatic logging of interactions in the client history. The real-time dashboard allows managers to track call metrics and conversions.",
        objectives: [
          "Integrate telephony and CRM into a single screen.",
          "Increase the volume of daily calls per salesperson.",
          "Provide detailed call performance metrics."
        ],
        results: [
          "2x increase in daily contacts.",
          "Improvement in lead conversion rate.",
          "Total control over the telesales operation."
        ]
      },
      es: {
        title: "Callsoft - CRM y Ventas",
        category: "Sistemas ERP",
        tags: ["CRM", "Telefonía", "Ventas"],
        description: "CRM integrado con telefonía para equipos de ventas de alto rendimiento.",
        fullDescription: "Callsoft es una solución que une CRM y telefonía VoIP. Enfocado en equipos de ventas, permite marcación automática, grabación de llamadas y registro automático de interacciones en el historial del cliente. El panel en tiempo real permite a los gerentes realizar un seguimiento de las métricas de llamadas y conversiones.",
        objectives: [
          "Integrar telefonía y CRM en una sola pantalla.",
          "Aumentar el volumen de llamadas diarias por vendedor.",
          "Proporcionar métricas detalladas de rendimiento de llamadas."
        ],
        results: [
          "Aumento de 2 veces en el número de contactos diarios.",
          "Mejora en la tasa de conversión de leads.",
          "Control total sobre la operación de televentas."
        ]
      }
    }
  },
  {
    id: 5,
    slug: "ssa-kimonos",
    image: "/image/ssa.png",
    link: "https://ssakimonos.com.br",
    technologies: ["Next.js", "TypeScript", "Node.js", "SQL Server"],
    translations: {
      pt: {
        title: "SSA Kimonos - Loja Virtual",
        category: "E-commerce",
        tags: ["E-commerce", "Esportes", "Varejo"],
        description: "E-commerce especializado em artigos esportivos e artes marciais.",
        fullDescription: "Loja virtual moderna e responsiva para a SSA Kimonos. O projeto foca em alta conversão e experiência do usuário mobile. Implementamos recursos de vitrine dinâmica, recuperação de carrinho e integração com gateways de pagamento e logística otimizados para o varejo brasileiro.",
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
      en: {
        title: "SSA Kimonos - E-commerce",
        category: "E-commerce",
        tags: ["E-commerce", "Sports", "Retail"],
        description: "Online store specialized in sports goods and martial arts.",
        fullDescription: "A modern and responsive online store for SSA Kimonos. The project focuses on high conversion and mobile user experience. We implemented dynamic show windows, cart recovery, and integration with payment gateways and logistics optimized for the Brazilian retail market.",
        objectives: [
          "Create a mobile-first shopping experience.",
          "Optimize the store's loading speed.",
          "Increase checkout conversion rate."
        ],
        results: [
          "150% growth in online sales in the first year.",
          "Significant improvement in SEO and organic traffic.",
          "Fluid shopping experience on any device."
        ]
      },
      es: {
        title: "SSA Kimonos - Tienda Virtual",
        category: "E-commerce",
        tags: ["E-commerce", "Deportes", "Minorista"],
        description: "Tienda online especializada en artículos deportivos y artes marciales.",
        fullDescription: "Tienda virtual moderna y responsiva para SSA Kimonos. El proyecto se centra en alta conversión y experiencia de usuario móvil. Implementamos escaparates dinámicos, recuperación de carritos e integración con pasarelas de pago y logística optimizadas para el mercado minorista brasileño.",
        objectives: [
          "Crear una experiencia de compra mobile-first.",
          "Optimizar la velocidad de carga de la tienda.",
          "Aumentar la tasa de conversión de pago."
        ],
        results: [
          "Crecimiento del 150% en ventas online en el primer año.",
          "Mejora significativa en SEO y tráfico orgánico.",
          "Experiencia de compra fluida en cualquier dispositivo."
        ]
      }
    }
  },
  {
    id: 6,
    slug: "tintas-barros",
    image: "/image/placeholder-tech.svg",
    link: "https://tintasbarros.com.br",
    technologies: ["Next.js", "TypeScript", "SQL Server"],
    translations: {
      pt: {
        title: "Tintas Barros - Gestão Corporativa",
        category: "Sistemas ERP",
        tags: ["Indústria", "Tintas", "ERP"],
        description: "Sistema de gestão integrado para indústria e varejo de tintas.",
        fullDescription: "ERP customizado para a Tintas Barros, cobrindo desde a formulação de tintas na fábrica até a venda no balcão. O sistema gerencia lotes, validade, controle de estoque químico e integração fiscal, atendendo às especificidades do setor de tintas e revestimentos.",
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
      en: {
        title: "Tintas Barros - Corporate Management",
        category: "ERP Systems",
        tags: ["Industry", "Paints", "ERP"],
        description: "Integrated management system for paint manufacturing and retail.",
        fullDescription: "Customized ERP for Tintas Barros, covering everything from paint formulation in the factory to over-the-counter sales. The system manages batches, expiration dates, chemical stock control, and fiscal integration, meeting the specific needs of the paint and coating industry.",
        objectives: [
          "Integrate factory floor and points of sale.",
          "Control formulations and production costs.",
          "Manage stock across multiple points of sale in real time."
        ],
        results: [
          "Reduction of raw material waste.",
          "Precise and automated tax control.",
          "Unified view of performance across all branches."
        ]
      },
      es: {
        title: "Tintas Barros - Gestión Corporativa",
        category: "Sistemas ERP",
        tags: ["Industria", "Pinturas", "ERP"],
        description: "Sistema integrado de gestión para la industria y comercio minorista de pinturas.",
        fullDescription: "ERP a medida para Tintas Barros, que cubre desde la formulación de pinturas en fábrica hasta la venta en mostrador. El sistema gestiona lotes, fechas de vencimiento, control de existencias químicas e integración fiscal, respondiendo a las especificidades del sector de pinturas y revestimientos.",
        objectives: [
          "Integrar la planta de producción y los puntos de venta.",
          "Controlar formulaciones y costes de producción.",
          "Gestionar stock de múltiples puntos de venta en tiempo real."
        ],
        results: [
          "Reducción del desperdicio de materias primas.",
          "Control fiscal preciso y automatizado.",
          "Visión unificada del desempeño de todas las sucursales."
        ]
      }
    }
  },
  {
    id: 7,
    slug: "rh-gestor",
    image: "/image/placeholder-tech.svg",
    link: "https://rhgestor.softlineinfo.com.br/",
    technologies: ["Next.js", "TypeScript", "Node.js", "SQL Server"],
    translations: {
      pt: {
        title: "RH Gestor - Plataforma de RH",
        category: "Sistemas ERP",
        tags: ["RH", "Gestão de Pessoas", "SaaS"],
        description: "Plataforma completa para gestão estratégica de Recursos Humanos.",
        fullDescription: "RH Gestor transforma o departamento pessoal em RH estratégico. A plataforma automatiza processos de recrutamento e seleção, avaliação de desempenho, pesquisa de clima e gestão de treinamentos. Com dashboards intuitivos, apoia a tomada de decisão baseada em dados sobre o capital humano.",
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
      en: {
        title: "RH Gestor - HR Platform",
        category: "ERP Systems",
        tags: ["HR", "People Management", "SaaS"],
        description: "Complete platform for strategic Human Resources management.",
        fullDescription: "RH Gestor transforms the personnel department into a strategic HR asset. The platform automates recruitment and selection processes, performance evaluations, climate surveys, and training management. With intuitive dashboards, it supports data-driven decision-making about human capital.",
        objectives: [
          "Automate manual HR processes.",
          "Centralize employee data.",
          "Facilitate performance reviews and feedback."
        ],
        results: [
          "60% reduction in vacancy closing times.",
          "Improved talent retention through structured feedback.",
          "Elimination of spreadsheets for training management."
        ]
      },
      es: {
        title: "RH Gestor - Plataforma de RRHH",
        category: "Sistemas ERP",
        tags: ["RRHH", "Gestión de Personas", "SaaS"],
        description: "Plataforma completa para la gestión estratégica de Recursos Humanos.",
        fullDescription: "RH Gestor transforma el departamento de personal en un RRHH estratégico. La plataforma automatiza los procesos de reclutamiento y selección, evaluación del desempeño, encuestas de clima y gestión de la capacitación. Con paneles intuitivos, apoya la toma de decisiones basada en datos sobre el capital humano.",
        objectives: [
          "Automatizar procesos manuales de RRHH.",
          "Centralizar los datos de los empleados.",
          "Facilitar la evaluación del desempeño y retroalimentación."
        ],
        results: [
          "Reducción del 60% en el tiempo de cierre de vacantes.",
          "Mejora en la retención de talento a través de comentarios estructurados.",
          "Eliminación de hojas de cálculo para la gestión de capacitaciones."
        ]
      }
    }
  },
  {
    id: 8,
    slug: "facial",
    image: "/image/facial.png",
    link: "https://facial.softlineinfo.com.br/",
    technologies: ["Node.js", "TypeScript", "SQL Server"],
    translations: {
      pt: {
        title: "Facial - Gestor de Ponto",
        category: "Sistemas ERP",
        tags: ["Gestão", "Ponto", "SaaS"],
        description: "Sistema de controle de ponto eletrônico com reconhecimento facial.",
        fullDescription: "Facial é um sistema moderno de controle de jornada que utiliza reconhecimento facial para garantir a autenticidade das marcações de ponto. Totalmente compatível com a Portaria 671 do MTE, oferece geolocalização, aplicativo para colaboradores e área do gestor para tratamento de ponto e relatórios.",
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
      en: {
        title: "Facial - Time Tracking",
        category: "ERP Systems",
        tags: ["Management", "Timeclock", "SaaS"],
        description: "Electronic time clock system with facial recognition.",
        fullDescription: "Facial is a modern time tracking system that uses facial recognition to guarantee the authenticity of time logs. Fully compatible with Brazilian labor laws (MTE Ordinance 671), it offers geolocation, an app for employees, and a management dashboard for timesheet corrections and reporting.",
        objectives: [
          "Eliminate fraud in time clock records.",
          "Facilitate time clock logs for remote or field teams.",
          "Automate overtime and hours-bank calculations."
        ],
        results: [
          "Full legal security for corporate clients.",
          "Drastic reduction in timesheet closing times.",
          "High ease-of-use ratings from employees."
        ]
      },
      es: {
        title: "Facial - Control de Asistencia",
        category: "Sistemas ERP",
        tags: ["Gestión", "Asistencia", "SaaS"],
        description: "Sistema electrónico de control de asistencia con reconocimiento facial.",
        fullDescription: "Facial es un moderno sistema de control de asistencia que utiliza reconocimiento facial para garantizar la autenticidad del marcaje. Totalmente compatible con las leyes laborales, ofrece geolocalización, app para colaboradores y panel de gestión para corrección de incidencias y reportes.",
        objectives: [
          "Eliminar fraudes en el registro de asistencia.",
          "Facilitar el marcaje para equipos externos.",
          "Automatizar el cálculo de horas extras y banco de horas."
        ],
        results: [
          "Seguridad jurídica total para las empresas clientes.",
          "Reducción drástica del tiempo de cierre de la hoja de asistencia.",
          "Facilidad de uso elogiada por los empleados."
        ]
      }
    }
  },
  {
    id: 9,
    slug: "nfse",
    image: "/image/nfse.png",
    link: "https://nfse.softlineinfo.com.br/",
    technologies: ["Node.js", "TypeScript", "SQL Server"],
    translations: {
      pt: {
        title: "NFSe - Geração de Notas Fiscais",
        category: "Sistemas ERP",
        tags: ["Financeiro", "Fiscal", "Notas Fiscais"],
        description: "API e interface para emissão automatizada de Notas Fiscais de Serviço.",
        fullDescription: "Solução robusta para emissão de NFS-e em centenas de prefeituras brasileiras. O sistema abstrai a complexidade dos diferentes padrões municipais, oferecendo uma interface única e uma API simples para que outros softwares possam emitir notas fiscais automaticamente. Inclui validação de esquemas e tratamento inteligente de erros.",
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
      },
      en: {
        title: "NFSe - Tax Invoice Generator",
        category: "ERP Systems",
        tags: ["Financial", "Tax", "Invoices"],
        description: "API and interface for automated service tax invoice (NFS-e) issuing.",
        fullDescription: "A robust solution for issuing service tax invoices (NFS-e) in hundreds of Brazilian municipalities. The system abstracts the complexity of different municipal patterns, providing a unified interface and a simple API for other software to issue invoices automatically. Includes schema validation and smart error handling.",
        objectives: [
          "Unify NFS-e issuing for multiple municipalities.",
          "Ensure high availability and performance in issuing.",
          "Simplify tax integration for developers."
        ],
        results: [
          "Coverage of more than 500 Brazilian municipalities.",
          "Issuing thousands of invoices per day with high stability.",
          "Reduction of compliance costs for partners."
        ]
      },
      es: {
        title: "NFSe - Emisión de Facturas Fiscales",
        category: "Sistemas ERP",
        tags: ["Finanzas", "Fiscal", "Facturas"],
        description: "API e interfaz para la emisión automatizada de Facturas de Servicios (NFS-e).",
        fullDescription: "Solución robusta para la emisión de facturas de servicio (NFS-e) en cientos de municipios brasileños. El sistema simplifica la complejidad de los diferentes estándares municipales, ofreciendo una interfaz única y una API simple para que otros software puedan emitir facturas automáticamente. Incluye validación de esquemas y gestión inteligente de errores.",
        objectives: [
          "Unificar la emisión de NFS-e para múltiples municipios.",
          "Garantizar alta disponibilidad y rendimiento en la emisión.",
          "Simplificar la integración fiscal para desarrolladores."
        ],
        results: [
          "Cobertura de más de 500 municipios brasileños.",
          "Emisión de miles de facturas al día con gran estabilidad.",
          "Reducción de costos de cumplimiento fiscal para los socios."
        ]
      }
    }
  }
]