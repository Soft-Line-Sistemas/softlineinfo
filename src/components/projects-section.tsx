"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowUpRight, Layers, ZoomIn, Info, CheckCircle2, Globe, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects, type Project } from "@/data/projects"
import { useLanguage } from "@/lib/language-context"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"

function CountUp({ end, duration = 1.2 }: { end: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const match = end.match(/[\d.,]+/)
  const matchedStr = match ? match[0] : ""
  const numericStr = matchedStr.replace(/[.,]/g, "")
  const target = numericStr ? parseInt(numericStr, 10) : 0

  useEffect(() => {
    if (!isInView || !target) return

    const endValue = target
    const totalFrames = Math.round(duration * 60)
    let frame = 0

    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      const currentCount = Math.round(endValue * (progress * (2 - progress)))
      
      setCount(currentCount)

      if (frame >= totalFrames) {
        clearInterval(counter)
        setCount(endValue)
      }
    }, 1000 / 60)

    return () => clearInterval(counter)
  }, [isInView, target, duration])

  if (!match || !target) return <span>{end}</span>

  // Format count back with dots if target was originally large (e.g. 50000 -> 50.000)
  const formattedCount = target > 9999 
    ? count.toLocaleString("pt-BR").replace(/,/g, ".") 
    : count.toString()

  const displayText = isInView 
    ? end.replace(matchedStr, formattedCount)
    : end.replace(matchedStr, "0")

  return <span ref={ref}>{displayText}</span>
}

export function ProjectsSection() {
  const { language, t } = useLanguage()
  const [filter, setFilter] = useState("Todos")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [detailOpen, setDetailOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  const categories = [
    { id: "Todos", label: t("portfolio.filter.all") },
    { id: "Sistemas ERP", label: t("portfolio.filter.erp") },
    { id: "SaaS", label: t("portfolio.filter.saas") },
    { id: "E-commerce", label: t("portfolio.filter.ecommerce") },
    { id: "Logística", label: t("portfolio.filter.logistics") },
    { id: "Finanças", label: t("portfolio.filter.finance") },
  ]

  // Map projects to include translated content based on current active language
  const translatedProjects = projects.map((project) => {
    const translation = project.translations[language] || project.translations["pt"]
    return {
      ...project,
      title: translation.title,
      category: translation.category,
      tags: translation.tags,
      description: translation.description,
      fullDescription: translation.fullDescription,
      objectives: translation.objectives,
      results: translation.results,
    }
  })

  const filteredProjects = filter === "Todos"
    ? translatedProjects
    : translatedProjects.filter(project => project.category === t(`portfolio.filter.${
        filter === "Sistemas ERP" ? "erp" :
        filter === "SaaS" ? "saas" :
        filter === "E-commerce" ? "ecommerce" :
        filter === "Logística" ? "logistics" :
        filter === "Finanças" ? "finance" : "all"
      }`))

  const handleOpenDetail = (project: Project) => {
    // Get the untranslated project and map it
    const translation = project.translations[language] || project.translations["pt"]
    const mapped = {
      ...project,
      title: translation.title,
      category: translation.category,
      tags: translation.tags,
      description: translation.description,
      fullDescription: translation.fullDescription,
      objectives: translation.objectives,
      results: translation.results,
    }
    setSelectedProject(mapped)
    setActiveTab("overview")
    setDetailOpen(true)
  }

  return (
    <section id="projetos" className="w-full py-8 md:py-12 bg-background relative overflow-hidden">
      {/* Decorative Neon Background Blobs */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[130px] pointer-events-none animate-pulse duration-5000"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-8 gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-primary font-semibold rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-md">
               <Layers className="h-4.5 w-4.5 text-primary" />
               <span className="text-xs uppercase tracking-widest">{t("portfolio.badge")}</span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-balance leading-tight">
              {t("portfolio.title")}
            </h2>
          </div>
          
          {/* Glassmorphic Category Selector */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-muted/50 dark:bg-zinc-900/60 border rounded-2xl backdrop-blur-lg w-full xl:w-auto overflow-x-auto">
             {categories.map((category) => {
               const isActive = filter === category.id
               return (
                 <button
                   key={category.id}
                   onClick={() => setFilter(category.id)}
                   className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer select-none whitespace-nowrap ${
                     isActive
                       ? "text-primary-foreground font-bold"
                       : "text-muted-foreground hover:text-foreground"
                   }`}
                 >
                   {isActive && (
                     <motion.div
                       layoutId="activeCategory"
                       className="absolute inset-0 bg-primary rounded-xl -z-10 shadow-md shadow-primary/20"
                       transition={{ type: "spring", stiffness: 380, damping: 30 }}
                     />
                   )}
                   {category.label}
                 </button>
               )
             })}
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isFeatured = project.id === 1 || project.id === 3
              
              // Custom neon border glow color based on index/type
              const glowClass = project.id % 3 === 0 
                ? "hover:border-blue-500/30 hover:shadow-blue-500/5"
                : project.id % 3 === 1 
                  ? "hover:border-primary/30 hover:shadow-primary/5"
                  : "hover:border-green-500/30 hover:shadow-green-500/5"

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  key={project.id}
                  onClick={() => handleOpenDetail(project as unknown as Project)}
                  className={`group relative min-h-[380px] md:min-h-[440px] w-full overflow-hidden rounded-3xl bg-card dark:bg-zinc-900/40 border border-border dark:border-white/5 cursor-pointer shadow-lg transition-all duration-500 hover:shadow-2xl flex flex-col justify-end p-6 md:p-8 ${glowClass} ${
                    isFeatured ? "lg:col-span-2" : "col-span-1"
                  }`}
                >
                  {/* Floating Soft Ambient Glow behind the card image */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Image Container */}
                  <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-[1.03]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top opacity-90 transition-opacity"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Multilayered Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/90" />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 w-full flex flex-col text-white">
                    {/* Tags List */}
                    <div className="flex flex-wrap gap-1.5 mb-3.5">
                      {project.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-white/10 text-white border-white/10 backdrop-blur-md font-medium text-[10px] py-0.5 px-2">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-extrabold mb-2 leading-tight tracking-tight drop-shadow-md group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-300 text-sm font-medium leading-relaxed mb-5 line-clamp-2 drop-shadow-sm">
                      {project.description}
                    </p>

                    {/* Impact Metric (Highlighting first results item on hover) */}
                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-300 border-t border-white/10 pt-4 mt-2">
                      <div className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase tracking-wider mb-2">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>{t("project.metrics.impact")}</span>
                      </div>
                      <p className="text-slate-300 text-xs font-semibold line-clamp-1 italic">
                        <CountUp end={project.results[0]} />
                      </p>
                    </div>

                    {/* Action buttons (always visible or structured) */}
                    <div className="flex flex-wrap gap-3 mt-5">
                      <Button 
                        size="sm"
                        className="bg-primary hover:bg-primary/95 text-white font-bold rounded-xl shadow-lg shadow-primary/25 transition-all text-xs h-9 px-4 gap-1.5"
                        onClick={(e) => {
                          e.stopPropagation()
                           handleOpenDetail(project as unknown as Project)
                        }}
                      >
                        {t("portfolio.learnMore")} <Info className="h-3.5 w-3.5" />
                      </Button>

                      {project.link && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-bold rounded-xl backdrop-blur-sm text-xs h-9 px-4 gap-1.5"
                          onClick={(e) => e.stopPropagation()}
                          asChild
                        >
                          <Link href={project.link} target="_blank" rel="noopener noreferrer">
                            {t("portfolio.viewOnline")} <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  {/* Zoom Icon Hint */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-[-10px] group-hover:translate-y-0 pointer-events-none">
                    <div className="bg-black/40 backdrop-blur-md p-2.5 rounded-full text-white/90 border border-white/10 shadow-lg">
                      <ZoomIn className="h-4.5 w-4.5" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-8 text-center">
           <Button size="lg" variant="outline" className="h-12 px-8 rounded-full border-primary/20 hover:bg-primary/5 hover:text-primary transition-all font-semibold">
              {t("portfolio.viewAll")}
           </Button>
        </div>
      </div>

      {/* Modern project Details Drawer/Sheet */}
      <Sheet open={detailOpen} onOpenChange={setDetailOpen}>
        <SheetContent className="w-full sm:max-w-2xl overflow-y-auto z-[120] border-l dark:border-white/5 bg-background/95 backdrop-blur-lg p-0">
          {/* Ambient Glowing Backgrounds */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />

          {selectedProject && (
            <div className="relative z-10 px-6 md:px-8 pt-8 pb-16 space-y-8">
              <SheetHeader className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-lg shadow-sm shadow-primary/5">
                    {selectedProject.translations[language]?.category || selectedProject.translations["pt"]?.category}
                  </Badge>
                </div>
                <SheetTitle className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-foreground">
                  {selectedProject.translations[language]?.title || selectedProject.translations["pt"]?.title}
                </SheetTitle>
                <SheetDescription className="text-sm text-muted-foreground font-semibold leading-relaxed">
                  {selectedProject.translations[language]?.description || selectedProject.translations["pt"]?.description}
                </SheetDescription>
              </SheetHeader>

              {/* Cover Image in Drawer - Browser Mockup */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-border/80 bg-muted/40 dark:bg-zinc-900/60 shadow-2xl backdrop-blur-md">
                {/* Browser window header controls */}
                <div className="flex items-center justify-between px-4 py-3 bg-muted/80 dark:bg-zinc-900/85 border-b border-border/85">
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  {/* Address bar mockup */}
                  <div className="flex-1 max-w-xs mx-auto px-3 py-0.5 text-[10px] text-muted-foreground bg-background/50 rounded-md text-center border border-border/50 truncate font-mono select-all">
                    {selectedProject.link || "https://softlineinfo.com.br"}
                  </div>
                  <div className="w-12"></div> {/* Spacer for symmetry */}
                </div>
                
                {/* Screenshot inside mockup */}
                <div className="relative aspect-video w-full bg-muted/10">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.translations[language]?.title || selectedProject.translations["pt"]?.title}
                    fill
                    className="object-cover object-top hover:scale-[1.01] transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Visit Button */}
              {selectedProject.link && (
                <Button className="w-full h-12 font-bold rounded-2xl text-sm bg-primary hover:bg-primary/95 text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.01] gap-2" asChild>
                  <Link href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4.5 w-4.5" /> {t("project.visit")} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              )}

              {/* Custom Premium Tabs List */}
              <div className="relative w-full">
                <div className="flex w-full gap-1.5 p-1.5 bg-muted/50 dark:bg-zinc-900/60 border border-border/45 rounded-2xl backdrop-blur-md">
                  {[
                    { id: "overview", label: t("project.tabs.overview") },
                    { id: "goals", label: t("project.tabs.goals") },
                    { id: "results", label: t("project.tabs.results") },
                    { id: "tech", label: t("project.tabs.tech") }
                  ].map((tab) => {
                    const isActive = activeTab === tab.id
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 relative py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer select-none text-center ${
                          isActive
                            ? "text-primary-foreground font-black scale-[1.02]"
                            : "text-muted-foreground hover:text-foreground font-semibold"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeDetailTab"
                            className="absolute inset-0 bg-primary rounded-xl -z-10 shadow-md shadow-primary/30"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        {tab.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Custom Premium Tab Contents with Slide Transitions */}
              <div className="w-full relative min-h-[200px]">
                <AnimatePresence mode="wait">
                  {activeTab === "overview" && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 12, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12, scale: 0.99 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="p-6 md:p-8 rounded-3xl border border-border/60 bg-muted/10 dark:bg-zinc-950/20 backdrop-blur-sm space-y-3 shadow-sm"
                    >
                      <h4 className="font-extrabold text-sm text-foreground uppercase tracking-widest mb-3">{t("project.about")}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                        {selectedProject.translations[language]?.fullDescription || selectedProject.translations["pt"]?.fullDescription}
                      </p>
                    </motion.div>
                  )}

                  {activeTab === "goals" && (
                    <motion.div
                      key="goals"
                      initial={{ opacity: 0, y: 12, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12, scale: 0.99 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="p-6 md:p-8 rounded-3xl border border-border/60 bg-muted/10 dark:bg-zinc-950/20 backdrop-blur-sm space-y-4 shadow-sm"
                    >
                      <h4 className="font-extrabold text-sm text-foreground uppercase tracking-widest mb-2">{t("project.objectives")}</h4>
                      <ul className="space-y-3.5">
                        {(selectedProject.translations[language]?.objectives || selectedProject.translations["pt"]?.objectives).map((item, index) => (
                          <li key={index} className="flex items-start gap-3.5 text-sm text-muted-foreground font-semibold leading-relaxed">
                            <span className="flex h-5 w-5 rounded-full bg-primary/10 text-primary items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 className="h-3 w-3" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {activeTab === "results" && (
                    <motion.div
                      key="results"
                      initial={{ opacity: 0, y: 12, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12, scale: 0.99 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="p-6 md:p-8 rounded-3xl border border-border/60 bg-muted/10 dark:bg-zinc-950/20 backdrop-blur-sm space-y-4 shadow-sm"
                    >
                      <h4 className="font-extrabold text-sm text-foreground uppercase tracking-widest mb-2">{t("project.results")}</h4>
                      <div className="grid grid-cols-1 gap-3.5">
                        {(selectedProject.translations[language]?.results || selectedProject.translations["pt"]?.results).map((item, index) => (
                          <div key={index} className="p-4 rounded-2xl border border-border/40 bg-background/50 flex items-start gap-3.5 shadow-inner">
                            <span className="flex h-6 w-6 rounded-full bg-green-500/10 text-green-500 items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                            </span>
                            <span className="text-sm font-bold text-muted-foreground leading-snug">
                              <CountUp end={item} />
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "tech" && (
                    <motion.div
                      key="tech"
                      initial={{ opacity: 0, y: 12, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12, scale: 0.99 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="p-6 md:p-8 rounded-3xl border border-border/60 bg-muted/10 dark:bg-zinc-950/20 backdrop-blur-sm space-y-4 shadow-sm"
                    >
                      <h4 className="font-extrabold text-sm text-foreground uppercase tracking-widest mb-2">{t("project.tech")}</h4>
                      <div className="flex flex-wrap gap-2.5">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="px-4 py-2 font-extrabold text-xs rounded-xl bg-background border border-border/40 shadow-sm text-foreground hover:bg-background/80 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </section>
  )
}
