import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NavArrow from '@/app/components/carousel/navArrow'

vi.mock('feather-icons-react', async () => ({
  ...(await import('../../__mocks__/featherIconsReact')),
}))

describe('NavArrow', () => {
  it('renders a button', () => {
    render(<NavArrow direction="right" onClick={vi.fn()} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<NavArrow direction="right" onClick={onClick} />)
    await user.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it('applies rotate-180 class for left direction', () => {
    render(<NavArrow direction="left" onClick={vi.fn()} />)
    expect(screen.getByTestId('feather-arrow-right')).toHaveClass('rotate-180')
  })

  it('does not apply rotate-180 class for right direction', () => {
    render(<NavArrow direction="right" onClick={vi.fn()} />)
    expect(screen.getByTestId('feather-arrow-right')).not.toHaveClass('rotate-180')
  })
})
