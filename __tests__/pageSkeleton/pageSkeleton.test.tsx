import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import PageSkeleton from '@/app/components/pageSkeleton'

vi.mock('next/image', async () => ({
  default: (await import('../__mocks__/nextImage')).default,
}))

describe('PageSkeleton', () => {
  it('renders a main element', () => {
    render(<PageSkeleton />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('applies pulse animation class', () => {
    render(<PageSkeleton />)
    expect(screen.getByRole('main')).toHaveClass('animate-pulse')
  })

  it('renders multiple skeleton blocks', () => {
    const { container } = render(<PageSkeleton />)
    const blocks = container.querySelectorAll('.bg-background-decorative.rounded-lg')
    expect(blocks.length).toBeGreaterThan(5)
  })
})
