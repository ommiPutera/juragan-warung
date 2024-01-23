import { LucideProps, icons } from "lucide-react";

function Icon({ name, ...props }: LucideProps & { name: keyof typeof icons }) {
  const LucideIcon = icons[name];
  return <LucideIcon {...props} />;
}

export { Icon };
