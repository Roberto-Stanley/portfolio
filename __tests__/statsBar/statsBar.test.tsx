import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import StatsBar from '@/app/components/statsBar'
import type { StatContent } from '@/lib/contentful/experiencesSection/types'

vi.mock('feather-icons-react', async () => ({
  default: (await import('../__mocks__/featherIconsReact')).default,
}))

const mockStats: StatContent[] = [
  { value: '5+', label: 'Years of experience', icon: 'clock' },
  { value: '20+', label: 'Projects completed', icon: 'folder' },
  { value: '10+', label: 'Happy clients', icon: 'smile' },
]

describe('StatsBar', () => {
  it('renders all stat values', () => {
    render(<StatsBar stats={mockStats} />)
    expect(screen.getAllByText('5+')).toHaveLength(2) // desktop + mobile views
    expect(screen.getAllByText('20+')).toHaveLength(2)
  })

  it('renders all stat labels', () => {
    render(<StatsBar stats={mockStats} />)
    expect(screen.getAllByText('Years of experience')).toHaveLength(2)
  })

  it('handles an odd number of stats without error', () => {
    const oddStats = mockStats.slice(0, 1)
    render(<StatsBar stats={oddStats} />)
    expect(screen.getAllByText('5+')).toHaveLength(2)
  })
})
