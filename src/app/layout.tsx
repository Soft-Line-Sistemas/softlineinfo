import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { ServiceWorkerRegister } from "@/components/service-worker-register";
import { Analytics } from "@/components/analytics";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Softline Sistemas | Fábrica de Software & Enterprise ERP",
  description: "Transformamos ideias em software de alta performance. Fábrica de software, desenvolvimento sob medida, sistemas SaaS e ERP Enterprise para escalar seu negócio.",
  keywords: ["fábrica de software", "desenvolvimento web", "app mobile", "erp", "saas", "compliance fiscal", "software sob medida", "tecnologia"],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/image/Logo Softline.png", href: "/image/Logo Softline.png" },
      { url: "/logo.svg", href: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/image/Logo Softline.png",
    apple: "/image/Logo Softline.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <ServiceWorkerRegister />
          <Analytics />
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
