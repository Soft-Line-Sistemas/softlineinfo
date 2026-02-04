import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-200">
      <div className="container py-12 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
             <div className="relative h-12 w-48">
                <Image 
                  src="/image/Logo Softline.png" 
                  alt="Softline Sistemas" 
                  fill 
                  className="object-contain brightness-0 invert"
                />
             </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Sua Fábrica de Software parceira. Desenvolvemos soluções digitais escaláveis e sob medida para impulsionar a inovação no seu negócio.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://facebook.com" className="hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Serviços</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="h-3 w-3" /> Fábrica de Software
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="h-3 w-3" /> ERP Enterprise
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="h-3 w-3" /> Desenvolvimento Web & Mobile
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="h-3 w-3" /> E-commerce B2B
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="h-3 w-3" /> Consultoria Tecnológica
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contato</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>
                  R. Conselheiro Dantas, 5 - Comércio<br />
                  Salvador - BA, 40015-070
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span>(71) 99370-3911</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span>comercial@softlineinfo.com.br</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Fique Atualizado</h3>
            <p className="text-sm text-slate-400">
              Receba insights sobre tecnologia e inovação.
            </p>
            <div className="flex flex-col gap-2">
              <Input 
                type="email" 
                placeholder="Seu e-mail corporativo" 
                className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-primary"
              />
              <Button className="w-full">Inscrever-se</Button>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-slate-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Softline Sistemas. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
            <Link href="#" className="hover:text-white transition-colors">SLA</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
