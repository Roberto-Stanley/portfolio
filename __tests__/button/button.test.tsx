import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Button from '@/app/components/button'

vi.mock('next/link', async () => ({
  default: (await import('../__mocks__/nextLink')).default,
}))

vi.mock('feather-icons-react', async () => ({
  default: (await import('../__mocks__/featherIconsReact')).default,
}))

describe('Button', () => {
  it('renders as a button element when no href is provided', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders children text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders as a link when href is provided', () => {
    render(<Button href="/about">Go to About</Button>)
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/about')
  })

  it('renders icon when icon prop is provided', () => {
    render(<Button icon="arrow-right">With Icon</Button>)
    expect(screen.getByTestId('feather-icon')).toBeInTheDocument()
  })

  it('does not render icon when icon prop is not provided', () => {
    render(<Button>No Icon</Button>)
    expect(screen.queryByTestId('feather-icon')).not.toBeInTheDocument()
  })

  it('applies ghost variant classes', () => {
    const { container } = render(<Button variant="ghost">Ghost</Button>)
    expect(container.querySelector('div')).toHaveClass('bg-white/10')
  })

  it('applies default variant classes', () => {
    const { container } = render(<Button>Default</Button>)
    expect(container.querySelector('div')).toHaveClass('bg-secondary-alt')
  })

  it('applies small size classes when size is "s"', () => {
    const { container } = render(<Button size="s">Small</Button>)
    expect(container.querySelector('div')).toHaveClass('px-2', 'py-1')
  })

  it('applies medium size classes when size is "m" (default)', () => {
    const { container } = render(<Button>Medium</Button>)
    expect(container.querySelector('div')).toHaveClass('px-4', 'py-2')
  })

  it('renders rounded shape with full rounded classes', () => {
    const { container } = render(<Button shape="rounded" icon="x" />)
    expect(container.querySelector('div')).toHaveClass('rounded-full')
  })
})
