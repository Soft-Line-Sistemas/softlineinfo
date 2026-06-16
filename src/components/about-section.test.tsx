import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { AboutSection } from "./about-section"
import { LanguageProvider } from "../lib/language-context"

describe("AboutSection", () => {
  it("renders the main heading", () => {
    render(
      <LanguageProvider>
        <AboutSection />
      </LanguageProvider>
    )
    expect(screen.getByText(/Engenharia de/i)).toBeDefined()
    expect(screen.getByText(/escala seu negócio/i)).toBeDefined()
  })

  it("renders the expertise features", () => {
    render(
      <LanguageProvider>
        <AboutSection />
      </LanguageProvider>
    )
    expect(screen.getByText("Desenvolvimento Sob Medida")).toBeDefined()
    expect(screen.getByText("ERP Enterprise")).toBeDefined()
    expect(screen.getByText("Tecnologia de Ponta")).toBeDefined()
    expect(screen.getByText("Inovação como Serviço")).toBeDefined()
  })

  it("renders the descriptive text", () => {
    render(
      <LanguageProvider>
        <AboutSection />
      </LanguageProvider>
    )
    expect(screen.getByText(/Não somos apenas desenvolvedores/i)).toBeDefined()
  })
})
