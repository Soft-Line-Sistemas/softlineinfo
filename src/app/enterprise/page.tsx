import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EnterpriseSection } from "@/components/enterprise-section"

export const metadata = {
  title: "Softline Enterprise ERP | Fábrica de Software",
  description: "O ERP definitivo para gerenciar, integrar e escalar as operações de sua empresa com segurança e alta performance.",
}

export default function EnterprisePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <EnterpriseSection />
      </main>
      <Footer />
    </div>
  )
}
