import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import FakeTooltip from '@/app/components/fakeTooltip'

vi.mock('next/image', async () => ({
  default: (await import('../__mocks__/nextImage')).default,
}))

describe('FakeTooltip', () => {
  it('renders the label text', () => {
    render(<FakeTooltip label="React" ml={10} mt={20} />)
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('applies ml and mt as inline styles', () => {
    const { container } = render(<FakeTooltip label="React" ml={50} mt={100} />)
    const el = container.firstChild as HTMLElement
    expect(el.style.marginLeft).toBe('50px')
    expect(el.style.marginTop).toBe('100px')
  })
})
