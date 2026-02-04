import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ContactSection } from './contact-section'
import { describe, it, expect, vi } from 'vitest'

// Mock sonner toast
vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}))

// Mock global fetch
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ message: 'Email enviado com sucesso!' }),
  } as Response)
);

describe('ContactSection', () => {
  // Reset mocks before each test
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders contact form fields', () => {
    render(<ContactSection />)
    
    expect(screen.getByLabelText(/Nome/i)).toBeDefined()
    expect(screen.getByLabelText(/Email/i)).toBeDefined()
    expect(screen.getByLabelText(/Telefone/i)).toBeDefined()
    expect(screen.getByLabelText(/Assunto/i)).toBeDefined()
    expect(screen.getByLabelText(/Mensagem/i)).toBeDefined()
    expect(screen.getByRole('button', { name: /Enviar Mensagem/i })).toBeDefined()
  })

  it('shows validation errors for empty required fields', async () => {
    render(<ContactSection />)
    
    const submitButton = screen.getByRole('button', { name: /Enviar Mensagem/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/O nome deve ter pelo menos 2 caracteres/i)).toBeDefined()
      expect(screen.getByText(/Por favor, insira um email válido/i)).toBeDefined()
    })
  })

  it('submits form with valid data', async () => {
    render(<ContactSection />)
    
    fireEvent.change(screen.getByLabelText(/Nome/i), { target: { value: 'John Doe' } })
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText(/Telefone/i), { target: { value: '11999999999' } })
    fireEvent.change(screen.getByLabelText(/Assunto/i), { target: { value: 'Orçamento' } })
    fireEvent.change(screen.getByLabelText(/Mensagem/i), { target: { value: 'Gostaria de um orçamento para o sistema.' } })

    const submitButton = screen.getByRole('button', { name: /Enviar Mensagem/i })
    fireEvent.click(submitButton)

    // Since we mocked toast, we could check if it was called, but testing-library focus on user visible changes.
    // In this component, the success state is a toast. 
    // We can check if the inputs are cleared or just rely on the lack of error messages + toast call.
    
    await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledTimes(1)
        expect(screen.queryByText(/O nome deve ter pelo menos 2 caracteres/i)).toBeNull()
    })
  })
})
