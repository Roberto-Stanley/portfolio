export default function Image({
  alt,
  src,
  fill,
  width,
  height,
  className,
  ...props
}: {
  alt: string
  src?: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  [key: string]: unknown
}) {
  return <img alt={alt} src={src as string} width={width} height={height} className={className} />
}
