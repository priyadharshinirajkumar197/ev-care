import { motion } from "framer-motion";
import { LucideIcon, Lightbulb, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

type InsightType = "tip" | "warning" | "success" | "info";

interface InsightCardProps {
  type: InsightType;
  title: string;
  description: string;
  icon?: LucideIcon;
  delay?: number;
}

const typeConfig: Record<InsightType, { icon: LucideIcon; colors: string; iconBg: string }> = {
  tip: {
    icon: Lightbulb,
    colors: "border-primary/30 hover:border-primary/50",
    iconBg: "bg-primary/10 text-primary",
  },
  warning: {
    icon: AlertTriangle,
    colors: "border-warning/30 hover:border-warning/50",
    iconBg: "bg-warning/10 text-warning",
  },
  success: {
    icon: CheckCircle,
    colors: "border-success/30 hover:border-success/50",
    iconBg: "bg-success/10 text-success",
  },
  info: {
    icon: Info,
    colors: "border-accent/30 hover:border-accent/50",
    iconBg: "bg-accent/10 text-accent",
  },
};

export const InsightCard = ({
  type,
  title,
  description,
  icon,
  delay = 0,
}: InsightCardProps) => {
  const config = typeConfig[type];
  const Icon = icon || config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ x: 8, transition: { duration: 0.2 } }}
      className={cn(
        "card-gradient rounded-xl p-5 border transition-all duration-300 cursor-default",
        config.colors
      )}
    >
      <div className="flex items-start gap-4">
        <div className={cn("p-2.5 rounded-lg shrink-0", config.iconBg)}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
