"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, Database, Layers, Code2, Users, Lightbulb, Rocket, Cpu } from "lucide-react"
import { motion } from "framer-motion"

export function AboutSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="sobre" className="w-full bg-muted/30 py-12 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute -left-[20%] top-[20%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-5 space-y-8 sticky top-24">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Sobre a Softline
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-balance">
                Engenharia de <span className="text-green-500">software</span> que <span className="text-primary">escala seu negócio</span>.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Não somos apenas desenvolvedores, somos parceiros estratégicos. Criamos ecossistemas digitais robustos, do MVP ao Enterprise, focados em performance, segurança e usabilidade.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white dark:bg-card border shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <h3 className="text-xl font-bold mb-3 relative z-10">Nosso DNA</h3>
              <p className="text-muted-foreground relative z-10">
                Codificamos o futuro das empresas através de arquiteturas modernas, metodologias ágeis e uma obsessão pela qualidade do código e da experiência do usuário.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 1 - Custom Development */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-card border shadow-sm hover:shadow-md transition-all group"
              >
                <div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Desenvolvimento Sob Medida</h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  Transformamos sua visão em software de alta performance. Seja uma plataforma SaaS, um aplicativo mobile ou uma integração complexa, entregamos soluções que se adaptam perfeitamente aos seus processos de negócio.
                </p>
              </motion.div>

              {/* Feature 2 - Enterprise ERP */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 rounded-3xl bg-white dark:bg-card border shadow-sm hover:shadow-md transition-all group"
              >
                <div className="h-12 w-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">ERP Enterprise</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Nosso sistema de gestão robusto e flexível, projetado para atender empresas de todos os ramos. Centralize operações, finanças e estoque em uma única plataforma escalável.
                </p>
              </motion.div>

              {/* Feature 3 - Modern Stack */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-8 rounded-3xl bg-white dark:bg-card border shadow-sm hover:shadow-md transition-all group"
              >
                <div className="h-12 w-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Tecnologia de Ponta</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Utilizamos stack moderna (Next.js, React, Node.js, Cloud) para garantir performance, segurança e longevidade do seu software.
                </p>
              </motion.div>
              
              {/* Feature 4 - Innovation */}
               <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent border shadow-sm hover:shadow-md transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Layers className="h-40 w-40" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
                   <div className="h-14 w-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                     <Lightbulb className="h-7 w-7" />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold mb-2 text-green-500">Inovação como Serviço</h3>
                      <p className="text-muted-foreground">
                        Não entregamos apenas código, entregamos inteligência de negócio. Nossa equipe atua como um braço de inovação dentro da sua empresa.
                      </p>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
