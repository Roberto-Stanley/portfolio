import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import TechBadge from '@/app/components/techBadgesStrip/techBadge'

vi.mock('next/image', async () => ({
  default: (await import('../../__mocks__/nextImage')).default,
}))

describe('TechBadge', () => {
  it('renders an image with the badge name as alt text', () => {
    render(<TechBadge src="/img/tech.png" inset="inset-0" name="React" />)
    expect(screen.getByAltText('React')).toBeInTheDocument()
  })

  it('applies the inset class to the inner container', () => {
    const { container } = render(
      <TechBadge src="/img/tech.png" inset="inset-[0_0_0_0]" name="React" />
    )
    const inner = container.querySelector('.absolute')
    expect(inner).toHaveClass('inset-[0_0_0_0]')
  })
})
