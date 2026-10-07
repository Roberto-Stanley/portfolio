import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Card from '@/app/components/card'

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('has default card styling classes', () => {
    const { container } = render(<Card>Card</Card>)
    expect(container.firstChild).toHaveClass('bg-background-decorative', 'rounded-[1rem]', 'border')
  })

  it('merges custom className', () => {
    const { container } = render(<Card className="custom-class">Card</Card>)
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
