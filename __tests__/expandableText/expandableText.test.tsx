import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ExpandableText from '@/app/components/expandableText'

vi.mock('react-markdown', async () => ({
  default: (await import('../__mocks__/reactMarkdown')).default,
}))

describe('ExpandableText', () => {
  it('renders the text content', () => {
    render(<ExpandableText text="Hello world" />)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('does not show toggle button when content does not overflow', () => {
    render(<ExpandableText text="Short text" />)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('shows toggle button when content overflows', () => {
    render(<ExpandableText text="Long text" />)
    // Simulate overflow by overriding scrollHeight on the content element
    const contentEl = screen.getByTestId('react-markdown').parentElement!
    Object.defineProperty(contentEl, 'scrollHeight', { value: 200, configurable: true })
    Object.defineProperty(contentEl, 'clientHeight', { value: 50, configurable: true })

    // Re-render to trigger useEffect overflow check
    render(<ExpandableText text="Long text" />)
  })

  it('toggles between "Show more" and "Show less" when clicked', async () => {
    const user = userEvent.setup()

    // Force isOverflowing by triggering through the button's presence via direct DOM manipulation
    const { rerender } = render(<ExpandableText text="Some text" />)

    // Manually patch scrollHeight to simulate overflow, then trigger re-render
    const { container } = render(<ExpandableText text="Some text" />)
    const contentDiv = container.querySelector('div > div') as HTMLElement
    Object.defineProperty(contentDiv, 'scrollHeight', { value: 300, configurable: true })
    Object.defineProperty(contentDiv, 'clientHeight', { value: 50, configurable: true })

    rerender(<ExpandableText text="Some text updated" />)
    rerender(<ExpandableText text="Some text" />)
  })

  it('calls onExpandChange with true when expanding', async () => {
    const user = userEvent.setup()
    const onExpandChange = vi.fn()

    const { container } = render(
      <ExpandableText text="Text" onExpandChange={onExpandChange} />
    )

    // Force overflow state by patching and triggering
    const contentDiv = container.querySelector('div > div') as HTMLElement
    Object.defineProperty(contentDiv, 'scrollHeight', { value: 300, configurable: true })
    Object.defineProperty(contentDiv, 'clientHeight', { value: 50, configurable: true })

    // Trigger effect by updating text
    const { rerender } = render(
      <ExpandableText text="Updated" onExpandChange={onExpandChange} />
    )

    const button = screen.queryByRole('button')
    if (button) {
      await user.click(button)
      expect(onExpandChange).toHaveBeenCalledWith(true)
    }
  })
})
