import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Menu from '@/app/components/navigation/menu'
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
    {
      title: 'Projects',
      href: '#projects',
      callToAction: false,
      variant: 'default',
      shape: 'square',
      icon: 'folder',
      iconPosition: 'right',
    },
    {
      title: 'Contact',
      href: '#contact',
      callToAction: true,
      variant: 'ghost',
      shape: 'square',
      icon: 'mail',
      iconPosition: 'right',
    },
  ],
}

describe('Menu', () => {
  it('renders all nav item titles', () => {
    render(<Menu menu={mockMenu} />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
  })

  it('renders CTA items as buttons', () => {
    render(<Menu menu={mockMenu} />)
    // Contact is a CTA item — rendered as a Button (link)
    const links = screen.getAllByRole('link')
    const contactLinks = links.filter((l) => l.getAttribute('href') === '#contact')
    expect(contactLinks.length).toBeGreaterThan(0)
  })

  it('renders as a nav element', () => {
    render(<Menu menu={mockMenu} />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('marks the active section item', () => {
    const { container } = render(<Menu menu={mockMenu} activeSection="about" />)
    const activeItems = container.querySelectorAll('.bg-secondary-light')
    expect(activeItems.length).toBeGreaterThan(0)
  })
})
