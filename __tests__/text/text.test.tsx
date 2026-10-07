import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Text from '@/app/components/text'

describe('Text', () => {
  it('renders children', () => {
    render(<Text type="body">Hello World</Text>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('renders as a paragraph by default', () => {
    const { container } = render(<Text type="body">Content</Text>)
    expect(container.querySelector('p')).toBeInTheDocument()
  })

  it('renders with a custom tag', () => {
    const { container } = render(<Text type="body" tag="span">Content</Text>)
    expect(container.querySelector('span')).toBeInTheDocument()
  })

  it('applies title classes for type="title"', () => {
    const { container } = render(<Text type="title">Title</Text>)
    expect(container.firstChild).toHaveClass('font-second', 'text-4xl')
  })

  it('applies sub-title classes for type="sub-title"', () => {
    const { container } = render(<Text type="sub-title">Subtitle</Text>)
    expect(container.firstChild).toHaveClass('font-alternative', 'text-sm')
  })

  it('applies body classes for type="body"', () => {
    const { container } = render(<Text type="body">Body text</Text>)
    expect(container.firstChild).toHaveClass('font-primary', 'text-base')
  })

  it('applies sub-body classes for type="sub-body"', () => {
    const { container } = render(<Text type="sub-body">Sub body</Text>)
    expect(container.firstChild).toHaveClass('font-primary', 'text-xs')
  })

  it('applies heading classes for type="heading"', () => {
    const { container } = render(<Text type="heading">Heading</Text>)
    expect(container.firstChild).toHaveClass('font-primary', 'text-3xl')
  })

  it('applies weight class', () => {
    const { container } = render(<Text type="body" weight="bold">Bold text</Text>)
    expect(container.firstChild).toHaveClass('font-bold')
  })

  it('applies typing animation classes when typingAnimation is true', () => {
    const { container } = render(<Text type="body" typingAnimation>Typing</Text>)
    expect(container.firstChild).toHaveClass('animate-typing-loop', 'overflow-hidden')
  })

  it('merges custom className', () => {
    const { container } = render(<Text type="body" className="custom-class">Content</Text>)
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
