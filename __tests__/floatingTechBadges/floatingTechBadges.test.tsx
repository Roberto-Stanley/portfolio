import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import FloatingTechBadges from '@/app/components/floatingTechBadges'

vi.mock('feather-icons-react', async () => ({
  default: (await import('../__mocks__/featherIconsReact')).default,
}))

describe('FloatingTechBadges', () => {
  it('renders all badge labels', () => {
    render(<FloatingTechBadges />)
    expect(screen.getByText('MySQL')).toBeInTheDocument()
    expect(screen.getByText('React Native')).toBeInTheDocument()
    expect(screen.getByText('MongoDB')).toBeInTheDocument()
    expect(screen.getByText('DevOps')).toBeInTheDocument()
    expect(screen.getByText('Vue.js')).toBeInTheDocument()
    expect(screen.getByText('Next.js')).toBeInTheDocument()
    expect(screen.getByText('Express.js')).toBeInTheDocument()
  })

  it('renders an icon for each badge', () => {
    render(<FloatingTechBadges />)
    expect(screen.getAllByTestId('feather-icon')).toHaveLength(7)
  })

  it('applies custom className to the container', () => {
    const { container } = render(<FloatingTechBadges className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
