export type StatsItemProps = {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  value: string;
  label: string;
  dividerAfter?: boolean;
  className?: string;
};
