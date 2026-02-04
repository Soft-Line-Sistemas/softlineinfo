"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Mail, MapPin, Phone, MessageCircle, Map as MapIcon, Car } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um email válido.",
  }),
  phone: z.string().min(10, {
    message: "O telefone deve ter pelo menos 10 caracteres.",
  }),
  company: z.string().optional(),
  subject: z.string().min(5, {
    message: "O assunto deve ter pelo menos 5 caracteres.",
  }),
  message: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }),
})

import { motion } from "framer-motion"
import { section } from "framer-motion/client"

export function ContactSection() {
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

      toast.success("Mensagem enviada com sucesso!", {
        description: "Entraremos em contato em breve.",
      })
      form.reset()
    } catch (error) {
      toast.error("Erro ao enviar mensagem", {
        description: "Tente novamente mais tarde ou entre em contato pelo WhatsApp.",
      })
      console.error(error)
    }
  }

  return (
    <section id="contato" className="w-full py-12 md:py-24 relative overflow-hidden bg-slate-950">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="container grid items-start gap-12 lg:grid-cols-2 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
              Vamos Conversar?
            </h2>
            <p className="max-w-[600px] text-slate-300 md:text-lg leading-relaxed">
              Estamos prontos para entender seus desafios e oferecer a melhor solução tecnológica. 
              Preencha o formulário ou utilize nossos canais diretos para um atendimento ágil.
            </p>
          </div>
          <div className="grid gap-8">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-blue-400 shrink-0 border border-white/10 backdrop-blur-md">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="space-y-3 w-full">
                <div>
                  <h3 className="font-semibold text-lg text-white">Nossa Sede</h3>
                  <p className="text-slate-400 leading-snug">
                    R. Conselheiro Dantas, 5 - Comércio<br/>
                    Salvador - BA, 40015-070
                  </p>
                </div>
                {/* Map Integration */}
                <div className="w-full h-[220px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
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
                   <Button variant="secondary" size="sm" className="h-9 gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-sm" asChild>
                     <a href="https://www.google.com/maps/dir/?api=1&destination=R.+Conselheiro+Dantas,+5+-+Comércio,+Salvador+-+BA,+40015-070" target="_blank" rel="noopener noreferrer">
                       <MapIcon className="h-4 w-4" /> Abrir no Maps
                     </a>
                   </Button>
                   <Button variant="secondary" size="sm" className="h-9 gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-sm" asChild>
                     <a href="https://m.uber.com/ul/?action=setPickup&client_id=uber&pickup=my_location&dropoff[formatted_address]=R.%20Conselheiro%20Dantas%2C%205%20-%20Com%C3%A9rcio%2C%20Salvador%20-%20BA%2C%2040015-070" target="_blank" rel="noopener noreferrer">
                       <Car className="h-4 w-4" /> Ir de Uber
                     </a>
                   </Button>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-green-400 shrink-0 border border-white/10 backdrop-blur-md">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-white">Atendimento</h3>
                  <p className="text-sm text-slate-400">Seg-Sex, 8h às 18h</p>
                  <Button variant="outline" size="sm" className="bg-green-600/20 hover:bg-green-600/30 text-green-400 border-green-600/30 shadow-sm w-full sm:w-auto hover:text-green-300" asChild>
                    <a href="https://wa.me/5571993703911" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-blue-400 shrink-0 border border-white/10 backdrop-blur-md">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                   <h3 className="font-semibold text-lg text-white">Email Corporativo</h3>
                   <a href="mailto:comercial@softlineinfo.com.br" className="text-sm text-slate-400 hover:text-white transition-colors">
                     comercial@softlineinfo.com.br
                   </a>
                   <p className="text-xs text-slate-500 mt-1">Resposta em até 24h</p>
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
          className="bg-white/5 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/10"
        >
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-white">Envie uma Mensagem</h3>
            <p className="text-sm text-slate-400">Preencha os dados abaixo e nosso time comercial entrará em contato.</p>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-blue-500/50" />
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
                      <FormLabel className="text-slate-300">Telefone</FormLabel>
                      <FormControl>
                        <Input placeholder="(00) 00000-0000" {...field} className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-blue-500/50" />
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
                      <FormLabel className="text-slate-300">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="seu@email.com" {...field} className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-blue-500/50" />
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
                      <FormLabel className="text-slate-300">Empresa (Opcional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Nome da empresa" {...field} className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-blue-500/50" />
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
                    <FormLabel className="text-slate-300">Assunto</FormLabel>
                    <FormControl>
                      <Input placeholder="Sobre o que vamos falar?" {...field} className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-blue-500/50" />
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
                    <FormLabel className="text-slate-300">Mensagem</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Conte-nos mais sobre seu projeto ou necessidade..." 
                        className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-blue-500/50"
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
                {form.formState.isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  )
}

