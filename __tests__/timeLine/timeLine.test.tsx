import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import TimeLine from '@/app/components/timeLine'

describe('TimeLine', () => {
  it('renders all children', () => {
    render(
      <TimeLine>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </TimeLine>
    )
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    expect(screen.getByText('Item 3')).toBeInTheDocument()
  })

  it('renders the center vertical line', () => {
    const { container } = render(
      <TimeLine>
        <div>Item</div>
      </TimeLine>
    )
    const line = container.querySelector('.absolute.left-1\\/2')
    expect(line).toBeInTheDocument()
  })

  it('pairs children into rows of two', () => {
    render(
      <TimeLine>
        <div>Left 1</div>
        <div>Right 1</div>
        <div>Left 2</div>
        <div>Right 2</div>
      </TimeLine>
    )
    expect(screen.getByText('Left 1')).toBeInTheDocument()
    expect(screen.getByText('Right 2')).toBeInTheDocument()
  })

  it('handles an odd number of children', () => {
    render(
      <TimeLine>
        <div>Only item</div>
      </TimeLine>
    )
    expect(screen.getByText('Only item')).toBeInTheDocument()
  })
})
