import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import TechBadgesStrip from '@/app/components/techBadgesStrip'

vi.mock('next/image', async () => ({
  default: (await import('../__mocks__/nextImage')).default,
}))

describe('TechBadgesStrip', () => {
  it('renders all badge names (duplicated for marquee)', () => {
    render(<TechBadgesStrip />)
    // Each badge name appears twice (original + duplicate for infinite scroll)
    expect(screen.getAllByAltText('React')).toHaveLength(2)
    expect(screen.getAllByAltText('Docker')).toHaveLength(2)
  })

  it('applies marquee animation class', () => {
    const { container } = render(<TechBadgesStrip />)
    expect(container.querySelector('.animate-marquee')).toBeInTheDocument()
  })

  it('applies custom className to the outer wrapper', () => {
    const { container } = render(<TechBadgesStrip className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
