import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import TypingAnimation from '@/app/components/typingAnimation'

describe('TypingAnimation', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders a span element', () => {
    const { container } = render(<TypingAnimation words={['Hello']} />)
    expect(container.querySelector('span')).toBeInTheDocument()
  })

  it('starts with empty displayed text', () => {
    const { container } = render(<TypingAnimation words={['Hello']} />)
    const span = container.querySelector('span')
    // The text content at start is just the cursor span, displayed text is ""
    expect(span?.textContent?.replace(/\s/g, '')).toBeFalsy()
  })

  it('types characters progressively with default speed', async () => {
    render(<TypingAnimation words={['Hi']} typingSpeed={100} />)
    const { container } = render(<TypingAnimation words={['Hi']} typingSpeed={100} />)
    const span = container.querySelector('span') as HTMLSpanElement

    await act(async () => {
      vi.advanceTimersByTime(100)
    })
    expect(span.textContent).toContain('H')
  })

  it('applies custom className', () => {
    const { container } = render(
      <TypingAnimation words={['Hello']} className="custom-class" />
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('applies base font classes', () => {
    const { container } = render(<TypingAnimation words={['Hello']} />)
    expect(container.firstChild).toHaveClass('font-second', 'text-4xl')
  })
})
