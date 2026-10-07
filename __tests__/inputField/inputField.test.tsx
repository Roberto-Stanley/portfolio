import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import InputField from '@/app/components/inputField'

describe('InputField', () => {
  it('renders the label text', () => {
    render(<InputField label="Email" />)
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('renders an input element', () => {
    render(<InputField label="Email" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('shows error message when error prop is provided', () => {
    render(<InputField label="Email" error="Invalid email" />)
    expect(screen.getByText('Invalid email')).toBeInTheDocument()
  })

  it('does not show error message when no error prop', () => {
    render(<InputField label="Email" />)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('applies error border class when error is present', () => {
    render(<InputField label="Email" error="Required" />)
    expect(screen.getByRole('textbox')).toHaveClass('border-red-500')
  })

  it('does not apply error border class without error', () => {
    render(<InputField label="Email" />)
    expect(screen.getByRole('textbox')).not.toHaveClass('border-red-500')
  })

  it('passes additional props to the input element', () => {
    render(<InputField label="Email" placeholder="Enter email" type="email" />)
    const input = screen.getByPlaceholderText('Enter email')
    expect(input).toHaveAttribute('type', 'email')
  })
})
