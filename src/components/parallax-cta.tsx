"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function ParallaxCTA() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll position of the section to create the parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Transform background translation to make it move slower than content
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[380px] md:h-[450px] overflow-hidden flex items-center justify-center border-y border-border/40"
    >
      {/* Parallax Background Container */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 h-[130%] w-full"
      >
        {/* Abstract Tech Grid with gradient overlay */}
        <div className="absolute inset-0 bg-slate-950 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950 z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:30px_30px] z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10" />
      </motion.div>

      {/* Foreground Content */}
      <div className="container px-4 md:px-6 relative z-20 text-center max-w-4xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 text-green-400 font-bold uppercase tracking-widest text-xs mb-2">
            <Sparkles className="h-4 w-4" />
            <span>SOFT LINE SISTEMAS</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {t("parallax.title")}
          </h2>
          
          <p className="text-slate-400 text-sm md:text-base font-semibold max-w-2xl mx-auto">
            {t("parallax.desc")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="pt-4"
        >
          <Button 
            size="lg" 
            className="h-12 px-8 rounded-full bg-primary hover:bg-primary/95 text-white font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.03] transition-all duration-300" 
            asChild
          >
            <Link href="#contato">
              {t("parallax.btn")} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
