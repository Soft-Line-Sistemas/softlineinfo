"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Mail, MapPin, Phone, MessageCircle, Map as MapIcon, Car } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  const formSchema = z.object({
    name: z.string().min(2, {
      message: t("contact.validation.name"),
    }),
    email: z.string().email({
      message: t("contact.validation.email"),
    }),
    phone: z.string().min(10, {
      message: t("contact.validation.phone"),
    }),
    company: z.string().optional(),
    subject: z.string().min(5, {
      message: t("contact.validation.subject"),
    }),
    message: z.string().min(10, {
      message: t("contact.validation.message"),
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    },
  })

  const triggerConfetti = () => {
    if (typeof window === "undefined") return
    
    // Generate beautiful falling confetti particles
    for (let i = 0; i < 80; i++) {
      const el = document.createElement("div")
      const size = Math.random() * 6 + 6
      
      el.style.position = "fixed"
      el.style.zIndex = "9999"
      el.style.width = `${size}px`
      el.style.height = `${size}px`
      el.style.backgroundColor = ["#3b82f6", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6", "#f97316"][Math.floor(Math.random() * 6)]
      el.style.left = `${Math.random() * 100}vw`
      el.style.top = `-20px`
      el.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px"
      el.style.pointerEvents = "none"
      el.style.opacity = (Math.random() * 0.4 + 0.6).toString()
      
      document.body.appendChild(el)
      
      const speedY = Math.random() * 5 + 4
      const speedX = Math.random() * 4 - 2
      let rotation = Math.random() * 360
      const rotationSpeed = Math.random() * 6 - 3
      
      let currentTop = -20
      let currentLeft = parseFloat(el.style.left)
      
      const anim = () => {
        currentTop += speedY
        currentLeft += speedX
        rotation += rotationSpeed
        el.style.top = `${currentTop}px`
        el.style.left = `${currentLeft}px`
        el.style.transform = `rotate(${rotation}deg)`
        
        // Remove element when it exits the viewport
        if (currentTop < window.innerHeight) {
          requestAnimationFrame(anim)
        } else {
          el.remove()
        }
      }
      requestAnimationFrame(anim)
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error("Falha ao enviar mensagem")
      }

      triggerConfetti()
      toast.success(t("contact.toast.success"), {
        description: t("contact.toast.success.desc"),
      })
      form.reset()
    } catch (error) {
      toast.error(t("contact.toast.error"), {
        description: t("contact.toast.error.desc"),
      })
      console.error(error)
    }
  }

  return (
    <section id="contato" className="w-full py-8 md:py-12 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 dark:bg-green-500/20 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="container grid items-start gap-12 lg:grid-cols-2 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
              {t("contact.title")}
            </h2>
            <p className="max-w-[600px] text-slate-600 dark:text-slate-300 md:text-lg leading-relaxed">
              {t("contact.desc")}
            </p>
          </div>
          <div className="grid gap-8">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/5 text-blue-600 dark:text-blue-400 shrink-0 border border-slate-200 dark:border-white/10 backdrop-blur-md">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="space-y-3 w-full">
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{t("contact.headquarters")}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-snug">
                    R. Conselheiro Dantas, 5 - Comércio<br/>
                    Salvador - BA, 40015-070
                  </p>
                </div>
                {/* Map Integration */}
                <div className="w-full h-[220px] rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.893123847847!2d-38.5144!3d-12.9694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71604e7c3a0b8d5%3A0x0!2sR.%20Conselheiro%20Dantas%2C%205%20-%20Com%C3%A9rcio%2C%20Salvador%20-%20BA%2C%2040015-070!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
                  ></iframe>
                </div>
                <div className="flex flex-wrap gap-3">
                   <Button variant="secondary" size="sm" className="h-9 gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-white/10 backdrop-blur-sm shadow-sm" asChild>
                     <a href="https://www.google.com/maps/dir/?api=1&destination=R.+Conselheiro+Dantas,+5+-+Comércio,+Salvador+-+BA,+40015-070" target="_blank" rel="noopener noreferrer">
                       <MapIcon className="h-4 w-4" /> {t("contact.maps")}
                     </a>
                   </Button>
                   <Button variant="secondary" size="sm" className="h-9 gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-white/10 backdrop-blur-sm shadow-sm" asChild>
                     <a href="https://m.uber.com/ul/?action=setPickup&client_id=uber&pickup=my_location&dropoff[formatted_address]=R.%20Conselheiro%20Dantas%2C%205%20-%20Com%C3%A9rcio%2C%20Salvador%20-%20BA%2C%2040015-070" target="_blank" rel="noopener noreferrer">
                       <Car className="h-4 w-4" /> {t("contact.uber")}
                     </a>
                   </Button>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/5 text-green-600 dark:text-green-400 shrink-0 border border-slate-200 dark:border-white/10 backdrop-blur-md">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{t("contact.hours")}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{t("contact.hours.detail")}</p>
                  <Button variant="outline" size="sm" className="bg-green-50 hover:bg-green-100 text-green-700 border-green-200 dark:bg-green-600/20 dark:hover:bg-green-600/30 dark:text-green-400 dark:border-green-600/30 shadow-sm w-full sm:w-auto" asChild>
                    <a href="https://wa.me/5571993703911" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/5 text-blue-600 dark:text-blue-400 shrink-0 border border-slate-200 dark:border-white/10 backdrop-blur-md">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                   <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{t("contact.email")}</h3>
                   <a href="mailto:comercial@softlineinfo.com.br" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                     comercial@softlineinfo.com.br
                   </a>
                   <p className="text-xs text-slate-500 mt-1">{t("contact.email.detail")}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/80 dark:bg-white/5 backdrop-blur-2xl rounded-3xl p-8 shadow-xl dark:shadow-2xl border border-slate-200 dark:border-white/10 shadow-slate-200/50"
        >
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{t("contact.form.title")}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{t("contact.form.desc")}</p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 dark:text-slate-300">{t("contact.form.name")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("contact.form.name.placeholder")} {...field} className="bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus-visible:ring-blue-500/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 dark:text-slate-300">{t("contact.form.phone")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("contact.form.phone.placeholder")} {...field} className="bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus-visible:ring-blue-500/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 dark:text-slate-300">{t("contact.form.email")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("contact.form.email.placeholder")} {...field} className="bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus-visible:ring-blue-500/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 dark:text-slate-300">{t("contact.form.company")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("contact.form.company.placeholder")} {...field} className="bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus-visible:ring-blue-500/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 dark:text-slate-300">{t("contact.form.subject")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("contact.form.subject.placeholder")} {...field} className="bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus-visible:ring-blue-500/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-700 dark:text-slate-300">{t("contact.form.message")}</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder={t("contact.form.message.placeholder")} 
                        className="min-h-[120px] bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus-visible:ring-blue-500/50"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                disabled={form.formState.isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-6 text-lg shadow-lg shadow-blue-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {form.formState.isSubmitting ? t("contact.form.submitting") : t("contact.form.submit")}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  )
}
