import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from '@/app/components/contactForm'

vi.mock('next/link', async () => ({
  default: (await import('../__mocks__/nextLink')).default,
}))

vi.mock('feather-icons-react', async () => ({
  default: (await import('../__mocks__/featherIconsReact')).default,
}))

vi.mock('@/app/actions', () => ({
  sendContactInfo: vi.fn().mockResolvedValue({ success: true }),
}))

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Last name')).toBeInTheDocument()
    expect(screen.getByText('Email Address')).toBeInTheDocument()
    expect(screen.getByText('Phone Number')).toBeInTheDocument()
    expect(screen.getByText('Message')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('shows validation errors when submitted with empty fields', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    await user.click(screen.getByRole('button', { name: /submit/i }))
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument()
    })
  })

  it('shows success message after successful submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByPlaceholderText('John'), 'Jane')
    await user.type(screen.getByPlaceholderText('Doe'), 'Smith')
    await user.type(screen.getByPlaceholderText('john@gmail.com'), 'jane@example.com')
    await user.type(screen.getByPlaceholderText('Your message...'), 'Hello there')

    await user.click(screen.getByRole('button', { name: /submit/i }))

    await waitFor(() => {
      expect(screen.getByText('Message sent!')).toBeInTheDocument()
    })
  })

  it('shows error message when submission fails', async () => {
    const { sendContactInfo } = await import('@/app/actions')
    vi.mocked(sendContactInfo).mockResolvedValueOnce({
      success: false,
      error: 'Server error',
    })

    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByPlaceholderText('John'), 'Jane')
    await user.type(screen.getByPlaceholderText('Doe'), 'Smith')
    await user.type(screen.getByPlaceholderText('john@gmail.com'), 'jane@example.com')
    await user.type(screen.getByPlaceholderText('Your message...'), 'Hello there')

    await user.click(screen.getByRole('button', { name: /submit/i }))

    await waitFor(() => {
      expect(screen.getByText('Server error')).toBeInTheDocument()
    })
  })
})
