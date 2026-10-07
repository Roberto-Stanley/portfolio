import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import TestimonialCard from '@/app/components/sections/testimonialSection/testimonialCard'

vi.mock('next/image', async () => ({
  default: (await import('../../__mocks__/nextImage')).default,
}))

vi.mock('react-markdown', async () => ({
  default: (await import('../../__mocks__/reactMarkdown')).default,
}))

describe('TestimonialCard', () => {
  const props = {
    name: 'Jane Doe',
    company: 'Acme Corp',
    photo: '/photos/jane.jpg',
    quote: 'Great work!',
  }

  it('renders the person name', () => {
    render(<TestimonialCard {...props} />)
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
  })

  it('renders the company name', () => {
    render(<TestimonialCard {...props} />)
    expect(screen.getByText('Acme Corp')).toBeInTheDocument()
  })

  it('renders the quote text', () => {
    render(<TestimonialCard {...props} />)
    expect(screen.getByText('Great work!')).toBeInTheDocument()
  })

  it('renders the person photo with correct alt text', () => {
    render(<TestimonialCard {...props} />)
    expect(screen.getByAltText('Jane Doe')).toBeInTheDocument()
  })
})
