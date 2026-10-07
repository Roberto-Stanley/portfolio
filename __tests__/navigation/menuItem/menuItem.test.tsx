import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import MenuItem from '@/app/components/navigation/menuItem'

vi.mock('next/link', async () => ({
  default: (await import('../../__mocks__/nextLink')).default,
}))

vi.mock('feather-icons-react', async () => ({
  ...(await import('../../__mocks__/featherIconsReact')),
}))

describe('MenuItem', () => {
  it('renders the children text', () => {
    render(<MenuItem href="#about" icon="user">About</MenuItem>)
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders as a link with the correct href', () => {
    render(<MenuItem href="#about" icon="user">About</MenuItem>)
    expect(screen.getByRole('link')).toHaveAttribute('href', '#about')
  })

  it('applies active styles when active is true', () => {
    const { container } = render(
      <MenuItem href="#about" icon="user" active>About</MenuItem>
    )
    const inner = container.querySelector('div')
    expect(inner).toHaveClass('bg-secondary-light', 'border-secondary-alt')
  })

  it('does not apply active styles when active is false', () => {
    const { container } = render(
      <MenuItem href="#about" icon="user" active={false}>About</MenuItem>
    )
    const inner = container.querySelector('div')
    expect(inner).not.toHaveClass('bg-secondary-light')
  })

  it('renders the active dot indicator when active is true', () => {
    const { container } = render(
      <MenuItem href="#about" icon="user" active>About</MenuItem>
    )
    expect(container.querySelector('.bg-secondary.rounded-full')).toBeInTheDocument()
  })

  it('does not render the active dot when not active', () => {
    const { container } = render(
      <MenuItem href="#about" icon="user">About</MenuItem>
    )
    expect(container.querySelector('.bg-secondary.rounded-full')).not.toBeInTheDocument()
  })

  it('renders the icon for mobile view', () => {
    render(<MenuItem href="#about" icon="user">About</MenuItem>)
    expect(screen.getByTestId('feather-icon')).toBeInTheDocument()
  })
})
