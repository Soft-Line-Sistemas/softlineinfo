"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Globe } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { useLanguage, type Language } from "@/lib/language-context"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Vector flag components
export const BrazilFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 504" className="w-5 h-3.5 rounded-sm object-cover shadow-sm">
    <rect width="720" height="504" fill="#009c3b"/>
    <polygon points="360,54 666,252 360,450 54,252" fill="#ffdf00"/>
    <circle cx="360" cy="252" r="112.5" fill="#002171"/>
    <path d="M 247.5 252 A 112.5 112.5 0 0 0 472.5 252 A 112.5 112.5 0 0 1 247.5 252" fill="#ffffff"/>
  </svg>
)

export const USFlag = () => (
  <svg viewBox="0 0 20 12" className="w-5 h-3.5 rounded-sm object-cover shadow-sm">
    <rect width="20" height="12" fill="#bb133e" />
    <path d="M0,1h20M0,3h20M0,5h20M0,7h20M0,9h20M0,11h20" stroke="#fff" strokeWidth="1" />
    <rect width="8" height="7" fill="#0c2340" />
    <circle cx="1.5" cy="1.5" r="0.3" fill="#fff" />
    <circle cx="3" cy="1.5" r="0.3" fill="#fff" />
    <circle cx="4.5" cy="1.5" r="0.3" fill="#fff" />
    <circle cx="6" cy="1.5" r="0.3" fill="#fff" />
    <circle cx="2.2" cy="3" r="0.3" fill="#fff" />
    <circle cx="3.7" cy="3" r="0.3" fill="#fff" />
    <circle cx="5.2" cy="3" r="0.3" fill="#fff" />
    <circle cx="1.5" cy="4.5" r="0.3" fill="#fff" />
    <circle cx="3" cy="4.5" r="0.3" fill="#fff" />
    <circle cx="4.5" cy="4.5" r="0.3" fill="#fff" />
    <circle cx="6" cy="4.5" r="0.3" fill="#fff" />
  </svg>
)

export const SpainFlag = () => (
  <svg viewBox="0 0 750 500" className="w-5 h-3.5 rounded-sm object-cover shadow-sm">
    <rect width="750" height="500" fill="#c60b1e"/>
    <rect y="125" width="750" height="250" fill="#ffc400"/>
    <circle cx="200" cy="250" r="30" fill="#c60b1e"/>
    <rect x="195" y="225" width="10" height="50" fill="#fff"/>
  </svg>
)

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const languages: { code: Language; label: string; flag: React.ComponentType }[] = [
    { code: "pt", label: "PTB", flag: BrazilFlag },
    { code: "en", label: "ENg", flag: USFlag },
    { code: "es", label: "ESP", flag: SpainFlag },
  ]

  const current = languages.find((l) => l.code === language) || languages[0]
  const ActiveFlag = current.flag

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-9 gap-2 px-2.5">
          <ActiveFlag />
          <span className="text-xs font-semibold uppercase">{current.label}</span>
          <Globe className="h-3.5 w-3.5 opacity-60" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-28">
        {languages.map((item) => {
          const ItemFlag = item.flag
          return (
            <DropdownMenuItem
              key={item.code}
              onClick={() => setLanguage(item.code)}
              className="flex items-center gap-2 cursor-pointer font-medium text-xs"
            >
              <ItemFlag />
              <span>{item.label}</span>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { t } = useLanguage()

  const navItems = [
    { name: t("nav.about"), href: "#sobre" },
    { name: t("nav.projects"), href: "#projetos" },
    { name: t("nav.contact"), href: "#contato" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-52 transition-transform hover:scale-[1.02]">
              <Image 
                src="/image/Logo Softline.png" 
                alt="Soft Line Sistemas" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center border-l pl-3 border-border hidden md:flex">
              <span className="font-bold text-base leading-none tracking-tight text-foreground/90">
                {t("nav.brand")}
              </span>
              <span className="text-[9px] text-muted-foreground font-medium mt-1 uppercase tracking-wider">
                {t("nav.subtitle")}
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <LanguageToggle />
          <ModeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageToggle />
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors py-2 border-b border-border/40"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
