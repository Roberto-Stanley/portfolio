import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Badge from '@/app/components/badge'

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>Test Badge</Badge>)
    expect(screen.getByText('Test Badge')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Badge className="custom-class">Badge</Badge>)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('has default styling classes', () => {
    const { container } = render(<Badge>Badge</Badge>)
    expect(container.firstChild).toHaveClass('bg-primary-active', 'rounded-full')
  })
})
