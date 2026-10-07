import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Container from '@/app/components/container'

describe('Container', () => {
  it('renders children', () => {
    render(<Container>Hello</Container>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('applies responsive max-width and margin classes', () => {
    const { container } = render(<Container>Content</Container>)
    expect(container.firstChild).toHaveClass('md:max-w-5xl', 'mx-auto')
  })

  it('merges custom className', () => {
    const { container } = render(<Container className="custom-class">Content</Container>)
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
