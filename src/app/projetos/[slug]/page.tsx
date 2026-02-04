import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { projects } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowUpRight, CheckCircle2, Layers } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage(props: ProjectPageProps) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative w-full h-[50vh] min-h-[400px] flex items-end">
          <div className="absolute inset-0 z-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover opacity-20 blur-sm"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>

          <div className="container relative z-10 px-4 md:px-6 pb-12">
            <Link 
              href="/#projetos" 
              className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Projetos
            </Link>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {project.category}
                </Badge>
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-border text-muted-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground max-w-4xl">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="container px-4 md:px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content (Left Column) */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Layers className="h-6 w-6 text-primary" />
                  Sobre o Projeto
                </h2>
                <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                  <p className="leading-relaxed text-lg">
                    {project.fullDescription}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card dark:bg-zinc-900/50 p-6 rounded-2xl border border-border dark:border-white/5 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white">Objetivos</h3>
                  <ul className="space-y-3">
                    {project.objectives.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card dark:bg-zinc-900/50 p-6 rounded-2xl border border-border dark:border-white/5 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white">Resultados</h3>
                  <ul className="space-y-3">
                    {project.results.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar (Right Column) */}
            <div className="space-y-8">
              {/* Project Image Card */}
              <div className="bg-card dark:bg-zinc-900/50 p-2 rounded-2xl border border-border dark:border-white/5 shadow-xl">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted dark:bg-black">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </div>
                {project.link && (
                  <div className="p-4">
                    <Button className="w-full" size="lg" asChild>
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        Visitar Projeto Online <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>

              {/* Tech Stack */}
              <div className="bg-card dark:bg-zinc-900/30 p-6 rounded-2xl border border-border dark:border-white/5 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-foreground dark:text-white">Tecnologias Utilizadas</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
