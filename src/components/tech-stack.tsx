"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Cpu, Terminal, ShieldAlert, Database, Server } from "lucide-react"

type TechItem = {
  id: string
  name: string
  color: string
  glowClass: string
  logo: React.ReactNode
}

export function TechStack() {
  const { t } = useLanguage()
  const [activeTech, setActiveTech] = useState<string | null>(null)

  // Custom inline SVG logos for the stack
  const techList: TechItem[] = [
    {
      id: "next",
      name: "Next.js",
      color: "text-white dark:text-white hover:text-black dark:hover:text-white",
      glowClass: "hover:border-neutral-400/50 hover:shadow-neutral-400/10",
      logo: (
        <svg viewBox="0 0 180 180" className="w-12 h-12 fill-current">
          <circle cx="90" cy="90" r="90" fill="transparent"/>
          <path d="M149 133.5l-63.5-82h-12v82h10V70.5l53 68.5c4.5-7 7.5-15 8.5-23.5c.5-1.5.5-3 1-5.5z" />
          <path d="M102 51.5h10v82h-10z" />
        </svg>
      )
    },
    {
      id: "python",
      name: "Python",
      color: "text-[#3776AB]",
      glowClass: "hover:border-[#3776AB]/50 hover:shadow-[#3776AB]/15",
      logo: (
        <svg viewBox="0 0 110 110" className="w-12 h-12 fill-current">
          <path d="M55 2c-13.8 0-25 11.2-25 25v5h25v5H15c-7.2 0-13 5.8-13 13v20c0 7.2 5.8 13 13 13h10v-10c0-8.3 6.7-15 15-15h20c8.3 0 15 6.7 15 15v10h10c7.2 0 13-5.8 13-13V45c0-7.2-5.8-13-13-13H80V27c0-13.8-11.2-25-25-25zm-10 10c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z" />
          <path d="M55 108c13.8 0 25-11.2 25-25v-5H55v-5h40c7.2 0 13-5.8 13-13V40c0-7.2-5.8-13-13-13H85v10c0 8.3-6.7 15-15 15H50c-8.3 0-15 6.7-15 15v10H25c-7.2 0-13 5.8-13 13v20c0 7.2 5.8 13 13 13h25v-5c0-2.8 2.2-5 5-5zm10-10c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z" />
        </svg>
      )
    },
    {
      id: "django",
      name: "Django",
      color: "text-[#092E20] dark:text-[#0c4b33]",
      glowClass: "hover:border-emerald-600/50 hover:shadow-emerald-600/15",
      logo: (
        <svg viewBox="0 0 180 180" className="w-12 h-12 fill-current">
          <path d="M40 30h35v120H40zm45 0h30v70c0 20-5 35-25 45l-5-10c15-5 20-15 20-35V30zm45 0h30v120h-30zm-90 40h20v15H40zm90 0h20v15h-20z"/>
        </svg>
      )
    },
    {
      id: "sqlserver",
      name: "SQL Server",
      color: "text-[#CC292B]",
      glowClass: "hover:border-[#CC292B]/50 hover:shadow-[#CC292B]/15",
      logo: (
        <svg viewBox="0 0 128 128" className="w-12 h-12 fill-current">
          <path d="M64 8C33.1 8 8 21.4 8 38v52c0 16.6 25.1 30 56 30s56-13.4 56-30V38c0-16.6-25.1-30-56-30zm0 10c25.4 0 46 10 46 20s-20.6 20-46 20-46-10-46-20 20.6-20 46-20zm46 42v10c0 10-20.6 20-46 20S18 80 18 70V60c6.7 5.7 25 10 46 10s39.3-4.3 46-10zm0 30v10c0 10-20.6 20-46 20S18 110 18 100V90c6.7 5.7 25 10 46 10s39.3-4.3 46-10z" />
        </svg>
      )
    },
    {
      id: "node",
      name: "Node.js",
      color: "text-[#339933]",
      glowClass: "hover:border-[#339933]/50 hover:shadow-[#339933]/15",
      logo: (
        <svg viewBox="0 0 120 120" className="w-12 h-12 fill-current">
          <path d="M60 5L15 31v52l45 26 45-26V31L60 5zm35 73.2L60 98 25 78.2V37.8L60 18l35 19.8v40.4z" />
          <path d="M60 30v54l25-14.4V44.4L60 30z"/>
        </svg>
      )
    }
  ]

  return (
    <section className="w-full py-16 bg-background relative overflow-hidden border-t border-border/40">
      {/* Soft background blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary font-semibold rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-md">
            <Cpu className="h-4 w-4" />
            <span className="text-xs uppercase tracking-widest">{t("tech.matrix.title")}</span>
          </div>
          <p className="text-muted-foreground text-sm font-medium">
            {t("tech.matrix.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Column: Interactive Logos */}
          <div className="lg:col-span-6 grid grid-cols-5 gap-3 sm:gap-4 justify-items-center">
            {techList.map((tech) => {
              const isActive = activeTech === tech.id
              return (
                <div
                  key={tech.id}
                  onMouseEnter={() => setActiveTech(tech.id)}
                  onMouseLeave={() => setActiveTech(null)}
                  onClick={() => setActiveTech(isActive ? null : tech.id)}
                  className={`flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl border bg-card/60 backdrop-blur-md cursor-pointer transition-all duration-300 w-16 h-16 sm:w-20 sm:h-20 shadow-md ${tech.glowClass} ${
                    isActive 
                      ? `${tech.color} border-current scale-110 shadow-lg` 
                      : "border-border text-muted-foreground hover:scale-105"
                  }`}
                >
                  {tech.logo}
                </div>
              )
            })}
          </div>

          {/* Right Column: Explanatory Box */}
          <div className="lg:col-span-6 h-[220px]">
            <div className="relative w-full h-full rounded-3xl border border-border dark:border-white/5 bg-card/40 backdrop-blur-xl p-6 md:p-8 flex flex-col justify-center shadow-xl overflow-hidden group">
              {/* Glow border line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/30 via-primary to-green-500/30" />
              
              <AnimatePresence mode="wait">
                {activeTech ? (
                  <motion.div
                    key={activeTech}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      {activeTech === "next" && <Server className="h-5 w-5 text-neutral-400" />}
                      {activeTech === "python" && <Terminal className="h-5 w-5 text-[#3776AB]" />}
                      {activeTech === "django" && <ShieldAlert className="h-5 w-5 text-emerald-600" />}
                      {activeTech === "sqlserver" && <Database className="h-5 w-5 text-[#CC292B]" />}
                      {activeTech === "node" && <Cpu className="h-5 w-5 text-[#339933]" />}
                      
                      <h4 className="text-xl font-bold text-foreground">
                        {t(`tech.${activeTech}.why`)}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                      {t(`tech.${activeTech}.desc`)}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center space-y-2 py-4"
                  >
                    <Cpu className="h-8 w-8 text-primary/40 mx-auto animate-pulse" />
                    <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">
                      {t("tech.matrix.hover")}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
