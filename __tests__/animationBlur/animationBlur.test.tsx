import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import AnimationBlur from '@/app/components/animationBlur'

vi.mock('next/image', async () => ({
  default: (await import('../__mocks__/nextImage')).default,
}))

describe('AnimationBlur', () => {
  it('renders with aria-hidden', () => {
    const { container } = render(<AnimationBlur />)
    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true')
  })

  it('has fixed positioning', () => {
    const { container } = render(<AnimationBlur />)
    expect(container.firstChild).toHaveClass('fixed', 'inset-0', 'pointer-events-none')
  })

  it('renders two blur images', () => {
    const { container } = render(<AnimationBlur />)
    expect(container.querySelectorAll('img')).toHaveLength(2)
  })
})
