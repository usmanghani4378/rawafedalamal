/* Icon helper: lets data files reference icons by name (e.g. icon: "Truck"). */
import {
  Banknote,
  BadgeCheck,
  Coins,
  Hammer,
  Leaf,
  Magnet,
  MessageCircle,
  Package,
  Recycle,
  Scale,
  ShieldCheck,
  Ship,
  Tag,
  Truck,
  type LucideIcon,
} from "lucide-react";

export const iconMap = {
  Banknote,
  BadgeCheck,
  Coins,
  Hammer,
  Leaf,
  Magnet,
  MessageCircle,
  Package,
  Recycle,
  Scale,
  ShieldCheck,
  Ship,
  Tag,
  Truck,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

export function Icon({
  name,
  className,
  strokeWidth = 2,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = iconMap[name] ?? Recycle;
  return <Cmp className={className} strokeWidth={strokeWidth} />;
}
