"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, CheckCircle2, Code2, Lightbulb, Palette, Rocket } from "lucide-react"
import Link from "next/link"

const steps = [
  { 
    step: "01", 
    title: "Planejamento", 
    desc: "Análise estratégica", 
    details: "Mapeamento completo de requisitos, definição de arquitetura técnica e estratégia de produto para garantir escalabilidade e segurança desde o primeiro dia.",
    color: "bg-blue-500",
    icon: Lightbulb
  },
  { 
    step: "02", 
    title: "Criação", 
    desc: "Design & Prototipagem", 
    details: "Desenvolvimento de interfaces intuitivas e focadas na experiência do usuário (UX/UI), com protótipos interativos antes de qualquer código.",
    color: "bg-purple-500",
    icon: Palette
  },
  { 
    step: "03", 
    title: "Desenvolvimento", 
    desc: "Engenharia de Software", 
    details: "Codificação seguindo padrões Clean Code, testes automatizados e integração contínua para entregar software robusto e livre de bugs.",
    color: "bg-indigo-500",
    icon: Code2
  },
  { 
    step: "04", 
    title: "Lançamento", 
    desc: "Deploy & Monitoramento", 
    details: "Infraestrutura em nuvem otimizada, pipelines de deploy automatizados e monitoramento em tempo real para garantir alta disponibilidade.",
    color: "bg-green-500",
    icon: Rocket
  }
]

export function HeroSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0)

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-background pt-24 pb-12 md:pt-32 md:pb-20">
      {/* Background Elements - Enterprise Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] bg-secondary/20 opacity-20 blur-[120px]"></div>
      
      {/* Brand Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[12vw] leading-none text-foreground/[0.03] pointer-events-none whitespace-nowrap select-none z-0 tracking-tighter">
        SOFTLINE
      </div>

      <div className="container relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            Softline Sistemas • Fábrica de Software
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-[1.1]">
            Transformamos Ideias em <span className="text-primary relative">
              Software Real
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl leading-relaxed">
            Do planejamento ao lançamento, desenvolvemos soluções tecnológicas sob medida que impulsionam o crescimento da sua empresa.
          </p>

          <div className="flex flex-col gap-3 min-[400px]:flex-row pt-4">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300" asChild>
              <Link href="#contato">
                Iniciar Projeto <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base border-primary/20 hover:bg-primary/5 hover:text-primary transition-all duration-300" asChild>
              <Link href="#projetos">
                Nossos Cases
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>Metodologia Ágil</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>Alta Performance</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>Escalabilidade</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:ml-auto w-full max-w-[600px]"
        >
          {/* Software Factory Lifecycle Animation */}
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border/50 bg-card/30 dark:bg-zinc-900/30 p-4 md:p-8 shadow-2xl backdrop-blur-md flex flex-col justify-center">
             <div className="absolute inset-0 bg-grid-slate-900/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-white/5"></div>
             
             <div className="relative z-10 space-y-4 md:space-y-6">
                {[
                  { step: "01", title: "Planejamento", desc: "Análise de requisitos e arquitetura", color: "bg-blue-500" },
                  { step: "02", title: "Criação", desc: "UI/UX Design e Prototipagem", color: "bg-purple-500" },
                  { step: "03", title: "Desenvolvimento", desc: "Código limpo e escalável", color: "bg-indigo-500" },
                  { step: "04", title: "Lançamento", desc: "Deploy, Testes e Monitoramento", color: "bg-green-500" }
                ].map((item, index) => (
                  <motion.div 
                    key={item.step}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (index * 0.2), duration: 0.5 }}
                    className="group flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border border-border/60 bg-background/80 hover:bg-background hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className={`h-10 w-10 md:h-12 md:w-12 rounded-lg ${item.color} flex items-center justify-center text-white font-bold text-base md:text-lg shadow-md group-hover:scale-110 transition-transform shrink-0`}>
                      {item.step}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-base md:text-lg truncate">{item.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground truncate">{item.desc}</p>
                    </div>
                    <div className={`h-1.5 w-1.5 md:h-2 md:w-2 rounded-full ${item.color} animate-pulse shrink-0`}></div>
                  </motion.div>
                ))}
             </div>

             {/* Connecting Line */}
             <div className="absolute left-[3.25rem] md:left-[4.5rem] top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 -z-10 opacity-30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
