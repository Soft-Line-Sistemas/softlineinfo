"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type Language = "pt" | "en" | "es"

interface LanguageContextProps {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Header
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "nav.brand": "Soft Line Sistemas",
    "nav.subtitle": "Consultoria em Sistemas de Informação",
    
    // Hero
    "hero.badge": "Soft Line Sistemas • Fábrica de Software",
    "hero.title1": "Transformamos Ideias em",
    "hero.title2": "Software Real",
    "hero.desc": "Do planejamento ao lançamento, desenvolvemos soluções tecnológicas sob medida que impulsionam o crescimento da sua empresa.",
    "hero.btn.start": "Iniciar Projeto",
    "hero.btn.cases": "Nossos Cases",
    "hero.benefit1": "Metodologia Ágil",
    "hero.benefit2": "Alta Performance",
    "hero.benefit3": "Escalabilidade",
    
    // Lifecycle steps
    "step.1.title": "Planejamento",
    "step.1.desc": "Análise estratégica",
    "step.1.details": "Mapeamento completo de requisitos, definição de arquitetura técnica e estratégia de produto para garantir escalabilidade e segurança desde o primeiro dia.",
    "step.2.title": "Criação",
    "step.2.desc": "Design & Prototipagem",
    "step.2.details": "Desenvolvimento de interfaces intuitivas e focadas na experiência do usuário (UX/UI), com protótipos interativos antes de qualquer código.",
    "step.3.title": "Desenvolvimento",
    "step.3.desc": "Engenharia de Software",
    "step.3.details": "Codificação seguindo padrões Clean Code, testes automatizados e integração contínua para entregar software robusto e livre de bugs.",
    "step.4.title": "Lançamento",
    "step.4.desc": "Deploy & Monitoramento",
    "step.4.details": "Infraestrutura em nuvem otimizada, pipelines de deploy automatizados e monitoramento em tempo real para garantir alta disponibilidade.",

    // About
    "about.badge": "Sobre a Soft Line",
    "about.heading1": "Engenharia de",
    "about.heading2": "software",
    "about.heading3": "que",
    "about.heading4": "escala seu negócio",
    "about.desc": "Não somos apenas desenvolvedores, somos parceiros estratégicos. Criamos ecossistemas digitais robustos, do MVP ao Enterprise, focados em performance, segurança e usabilidade.",
    "about.dna.title": "Nosso DNA",
    "about.dna.desc": "Codificamos o futuro das empresas através de arquiteturas modernas, metodologias ágeis e uma obsessão pela qualidade do código e da experiência do usuário.",
    
    "about.feat1.title": "Desenvolvimento Sob Medida",
    "about.feat1.desc": "Transformamos sua visão em software de alta performance. Seja uma plataforma SaaS, um aplicativo mobile ou uma integração complexa, entregamos soluções que se adaptam perfeitamente aos seus processos de negócio.",
    "about.feat2.title": "ERP Enterprise",
    "about.feat2.desc": "Nosso sistema de gestão robusto e flexível, projetado para atender empresas de todos os ramos. Centralize operações, finanças e estoque em uma única plataforma escalável.",
    "about.feat3.title": "Tecnologia de Ponta",
    "about.feat3.desc": "Utilizamos stack moderna (Next.js, React, Node.js, Cloud) para garantir performance, segurança e longevidade do seu software.",
    "about.feat4.title": "Inovação como Serviço",
    "about.feat4.desc": "Não entregamos apenas código, entregamos inteligência de negócio. Nossa equipe atua como um braço de inovação dentro da sua empresa.",

    // Portfolio
    "portfolio.badge": "Portfólio de Inovação",
    "portfolio.title": "Software real que resolve problemas reais.",
    "portfolio.learnMore": "Saiba Mais",
    "portfolio.viewOnline": "Ver Online",
    "portfolio.viewAll": "Ver Todos os Projetos",
    "portfolio.filter.all": "Todos",
    "portfolio.filter.erp": "Sistemas ERP",
    "portfolio.filter.saas": "SaaS",
    "portfolio.filter.ecommerce": "E-commerce",
    "portfolio.filter.logistics": "Logística",
    "portfolio.filter.finance": "Finanças",
    
    // Project Detail Dialog / Tabs
    "project.back": "Voltar para Projetos",
    "project.about": "Sobre o Projeto",
    "project.objectives": "Objetivos",
    "project.results": "Resultados",
    "project.tech": "Tecnologias Utilizadas",
    "project.visit": "Visitar Projeto Online",
    "project.metrics.impact": "Impacto Comprovado",
    "project.tabs.overview": "Visão Geral",
    "project.tabs.goals": "Objetivos",
    "project.tabs.results": "Resultados",
    "project.tabs.tech": "Tecnologias",

    // Contact
    "contact.title": "Vamos Conversar?",
    "contact.desc": "Estamos prontos para entender seus desafios e oferecer a melhor solução tecnológica. Preencha o formulário ou utilize nossos canais diretos para um atendimento ágil.",
    "contact.headquarters": "Nossa Sede",
    "contact.maps": "Abrir no Maps",
    "contact.uber": "Ir de Uber",
    "contact.hours": "Atendimento",
    "contact.hours.detail": "Seg-Sex, 8h às 18h",
    "contact.email": "Email Corporativo",
    "contact.email.detail": "Resposta em até 24h",
    "contact.form.title": "Envie uma Mensagem",
    "contact.form.desc": "Preencha os dados abaixo e nosso time comercial entrará em contato.",
    "contact.form.name": "Nome",
    "contact.form.name.placeholder": "Seu nome",
    "contact.form.phone": "Telefone",
    "contact.form.phone.placeholder": "(00) 00000-0000",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "seu@email.com",
    "contact.form.company": "Empresa (Opcional)",
    "contact.form.company.placeholder": "Nome da empresa",
    "contact.form.subject": "Assunto",
    "contact.form.subject.placeholder": "Sobre o que vamos falar?",
    "contact.form.message": "Mensagem",
    "contact.form.message.placeholder": "Conte-nos mais sobre seu projeto ou necessidade...",
    "contact.form.submit": "Enviar Mensagem",
    "contact.form.submitting": "Enviando...",
    
    // Toasts and Form validation
    "contact.validation.name": "O nome deve ter pelo menos 2 caracteres.",
    "contact.validation.email": "Por favor, insira um email válido.",
    "contact.validation.phone": "O telefone deve ter pelo menos 10 caracteres.",
    "contact.validation.subject": "O assunto deve ter pelo menos 5 caracteres.",
    "contact.validation.message": "A mensagem deve ter pelo menos 10 caracteres.",
    "contact.toast.success": "Mensagem enviada com sucesso!",
    "contact.toast.success.desc": "Entraremos em contato em breve.",
    "contact.toast.error": "Erro ao enviar mensagem",
    "contact.toast.error.desc": "Tente novamente mais tarde ou entre em contato pelo WhatsApp.",

    // Footer
    "footer.desc": "Sua Fábrica de Software parceira. Desenvolvemos soluções digitais escaláveis e sob medida para impulsionar a inovação no seu negócio.",
    "footer.services": "Serviços",
    "footer.srv.factory": "Fábrica de Software",
    "footer.srv.erp": "ERP Enterprise",
    "footer.srv.dev": "Desenvolvimento Web & Mobile",
    "footer.srv.ecommerce": "E-commerce B2B",
    "footer.srv.consulting": "Consultoria Tecnológica",
    "footer.newsletter.title": "Fique Atualizado",
    "footer.newsletter.desc": "Receba insights sobre tecnologia e inovação.",
    "footer.newsletter.placeholder": "Seu e-mail corporativo",
    "footer.newsletter.btn": "Inscrever-se",
    "footer.rights": "Todos os direitos reservados.",
    "footer.privacy": "Política de Privacidade",
    "footer.terms": "Termos de Uso",
    
    // Tech Matrix
    "tech.matrix.title": "Nossa Stack Tecnológica",
    "tech.matrix.subtitle": "Utilizamos as tecnologias mais robustas, seguras e modernas do mercado para desenvolver soluções sob medida de alta escalabilidade.",
    "tech.matrix.hover": "Passe o mouse ou toque em uma tecnologia para ver o porquê de a utilizarmos",
    "tech.next.why": "Por que usar Next.js?",
    "tech.next.desc": "É o principal framework React do mercado. Excelente para SEO, renderização ultrarrápida no servidor (SSR), otimização automática de imagens e carregamento instantâneo de páginas.",
    "tech.python.why": "Por que usar Python?",
    "tech.python.desc": "Uma das linguagens mais populares e versáteis do mundo. Ideal para inteligência artificial, processamento de dados robusto, scripts automatizados e APIs limpas e sustentáveis.",
    "tech.django.why": "Por que usar Django?",
    "tech.django.desc": "Framework Python focado em segurança e desenvolvimento ágil. Possui arquitetura robusta 'batteries-included' ideal para sistemas ERP e SaaS de nível corporativo complexos.",
    "tech.sqlserver.why": "Por que usar SQL Server?",
    "tech.sqlserver.desc": "Banco de dados relacional de alto desempenho da Microsoft. Oferece segurança de nível governamental, excelente integridade transacional e suporte a milhões de registros com estabilidade.",
    "tech.node.why": "Por que usar Node.js?",
    "tech.node.desc": "Ambiente Javascript rápido baseado na engine V8. Perfeito para microsserviços escaláveis, APIs de tempo real e alta concorrência de requisições por segundo.",
    
    // Parallax
    "parallax.title": "Pronto para impulsionar a inovação no seu negócio?",
    "parallax.desc": "Fale com nossos consultores de tecnologia e desenhe a solução de software ideal para sua empresa.",
    "parallax.btn": "Falar com Especialista"
  },
  en: {
    // Header
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.brand": "Soft Line Sistemas",
    "nav.subtitle": "Information Systems Consulting",
    
    // Hero
    "hero.badge": "Soft Line Sistemas • Software House",
    "hero.title1": "We Transform Ideas into",
    "hero.title2": "Real Software",
    "hero.desc": "From planning to launch, we develop custom technological solutions that drive your company's growth.",
    "hero.btn.start": "Start Project",
    "hero.btn.cases": "Our Cases",
    "hero.benefit1": "Agile Methodology",
    "hero.benefit2": "High Performance",
    "hero.benefit3": "Scalability",
    
    // Lifecycle steps
    "step.1.title": "Planning",
    "step.1.desc": "Strategic analysis",
    "step.1.details": "Complete mapping of requirements, definition of technical architecture and product strategy to ensure scalability and security from day one.",
    "step.2.title": "Creation",
    "step.2.desc": "Design & Prototyping",
    "step.2.details": "Development of intuitive interfaces focused on user experience (UX/UI), with interactive prototypes before any code is written.",
    "step.3.title": "Development",
    "step.3.desc": "Software Engineering",
    "step.3.details": "Coding following Clean Code standards, automated testing and continuous integration to deliver robust, bug-free software.",
    "step.4.title": "Launch",
    "step.4.desc": "Deploy & Monitoring",
    "step.4.details": "Optimized cloud infrastructure, automated deployment pipelines and real-time monitoring to ensure high availability.",

    // About
    "about.badge": "About Soft Line",
    "about.heading1": "Software",
    "about.heading2": "engineering",
    "about.heading3": "that",
    "about.heading4": "scales your business",
    "about.desc": "We are not just developers, we are strategic partners. We create robust digital ecosystems, from MVP to Enterprise, focused on performance, security, and usability.",
    "about.dna.title": "Our DNA",
    "about.dna.desc": "We code the future of companies through modern architectures, agile methodologies, and an obsession with code quality and user experience.",
    
    "about.feat1.title": "Custom Development",
    "about.feat1.desc": "We transform your vision into high-performance software. Whether it's a SaaS platform, a mobile app, or a complex integration, we deliver solutions that adapt perfectly to your business processes.",
    "about.feat2.title": "Enterprise ERP",
    "about.feat2.desc": "Our robust and flexible management system, designed to serve businesses in all industries. Centralize operations, finance, and inventory in a single scalable platform.",
    "about.feat3.title": "State-of-the-Art Technology",
    "about.feat3.desc": "We use a modern stack (Next.js, React, Node.js, Cloud) to ensure performance, security, and longevity for your software.",
    "about.feat4.title": "Innovation as a Service",
    "about.feat4.desc": "We don't just deliver code, we deliver business intelligence. Our team acts as an innovation arm within your company.",

    // Portfolio
    "portfolio.badge": "Innovation Portfolio",
    "portfolio.title": "Real software that solves real problems.",
    "portfolio.learnMore": "Learn More",
    "portfolio.viewOnline": "View Online",
    "portfolio.viewAll": "View All Projects",
    "portfolio.filter.all": "All",
    "portfolio.filter.erp": "ERP Systems",
    "portfolio.filter.saas": "SaaS",
    "portfolio.filter.ecommerce": "E-commerce",
    "portfolio.filter.logistics": "Logistics",
    "portfolio.filter.finance": "Finance",
    
    // Project Detail Dialog / Tabs
    "project.back": "Back to Projects",
    "project.about": "About the Project",
    "project.objectives": "Objectives",
    "project.results": "Results",
    "project.tech": "Technologies Used",
    "project.visit": "Visit Project Online",
    "project.metrics.impact": "Proven Impact",
    "project.tabs.overview": "Overview",
    "project.tabs.goals": "Objectives",
    "project.tabs.results": "Results",
    "project.tabs.tech": "Technologies",

    // Contact
    "contact.title": "Let's Talk?",
    "contact.desc": "We are ready to understand your challenges and offer the best technological solution. Fill out the form or use our direct channels for agile service.",
    "contact.headquarters": "Our Headquarters",
    "contact.maps": "Open in Maps",
    "contact.uber": "Go with Uber",
    "contact.hours": "Customer Service",
    "contact.hours.detail": "Mon-Fri, 8am to 6pm",
    "contact.email": "Corporate Email",
    "contact.email.detail": "Response within 24h",
    "contact.form.title": "Send a Message",
    "contact.form.desc": "Fill in the details below and our sales team will contact you.",
    "contact.form.name": "Name",
    "contact.form.name.placeholder": "Your name",
    "contact.form.phone": "Phone",
    "contact.form.phone.placeholder": "(00) 00000-0000",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "your@email.com",
    "contact.form.company": "Company (Optional)",
    "contact.form.company.placeholder": "Company name",
    "contact.form.subject": "Subject",
    "contact.form.subject.placeholder": "What are we going to talk about?",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Tell us more about your project or needs...",
    "contact.form.submit": "Send Message",
    "contact.form.submitting": "Sending...",
    
    // Toasts and Form validation
    "contact.validation.name": "Name must be at least 2 characters.",
    "contact.validation.email": "Please enter a valid email.",
    "contact.validation.phone": "Phone must be at least 10 characters.",
    "contact.validation.subject": "Subject must be at least 5 characters.",
    "contact.validation.message": "Message must be at least 10 characters.",
    "contact.toast.success": "Message sent successfully!",
    "contact.toast.success.desc": "We will contact you shortly.",
    "contact.toast.error": "Error sending message",
    "contact.toast.error.desc": "Please try again later or contact us via WhatsApp.",

    // Footer
    "footer.desc": "Your partner Software House. We develop scalable and customized digital solutions to drive innovation in your business.",
    "footer.services": "Services",
    "footer.srv.factory": "Software House",
    "footer.srv.erp": "Enterprise ERP",
    "footer.srv.dev": "Web & Mobile Development",
    "footer.srv.ecommerce": "B2B E-commerce",
    "footer.srv.consulting": "Tech Consulting",
    "footer.newsletter.title": "Stay Updated",
    "footer.newsletter.desc": "Receive insights on technology and innovation.",
    "footer.newsletter.placeholder": "Your corporate email",
    "footer.newsletter.btn": "Subscribe",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    
    // Tech Matrix
    "tech.matrix.title": "Our Tech Stack",
    "tech.matrix.subtitle": "We use the most robust, secure, and modern technologies in the market to develop highly scalable custom solutions.",
    "tech.matrix.hover": "Hover or tap on a technology to see why we use it",
    "tech.next.why": "Why Next.js?",
    "tech.next.desc": "It is the leading React framework in the market. Excellent for SEO, ultra-fast server-side rendering (SSR), automatic image optimization, and instant page loading.",
    "tech.python.why": "Why Python?",
    "tech.python.desc": "One of the most popular and versatile languages in the world. Ideal for artificial intelligence, robust data processing, automated scripting, and clean, sustainable APIs.",
    "tech.django.why": "Why Django?",
    "tech.django.desc": "Python framework focused on security and agile development. It features a robust 'batteries-included' architecture ideal for complex enterprise-level ERP and SaaS systems.",
    "tech.sqlserver.why": "Why SQL Server?",
    "tech.sqlserver.desc": "High-performance relational database from Microsoft. Offers government-grade security, excellent transactional integrity, and stable support for millions of records.",
    "tech.node.why": "Why Node.js?",
    "tech.node.desc": "Fast Javascript environment based on the V8 engine. Perfect for scalable microservices, real-time APIs, and high-concurrency requests per second.",
    
    // Parallax
    "parallax.title": "Ready to drive innovation in your business?",
    "parallax.desc": "Talk to our technology consultants and design the ideal software solution for your company.",
    "parallax.btn": "Talk to an Expert"
  },
  es: {
    // Header
    "nav.about": "Sobre",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.brand": "Soft Line Sistemas",
    "nav.subtitle": "Consultoría en Sistemas de Información",
    
    // Hero
    "hero.badge": "Soft Line Sistemas • Fábrica de Software",
    "hero.title1": "Transformamos Ideas en",
    "hero.title2": "Software Real",
    "hero.desc": "Desde la planificación hasta el lanzamiento, desarrollamos soluciones tecnológicas a medida que impulsan el crecimiento de su empresa.",
    "hero.btn.start": "Iniciar Proyecto",
    "hero.btn.cases": "Nuestros Cases",
    "hero.benefit1": "Metodología Ágil",
    "hero.benefit2": "Alto Rendimiento",
    "hero.benefit3": "Escalabilidad",
    
    // Lifecycle steps
    "step.1.title": "Planificación",
    "step.1.desc": "Análisis estratégico",
    "step.1.details": "Mapeo completo de requisitos, definición de arquitectura técnica y estrategia de producto para garantizar escalabilidad y seguridad desde el primer día.",
    "step.2.title": "Creación",
    "step.2.desc": "Diseño y Prototipado",
    "step.2.details": "Desarrollo de interfaces intuitivas y enfocadas en la experiencia del usuario (UX/UI), con prototipos interactivos antes de cualquier código.",
    "step.3.title": "Desarrollo",
    "step.3.desc": "Ingeniería de Software",
    "step.3.details": "Codificación siguiendo estándares de Clean Code, pruebas automatizadas e integración continua para entregar software robusto y libre de errores.",
    "step.4.title": "Lanzamiento",
    "step.4.desc": "Despliegue y Monitoreo",
    "step.4.details": "Infraestructura en la nube optimizada, pipelines de despliegue automatizados y monitoreo en tiempo real para garantizar alta disponibilidad.",

    // About
    "about.badge": "Sobre Soft Line",
    "about.heading1": "Ingeniería de",
    "about.heading2": "software",
    "about.heading3": "que",
    "about.heading4": "escala su negocio",
    "about.desc": "No somos solo desarrolladores, somos socios estratégicos. Creamos ecosistemas digitales robustos, desde el MVP hasta el Enterprise, enfocados en rendimiento, seguridad y usabilidad.",
    "about.dna.title": "Nuestro DNA",
    "about.dna.desc": "Codificamos el futuro de las empresas a través de arquitecturas modernas, metodologías ágiles y una obsesión por la calidad del código y la experiencia del usuario.",
    
    "about.feat1.title": "Desarrollo a Medida",
    "about.feat1.desc": "Transformamos su visión en software de alto rendimiento. Ya sea una plataforma SaaS, una aplicación móvil o una integración compleja, entregamos soluciones que se adaptan perfectamente a sus procesos de negocio.",
    "about.feat2.title": "ERP Enterprise",
    "about.feat2.desc": "Nuestro sistema de gestión robusto y flexible, diseñado para atender a empresas de todos los sectores. Centralice operaciones, finanzas y stock en una única plataforma escalable.",
    "about.feat3.title": "Tecnología de Punta",
    "about.feat3.desc": "Utilizamos una pila moderna (Next.js, React, Node.js, Cloud) para garantizar el rendimiento, la seguridad y la longevidad de su software.",
    "about.feat4.title": "Innovación como Servicio",
    "about.feat4.desc": "No entregamos solo código, entregamos inteligencia de negocio. Nuestro equipo actúa como un brazo de innovación dentro de su empresa.",

    // Portfolio
    "portfolio.badge": "Portafolio de Innovación",
    "portfolio.title": "Software real que resuelve problemas reales.",
    "portfolio.learnMore": "Saber Más",
    "portfolio.viewOnline": "Ver en Línea",
    "portfolio.viewAll": "Ver Todos los Proyectos",
    "portfolio.filter.all": "Todos",
    "portfolio.filter.erp": "Sistemas ERP",
    "portfolio.filter.saas": "SaaS",
    "portfolio.filter.ecommerce": "E-commerce",
    "portfolio.filter.logistics": "Logística",
    "portfolio.filter.finance": "Finanzas",
    
    // Project Detail Dialog / Tabs
    "project.back": "Volver a Proyectos",
    "project.about": "Sobre el Proyecto",
    "project.objectives": "Objetivos",
    "project.results": "Resultados",
    "project.tech": "Tecnologías Utilizadas",
    "project.visit": "Visitar Proyecto en Línea",
    "project.metrics.impact": "Impacto Comprobado",
    "project.tabs.overview": "Visión General",
    "project.tabs.goals": "Objetivos",
    "project.tabs.results": "Resultados",
    "project.tabs.tech": "Tecnologías",

    // Contact
    "contact.title": "¿Hablamos?",
    "contact.desc": "Estamos listos para entender sus desafíos y ofrecer la mejor solución tecnológica. Complete el formulario o use nuestros canales directos para un servicio ágil.",
    "contact.headquarters": "Nuestra Sede",
    "contact.maps": "Abrir en Maps",
    "contact.uber": "Ir en Uber",
    "contact.hours": "Atención",
    "contact.hours.detail": "Lun-Vie, 8h a 18h",
    "contact.email": "Correo Corporativo",
    "contact.email.detail": "Respuesta en hasta 24h",
    "contact.form.title": "Envíe un Mensaje",
    "contact.form.desc": "Complete los datos a continuación y nuestro equipo comercial se pondrá en contacto.",
    "contact.form.name": "Nombre",
    "contact.form.name.placeholder": "Su nombre",
    "contact.form.phone": "Teléfono",
    "contact.form.phone.placeholder": "(00) 00000-0000",
    "contact.form.email": "Correo electrónico",
    "contact.form.email.placeholder": "correo@email.com",
    "contact.form.company": "Empresa (Opcional)",
    "contact.form.company.placeholder": "Nombre de la empresa",
    "contact.form.subject": "Asunto",
    "contact.form.subject.placeholder": "¿De qué vamos a hablar?",
    "contact.form.message": "Mensaje",
    "contact.form.message.placeholder": "Cuéntenos más sobre su proyecto o necesidad...",
    "contact.form.submit": "Enviar Mensaje",
    "contact.form.submitting": "Enviando...",
    
    // Toasts and Form validation
    "contact.validation.name": "El nombre debe tener al menos 2 caracteres.",
    "contact.validation.email": "Por favor, introduzca un correo electrónico válido.",
    "contact.validation.phone": "El teléfono debe tener al menos 10 caracteres.",
    "contact.validation.subject": "El asunto debe tener al menos 5 caracteres.",
    "contact.validation.message": "El mensaje debe tener al menos 10 caracteres.",
    "contact.toast.success": "¡Mensaje enviado con éxito!",
    "contact.toast.success.desc": "Nos pondremos en contacto pronto.",
    "contact.toast.error": "Error al enviar mensaje",
    "contact.toast.error.desc": "Inténtelo de nuevo más tarde o póngase en contacto a través de WhatsApp.",

    // Footer
    "footer.desc": "Su Fábrica de Software asociada. Desarrollamos soluciones digitales escalables y a medida para impulsar la innovación en su negocio.",
    "footer.services": "Servicios",
    "footer.srv.factory": "Fábrica de Software",
    "footer.srv.erp": "ERP Enterprise",
    "footer.srv.dev": "Desarrollo Web y Móvil",
    "footer.srv.ecommerce": "E-commerce B2B",
    "footer.srv.consulting": "Consultoría Tecnológica",
    "footer.newsletter.title": "Manténgase Actualizado",
    "footer.newsletter.desc": "Reciba información sobre tecnología e innovación.",
    "footer.newsletter.placeholder": "Su correo corporativo",
    "footer.newsletter.btn": "Suscribirse",
    "footer.rights": "Todos los derechos reservados.",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Uso",
    
    // Tech Matrix
    "tech.matrix.title": "Nuestra Stack Tecnológica",
    "tech.matrix.subtitle": "Utilizamos las tecnologías más robustas, seguras y modernas del mercado para desarrollar soluciones a medida de alta escalabilidad.",
    "tech.matrix.hover": "Pase el mouse o toque una tecnología para ver por qué la usamos",
    "tech.next.why": "¿Por qué Next.js?",
    "tech.next.desc": "Es el principal framework React del mercado. Excelente para SEO, renderizado ultrarrápido en el servidor (SSR), optimización automática de imágenes y carga instantánea de páginas.",
    "tech.python.why": "¿Por qué Python?",
    "tech.python.desc": "Uno de los lenguajes más populares y versátiles del mundo. Ideal para inteligencia artificial, procesamiento de datos robusto, scripts automatizados y APIs limpias y sostenibles.",
    "tech.django.why": "¿Por qué Django?",
    "tech.django.desc": "Framework Python centrado en la seguridad y el desarrollo ágil. Tiene una arquitectura robusta 'batteries-included' ideal para sistemas ERP y SaaS complejos a nivel corporativo.",
    "tech.sqlserver.why": "¿Por qué SQL Server?",
    "tech.sqlserver.desc": "Base de datos relacional de alto rendimiento de Microsoft. Ofrece seguridad a nivel gubernamental, excelente integridad transaccional y soporte estable para millones de registros.",
    "tech.node.why": "¿Por qué Node.js?",
    "tech.node.desc": "Entorno Javascript rápido basado en el motor V8. Perfecto para microservicios escalables, APIs en tiempo real y alta concurrencia de peticiones por segundo.",
    
    // Parallax
    "parallax.title": "¿Listo para impulsar la innovación en su negocio?",
    "parallax.desc": "Hable con nuestros consultores de tecnología y diseñe la solución de software ideal para su empresa.",
    "parallax.btn": "Hablar con un Especialista"
  }
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt")

  // Sync language with localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && ["pt", "en", "es"].includes(savedLang)) {
      setLanguageState(savedLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  // Update HTML lang attribute dynamically for SEO and accessibility
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.lang = language === "pt" ? "pt-BR" : language === "en" ? "en-US" : "es-ES"
    }
  }, [language])

  const t = (key: string): string => {
    return translations[language]?.[key] || translations["pt"]?.[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
