import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import StatItem from '@/app/components/statItem'

describe('StatItem', () => {
  it('renders the value', () => {
    render(<StatItem value="42" label="projects" />)
    expect(screen.getByText('42')).toBeInTheDocument()
  })

  it('renders the label', () => {
    render(<StatItem value="42" label="projects" />)
    expect(screen.getByText('projects')).toBeInTheDocument()
  })

  it('renders in a flex column container', () => {
    const { container } = render(<StatItem value="5" label="years" />)
    expect(container.firstChild).toHaveClass('flex', 'flex-col')
  })
})
