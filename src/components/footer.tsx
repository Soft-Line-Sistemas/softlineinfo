"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="w-full bg-slate-950 text-slate-200">
      <div className="container py-12 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
             <div className="flex items-center gap-3">
               <div className="relative h-14 w-52">
                  <Image 
                    src="/image/Logo Softline.png" 
                    alt="Soft Line Sistemas" 
                    fill 
                    className="object-contain brightness-0 invert"
                  />
               </div>
               <div className="flex flex-col border-l pl-3 border-slate-800">
                 <span className="font-bold text-sm leading-none tracking-tight text-white">
                   Soft Line Sistemas
                 </span>
                 <span className="text-[8px] text-slate-500 font-medium mt-1 uppercase tracking-wider">
                   {t("nav.subtitle")}
                 </span>
               </div>
             </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              {t("footer.desc")}
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

          {/* Services Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">{t("footer.services")}</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="#sobre" className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="h-3 w-3" /> {t("footer.srv.factory")}
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="h-3 w-3" /> {t("footer.srv.erp")}
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="h-3 w-3" /> {t("footer.srv.dev")}
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="h-3 w-3" /> {t("footer.srv.ecommerce")}
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-white transition-colors flex items-center gap-2">
                  <ArrowRight className="h-3 w-3" /> {t("footer.srv.consulting")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">{t("nav.contact")}</h3>
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
            <h3 className="text-lg font-semibold text-white">{t("footer.newsletter.title")}</h3>
            <p className="text-sm text-slate-400">
              {t("footer.newsletter.desc")}
            </p>
            <div className="flex flex-col gap-2">
              <Input 
                type="email" 
                placeholder={t("footer.newsletter.placeholder")} 
                className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-primary"
              />
              <Button className="w-full">{t("footer.newsletter.btn")}</Button>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-slate-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Soft Line Sistemas. {t("footer.rights")}</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">{t("footer.privacy")}</Link>
            <Link href="#" className="hover:text-white transition-colors">{t("footer.terms")}</Link>
            <Link href="#" className="hover:text-white transition-colors">SLA</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
