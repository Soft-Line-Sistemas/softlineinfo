import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { AboutSection } from "./about-section"

describe("AboutSection", () => {
  it("renders the main heading", () => {
    render(<AboutSection />)
    expect(screen.getByText("Tecnologia que Protege seu Negócio")).toBeDefined()
  })

  it("renders the three expertise pillars", () => {
    render(<AboutSection />)
    expect(screen.getByText("Compliance Fiscal Rigoroso")).toBeDefined()
    expect(screen.getByText("Especialistas em Saúde (TISS)")).toBeDefined()
    expect(screen.getByText("Alta Performance e Escala")).toBeDefined()
  })

  it("renders the descriptive text", () => {
    render(<AboutSection />)
    expect(screen.getByText(/Mais do que software, entregamos segurança operacional/i)).toBeDefined()
  })
})
