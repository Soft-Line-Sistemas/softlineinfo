"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { 
  TrendingUp, 
  Package, 
  Users, 
  BarChart3, 
  Link2, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Server, 
  Clock, 
  ShieldCheck,
  FileText,
  DollarSign
} from "lucide-react"

export function EnterpriseSection() {
  const { t, language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    branches: "1",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, branches: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error(language === "pt" ? "Erro de Validação" : "Validation Error", {
        description: language === "pt" ? "Por favor preencha nome, email e telefone." : "Please fill in name, email, and phone."
      })
      return
    }

    setIsSubmitting(true)
    // Simulate commercial API submit
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setIsSubmitting(false)
    toast.success(t("contact.toast.success"), {
      description: t("contact.toast.success.desc"),
    })
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      branches: "1",
      message: ""
    })
  }

  const modules = [
    {
      icon: DollarSign,
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      title: t("enterprise.mod.finance.title"),
      desc: t("enterprise.mod.finance.desc")
    },
    {
      icon: FileText,
      color: "bg-green-500/10 text-green-600 dark:text-green-400",
      title: t("enterprise.mod.billing.title"),
      desc: t("enterprise.mod.billing.desc")
    },
    {
      icon: Package,
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
      title: t("enterprise.mod.inventory.title"),
      desc: t("enterprise.mod.inventory.desc")
    },
    {
      icon: Users,
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      title: t("enterprise.mod.sales.title"),
      desc: t("enterprise.mod.sales.desc")
    },
    {
      icon: BarChart3,
      color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
      title: t("enterprise.mod.analytics.title"),
      desc: t("enterprise.mod.analytics.desc")
    },
    {
      icon: Link2,
      color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
      title: t("enterprise.mod.integrations.title"),
      desc: t("enterprise.mod.integrations.desc")
    }
  ]

  const benefits = [
    {
      icon: Building2,
      title: t("enterprise.benefit.multi.title"),
      desc: t("enterprise.benefit.multi.desc")
    },
    {
      icon: ShieldCheck,
      title: t("enterprise.benefit.security.title"),
      desc: t("enterprise.benefit.security.desc")
    },
    {
      icon: Server,
      title: t("enterprise.benefit.cloud.title"),
      desc: t("enterprise.benefit.cloud.desc")
    },
    {
      icon: Clock,
      title: t("enterprise.benefit.support.title"),
      desc: t("enterprise.benefit.support.desc")
    }
  ]

  return (
    <div className="w-full">
      {/* 1. ERP Hero Banner */}
      <section className="relative w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden py-20 lg:py-32 transition-colors duration-300">
        {/* Background Grid & Ambient Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-blue-100/50 dark:from-blue-900/20 via-slate-50 dark:via-slate-950 to-slate-50 dark:to-slate-950 z-0 transition-colors duration-300" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:30px_30px] z-0" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>{t("enterprise.hero.badge")}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white"
            >
              {t("enterprise.hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium max-w-xl leading-relaxed"
            >
              {t("enterprise.hero.desc")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4"
            >
              <Button size="lg" className="rounded-full h-12 px-8 font-bold" asChild>
                <a href="#demo-form">{t("enterprise.hero.cta")}</a>
              </Button>
            </motion.div>
          </div>

          {/* Glassmorphic Dashboard Preview Mockup */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl bg-white/75 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-white/10 p-6 shadow-xl dark:shadow-2xl space-y-6 overflow-hidden max-w-lg mx-auto text-slate-900 dark:text-white"
            >
              {/* Fake Window Dots */}
              <div className="flex items-center gap-1.5 pb-2 border-b border-slate-200 dark:border-white/5">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-[10px] text-slate-400 dark:text-slate-500 font-mono tracking-widest uppercase">softline-dashboard.env</span>
              </div>

              {/* Stat Card Mockup */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-100/60 dark:bg-slate-950/50 p-4 rounded-xl border border-slate-200 dark:border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block">Faturamento Mensal</span>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold font-mono text-slate-900 dark:text-white">R$ 342.500</span>
                    <span className="text-xs text-green-600 dark:text-green-400 font-bold flex items-center gap-0.5">
                      <TrendingUp className="h-3 w-3" /> +14.2%
                    </span>
                  </div>
                </div>

                <div className="bg-slate-100/60 dark:bg-slate-950/50 p-4 rounded-xl border border-slate-200 dark:border-white/5 space-y-1">
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider block">Ordens pendentes</span>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold font-mono text-slate-900 dark:text-white">42 Ativas</span>
                    <span className="h-2 w-2 rounded-full bg-yellow-650 dark:bg-yellow-400 animate-ping" />
                  </div>
                </div>
              </div>

              {/* Graphic Chart Bar Mockup */}
              <div className="bg-slate-100/60 dark:bg-slate-950/50 p-5 rounded-xl border border-slate-200 dark:border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Volume de Estoque p/ Filial</span>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">Atualizado agora</span>
                </div>
                
                <div className="space-y-2.5 pt-2">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400">
                      <span>Filial Salvador Centro</span>
                      <span className="font-mono">82%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "82%" }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400">
                      <span>Filial Lauro de Freitas</span>
                      <span className="font-mono">48%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-900 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "48%" }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                        className="h-full bg-green-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Integrated Modules Grid */}
      <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              {t("enterprise.modules.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t("enterprise.modules.title")}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              {t("enterprise.modules.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((mod, index) => {
              const IconComp = mod.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-card hover:bg-card/85 p-8 rounded-3xl border border-border shadow-sm hover:shadow-md hover:border-primary/20 hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${mod.color}`}>
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{mod.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{mod.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Differentiators & Benefits */}
      <section className="py-20 lg:py-28 bg-muted/30 border-y border-border/40 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                {t("enterprise.benefits.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t("enterprise.benefits.subtitle")}
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-sm font-semibold text-foreground">Implantação consultiva planejada</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-sm font-semibold text-foreground">Migração de dados garantida</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  <span className="text-sm font-semibold text-foreground">Treinamento completo de equipe</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const IconComp = benefit.icon
                return (
                  <div key={index} className="bg-white dark:bg-card p-6 rounded-2xl border border-border shadow-sm space-y-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{benefit.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. API Integration Flow Visualizer */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border-y border-slate-200 dark:border-none relative overflow-hidden transition-colors duration-300">
        {/* Ambient Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="container relative z-10 px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-slate-900 dark:text-white">Ecosistema Conectado</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
              O Softline Enterprise integra-se nativamente com as ferramentas e APIs mais consolidadas do mercado.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center justify-center max-w-4xl mx-auto">
            {/* Integration Nodes */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-center min-w-[120px] shadow-md dark:shadow-lg">
                <span className="text-xs text-slate-550 dark:text-slate-400 block font-mono">Bancos</span>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-1 block">APIs de Cobrança</span>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-center min-w-[120px] shadow-md dark:shadow-lg">
                <span className="text-xs text-slate-550 dark:text-slate-400 block font-mono">Fiscais</span>
                <span className="text-sm font-bold text-green-600 dark:text-green-400 mt-1 block">Prefeituras / SEFAZ</span>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-center min-w-[120px] shadow-md dark:shadow-lg">
                <span className="text-xs text-slate-550 dark:text-slate-400 block font-mono">E-commerce</span>
                <span className="text-sm font-bold text-purple-600 dark:text-purple-400 mt-1 block">Marketplaces</span>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-center min-w-[120px] shadow-md dark:shadow-lg">
                <span className="text-xs text-slate-550 dark:text-slate-400 block font-mono">Logística</span>
                <span className="text-sm font-bold text-orange-600 dark:text-orange-400 mt-1 block">Transportadoras</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Demo Form Section */}
      <section id="demo-form" className="py-20 lg:py-28 bg-background relative overflow-hidden">
        <div className="container max-w-4xl px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-3xl bg-card border border-border shadow-xl space-y-8"
          >
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("enterprise.cta.title")}
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                {t("enterprise.cta.desc")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t("contact.form.name")}</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t("contact.form.name.placeholder")}
                    className="h-11 focus-visible:ring-primary rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t("contact.form.email")}</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t("contact.form.email.placeholder")}
                    className="h-11 focus-visible:ring-primary rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t("contact.form.phone")}</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t("contact.form.phone.placeholder")}
                    className="h-11 focus-visible:ring-primary rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t("contact.form.company")}</label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder={t("contact.form.company.placeholder")}
                    className="h-11 focus-visible:ring-primary rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="branches" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Filiais / Unidades</label>
                  <select
                    id="branches"
                    name="branches"
                    value={formData.branches}
                    onChange={handleSelectChange}
                    className="flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="1">Apenas 1 unidade</option>
                    <option value="2-5">De 2 a 5 unidades</option>
                    <option value="6-15">De 6 a 15 unidades</option>
                    <option value="16+">Mais de 15 unidades</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t("contact.form.message")}</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t("contact.form.message.placeholder")}
                  className="min-h-[100px] focus-visible:ring-primary rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 flex items-center justify-center gap-2"
              >
                {isSubmitting ? t("contact.form.submitting") : t("enterprise.form.submit")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
