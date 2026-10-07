export default function FeatherIcon({
  icon,
  fill,
  stroke,
  size,
  color,
  strokeWidth,
  className,
}: {
  icon?: string
  fill?: string
  stroke?: string
  size?: number
  color?: string
  strokeWidth?: number
  className?: string
}) {
  return <span data-testid="feather-icon" data-icon={icon} className={className} />
}

export function ArrowRight({ size, className }: { size?: number; className?: string }) {
  return <span data-testid="feather-arrow-right" className={className} />
}

export function MapPin({ size, className }: { size?: number; className?: string }) {
  return <span data-testid="feather-map-pin" className={className} />
}
