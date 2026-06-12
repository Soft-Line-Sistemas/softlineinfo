"use client"

import { use } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { projects } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowUpRight, CheckCircle2, Layers } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useLanguage } from "@/lib/language-context"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function ProjectPage(props: ProjectPageProps) {
  const params = use(props.params)
  const { language, t } = useLanguage()
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const translation = project.translations[language] || project.translations["pt"]

  // Select 3 related projects (excluding current project)
  const relatedProjects = projects
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3)
    .map((p) => {
      const trans = p.translations[language] || p.translations["pt"]
      return {
        ...p,
        title: trans.title,
        category: trans.category,
        description: trans.description,
      }
    })

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative w-full h-[50vh] min-h-[400px] flex items-end">
          <div className="absolute inset-0 z-0">
            <Image
              src={project.image}
              alt={translation.title}
              fill
              className="object-cover opacity-20 blur-sm"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>

          <div className="container relative z-10 px-4 md:px-6 pb-12">
            <Link 
              href="/#projetos" 
              className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors font-semibold text-sm"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("project.back")}
            </Link>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {translation.category}
                </Badge>
                {translation.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-border text-muted-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground max-w-4xl">
                {translation.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                {translation.description}
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
                  {t("project.about")}
                </h2>
                <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                  <p className="leading-relaxed text-lg">
                    {translation.fullDescription}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card dark:bg-zinc-900/50 p-6 rounded-2xl border border-border dark:border-white/5 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white">{t("project.objectives")}</h3>
                  <ul className="space-y-3">
                    {translation.objectives.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card dark:bg-zinc-900/50 p-6 rounded-2xl border border-border dark:border-white/5 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-foreground dark:text-white">{t("project.results")}</h3>
                  <ul className="space-y-3">
                    {translation.results.map((item, index) => (
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
                    alt={translation.title}
                    fill
                    className="object-contain"
                  />
                </div>
                {project.link && (
                  <div className="p-4">
                    <Button className="w-full" size="lg" asChild>
                      <Link href={project.link} target="_blank" rel="noopener noreferrer">
                        {t("project.visit")} <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>

              {/* Tech Stack */}
              <div className="bg-card dark:bg-zinc-900/30 p-6 rounded-2xl border border-border dark:border-white/5 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-foreground dark:text-white">{t("project.tech")}</h3>
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

        {/* Related Projects Section */}
        <section className="border-t border-border dark:border-white/5 bg-muted/20 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-foreground">
              {language === "pt" ? "Outros Projetos de Inovação" : language === "en" ? "Other Innovation Projects" : "Otros Proyectos de Innovación"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((rp) => (
                <Link
                  key={rp.id}
                  href={`/projetos/${rp.slug}`}
                  className="group block relative overflow-hidden rounded-2xl border border-border dark:border-white/5 bg-card hover:border-primary/30 transition-all p-5 hover:shadow-lg flex flex-col justify-between min-h-[200px]"
                >
                  <div>
                    <span className="text-[10px] text-primary font-bold uppercase tracking-wider block mb-2">{rp.category}</span>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-1 mb-2">{rp.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{rp.description}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary mt-4 group-hover:underline">
                    {t("portfolio.learnMore")} <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
