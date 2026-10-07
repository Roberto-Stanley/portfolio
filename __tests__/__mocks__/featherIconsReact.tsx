export default function FeatherIcon({
  icon,
  fill,
  stroke,
}: {
  icon: string
  fill?: string
  stroke?: string
}) {
  return <span data-testid="feather-icon" data-icon={icon} data-fill={fill} data-stroke={stroke} />
}
