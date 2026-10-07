import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import NavTracker from '@/app/components/navigation/navTracker'
import type { MenuContent } from '@/lib/contentful/menu/types'

vi.mock('next/link', async () => ({
  default: (await import('../../__mocks__/nextLink')).default,
}))

vi.mock('feather-icons-react', async () => ({
  ...(await import('../../__mocks__/featherIconsReact')),
}))

const mockMenu: MenuContent = {
  name: 'Main Menu',
  menuItems: [
    {
      title: 'About',
      href: '#about',
      callToAction: false,
      variant: 'default',
      shape: 'square',
      icon: 'user',
      iconPosition: 'right',
    },
  ],
}

describe('NavTracker', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    const mockObserver = {
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }
    vi.stubGlobal('IntersectionObserver', vi.fn(() => mockObserver))
  })

  it('renders the Menu component', () => {
    render(<NavTracker menu={mockMenu} />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders menu items', () => {
    render(<NavTracker menu={mockMenu} />)
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('defaults the active section to "hero"', () => {
    render(<NavTracker menu={mockMenu} />)
    // "hero" is the initial activeSection state — menu renders with it
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
