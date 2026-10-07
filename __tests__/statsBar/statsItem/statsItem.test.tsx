import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import StatsItem from '@/app/components/statsBar/statsItem'

vi.mock('feather-icons-react', async () => ({
  default: (await import('../../__mocks__/featherIconsReact')).default,
}))

describe('StatsItem', () => {
  it('renders the value', () => {
    render(<StatsItem value="5+" label="Years of experience" />)
    expect(screen.getByText('5+')).toBeInTheDocument()
  })

  it('renders the label', () => {
    render(<StatsItem value="5+" label="Years of experience" />)
    expect(screen.getByText('Years of experience')).toBeInTheDocument()
  })

  it('renders icon when icon prop is provided', () => {
    render(<StatsItem value="10" label="Projects" icon="briefcase" />)
    expect(screen.getByTestId('feather-icon')).toBeInTheDocument()
  })

  it('does not render icon when icon prop is absent', () => {
    render(<StatsItem value="10" label="Projects" />)
    expect(screen.queryByTestId('feather-icon')).not.toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(
      <StatsItem value="10" label="Projects" className="custom-class" />
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
