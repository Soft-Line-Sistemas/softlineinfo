"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Layers, X, ZoomIn, Info } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects, type Project } from "@/data/projects"

export function ProjectsSection() {
  const [filter, setFilter] = useState("Todos")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = ["Todos", "Sistemas ERP", "SaaS", "E-commerce", "Logística", "Finanças"]

  const filteredProjects = filter === "Todos"
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <section id="projetos" className="w-full py-12 md:py-32 bg-background relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-primary font-medium">
               <Layers className="h-5 w-5" />
               <span className="text-sm uppercase tracking-widest">Portfólio de Inovação</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-balance">
              Software real que resolve <br className="hidden md:block" /> problemas reais.
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-end">
             {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category
                      ? "bg-primary text-primary-foreground shadow-md scale-105"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
             ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative h-[350px] md:h-[450px] w-full overflow-hidden rounded-2xl bg-zinc-950/50 border border-white/5 cursor-zoom-in hover:border-primary/20 transition-colors"
              >
                {/* Image Container */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                   <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white pointer-events-none">
                  <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                     <div className="flex flex-wrap gap-2 mb-3 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 delay-75">
                        {project.tags.slice(0, 3).map(tag => (
                           <Badge key={tag} variant="secondary" className="bg-white/10 text-white border-white/10 backdrop-blur-md">
                              {tag}
                           </Badge>
                        ))}
                     </div>
                     <h3 className="text-2xl font-bold mb-1 leading-tight drop-shadow-md">{project.title}</h3>
                     <p className="text-slate-300 text-sm font-medium mb-4 drop-shadow-sm line-clamp-2">{project.description}</p>
                     
                     <div className="flex flex-wrap gap-3 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 delay-150 pointer-events-auto">
                        <Button 
                          className="bg-primary hover:bg-primary/90 text-white h-9 px-4 text-sm font-medium rounded-full shadow-lg hover:shadow-primary/25 transition-all" 
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                           <Link href={`/projetos/${project.slug}`} className="flex items-center gap-2">
                              Saiba Mais <Info className="h-4 w-4" />
                           </Link>
                        </Button>

                        {project.link && (
                           <Button 
                             variant="outline" 
                             className="bg-white/10 border-white/20 text-white hover:bg-white/20 h-9 px-4 text-sm font-medium rounded-full backdrop-blur-sm" 
                             asChild
                             onClick={(e) => e.stopPropagation()}
                           >
                              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                 Ver Online <ArrowUpRight className="h-4 w-4" />
                              </Link>
                           </Button>
                        )}
                     </div>
                  </div>
                </div>
                
                {/* Zoom Icon Hint */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-black/50 backdrop-blur-md p-2 rounded-full text-white/80">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center">
           <Button size="lg" variant="outline" className="h-12 px-8 rounded-full border-primary/20 hover:bg-primary/5">
              Ver Todos os Projetos
           </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
              onClick={() => setSelectedProject(null)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Fechar</span>
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-7xl max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-contain"
                  priority
                  sizes="100vw"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center flex justify-center gap-4 pointer-events-none">
                 <div className="pointer-events-auto flex gap-3">
                    <Button className="bg-primary text-white hover:bg-primary/90 rounded-full" asChild>
                      <Link href={`/projetos/${selectedProject.slug}`}>
                        Saiba Mais
                      </Link>
                    </Button>
                    {selectedProject.link && (
                        <Button variant="outline" className="bg-black/50 border-white/20 text-white hover:bg-white/10 rounded-full backdrop-blur-md" asChild>
                          <Link href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                            Visitar Online <ArrowUpRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                    )}
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
