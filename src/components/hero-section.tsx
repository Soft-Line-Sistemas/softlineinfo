"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, CheckCircle2, Code2, Lightbulb, Palette, Rocket } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

const steps = [
  { 
    step: "01", 
    color: "bg-blue-500",
    icon: Lightbulb
  },
  { 
    step: "02", 
    color: "bg-purple-500",
    icon: Palette
  },
  { 
    step: "03", 
    color: "bg-indigo-500",
    icon: Code2
  },
  { 
    step: "04", 
    color: "bg-green-500",
    icon: Rocket
  }
]
export function HeroSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0)
  const { t } = useLanguage()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHoveredHero, setIsHoveredHero] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const localizedSteps = steps.map((item, index) => ({
    ...item,
    title: t(`step.${index + 1}.title`),
    desc: t(`step.${index + 1}.desc`),
    details: t(`step.${index + 1}.details`)
  }))

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHoveredHero(true)}
      onMouseLeave={() => setIsHoveredHero(false)}
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-background pt-24 pb-12 md:pt-32 md:pb-20"
    >
      {/* Background Elements - Enterprise Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Interactive mouse follow glow blob */}
      {isHoveredHero && (
        <motion.div
          className="absolute -z-10 h-[350px] w-[350px] rounded-full bg-primary/10 opacity-30 blur-[100px] pointer-events-none hidden md:block"
          animate={{
            x: mousePosition.x - 175,
            y: mousePosition.y - 175,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
        />
      )}
      
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
            {t("hero.badge")}
          </div>
          
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-[1.1]">
            {t("hero.title1")}{" "}
            <span className="text-primary relative">
              {t("hero.title2")}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl leading-relaxed">
            {t("hero.desc")}
          </p>

          <div className="flex flex-col gap-3 min-[400px]:flex-row pt-4">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300" asChild>
              <Link href="#contato">
                {t("hero.btn.start")} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-base border-primary/20 hover:bg-primary/5 hover:text-primary transition-all duration-300" asChild>
              <Link href="#projetos">
                {t("hero.btn.cases")}
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>{t("hero.benefit1")}</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>{t("hero.benefit2")}</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>{t("hero.benefit3")}</span>
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
             
             <div className="relative z-10 space-y-3" onMouseLeave={() => setHoveredIndex(null)}>
                {localizedSteps.map((item, index) => {
                  const isHovered = hoveredIndex === index
                  const isDefaultActive = hoveredIndex === null && index === 0

                  return (
                    <motion.div 
                      key={item.step}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      className={`group relative flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 backdrop-blur-sm overflow-hidden cursor-default
                        ${isHovered 
                          ? "bg-background/90 border-primary/50 shadow-lg scale-[1.02] z-20" 
                          : "bg-background/40 border-border/50 hover:bg-background/60 z-10"
                        }
                        ${isDefaultActive ? "animate-pulse border-primary/30 bg-background/60" : ""}
                      `}
                    >
                      <div className={`h-12 w-12 rounded-xl ${item.color} flex items-center justify-center text-white shadow-lg shrink-0 transition-transform duration-500 
                        ${isHovered ? "rotate-3 scale-110" : ""}
                        ${isDefaultActive ? "scale-105" : ""}
                      `}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      
                      <div className="flex-1 min-w-0 z-10">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className={`font-semibold text-lg transition-colors duration-300 
                            ${isHovered || isDefaultActive ? "text-foreground" : "text-muted-foreground"}
                          `}>
                            {item.title}
                          </h3>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-background/50 border 
                            ${isHovered ? "text-foreground border-primary/30" : "text-muted-foreground/50 border-transparent"}
                            ${isDefaultActive ? "text-primary/80 border-primary/20" : ""}
                          `}>
                            {item.step}
                          </span>
                        </div>
                        
                        <p className="text-sm text-muted-foreground font-medium mb-2">
                          {item.desc}
                        </p>

                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="text-sm text-muted-foreground/80 leading-relaxed pb-1 border-t border-border/50 pt-2 mt-1">
                                {item.details}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Active Indicator Glow */}
                      {isHovered && (
                         <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent pointer-events-none" />
                      )}
                    </motion.div>
                  )
                })}
             </div>

             {/* Connecting Line */}
             <div className="absolute left-[3.25rem] md:left-[4.5rem] top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 -z-10 opacity-30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
