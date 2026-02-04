"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            size="lg"
            className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all p-0"
            asChild
          >
            <a
              href="https://wa.me/5571993703911"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp"
            >
              <MessageCircle className="h-8 w-8 text-white" />
            </a>
          </Button>
          <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap bg-background/90 text-foreground px-3 py-1.5 rounded-md text-sm font-medium shadow-sm border opacity-0 hover:opacity-100 transition-opacity pointer-events-none group-hover:opacity-100 hidden md:block">
            Fale conosco
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
