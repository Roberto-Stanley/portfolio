import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import ExperienceCard from '@/app/components/sections/experienceSection/experienceCard'

vi.mock('next/image', async () => ({
  default: (await import('../../__mocks__/nextImage')).default,
}))

vi.mock('next/link', async () => ({
  default: (await import('../../__mocks__/nextLink')).default,
}))

vi.mock('feather-icons-react', async () => ({
  ...(await import('../../__mocks__/featherIconsReact')),
}))

vi.mock('react-markdown', async () => ({
  default: (await import('../../__mocks__/reactMarkdown')).default,
}))

const props = {
  years: '2022 – Present',
  imageSrc: '/img/company.png',
  title: 'Senior Developer',
  company: 'Acme Inc',
  location: 'Remote',
  description: 'Built many things.',
}

describe('ExperienceCard', () => {
  it('renders the job title', () => {
    render(<ExperienceCard {...props} />)
    expect(screen.getByText('Senior Developer')).toBeInTheDocument()
  })

  it('renders the company name', () => {
    render(<ExperienceCard {...props} />)
    expect(screen.getByText('Acme Inc')).toBeInTheDocument()
  })

  it('renders the location', () => {
    render(<ExperienceCard {...props} />)
    expect(screen.getByText('Remote')).toBeInTheDocument()
  })

  it('renders the years badge', () => {
    render(<ExperienceCard {...props} />)
    expect(screen.getByText('2022 – Present')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<ExperienceCard {...props} />)
    // Description is rendered twice: once for mobile, once for desktop
    expect(screen.getAllByText('Built many things.')).toHaveLength(2)
  })

  it('renders a link button when link prop is provided', () => {
    render(<ExperienceCard {...props} link="https://example.com" />)
    const links = screen.getAllByRole('link')
    expect(links.some((l) => l.getAttribute('href') === 'https://example.com')).toBe(true)
  })

  it('does not render a link button when link prop is absent', () => {
    render(<ExperienceCard {...props} />)
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('renders the company image with correct alt text', () => {
    render(<ExperienceCard {...props} />)
    expect(screen.getByAltText('Senior Developer')).toBeInTheDocument()
  })
})
