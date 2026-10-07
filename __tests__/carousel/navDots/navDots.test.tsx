import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NavDots from '@/app/components/carousel/navDots'

describe('NavDots', () => {
  const scrollTo = vi.fn()

  it('renders one button per scroll snap', () => {
    render(<NavDots current={0} scrollSnaps={[0, 1, 2]} scrollTo={scrollTo} />)
    expect(screen.getAllByRole('button')).toHaveLength(3)
  })

  it('applies active class to the current dot', () => {
    const { container } = render(
      <NavDots current={1} scrollSnaps={[0, 1, 2]} scrollTo={scrollTo} />
    )
    const buttons = container.querySelectorAll('button')
    expect(buttons[1]).toHaveClass('bg-primary')
    expect(buttons[0]).toHaveClass('bg-white/40')
    expect(buttons[2]).toHaveClass('bg-white/40')
  })

  it('calls scrollTo with the correct index when a dot is clicked', async () => {
    const user = userEvent.setup()
    render(<NavDots current={0} scrollSnaps={[0, 1, 2]} scrollTo={scrollTo} />)
    const buttons = screen.getAllByRole('button')
    await user.click(buttons[2])
    expect(scrollTo).toHaveBeenCalledWith(2)
  })

  it('renders nothing when scrollSnaps is empty', () => {
    const { container } = render(
      <NavDots current={0} scrollSnaps={[]} scrollTo={scrollTo} />
    )
    expect(container.querySelectorAll('button')).toHaveLength(0)
  })
})
