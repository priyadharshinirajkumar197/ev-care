import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "default" | "primary" | "success" | "warning";
  delay?: number;
}

export const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  variant = "default",
  delay = 0,
}: StatCardProps) => {
  const variants = {
    default: "border-border hover:border-primary/30",
    primary: "border-primary/30 hover:border-primary/50 glow-primary",
    success: "border-success/30 hover:border-success/50 glow-success",
    warning: "border-warning/30 hover:border-warning/50",
  };

  const iconVariants = {
    default: "text-muted-foreground bg-secondary",
    primary: "text-primary bg-primary/10",
    success: "text-success bg-success/10",
    warning: "text-warning bg-warning/10",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "card-gradient rounded-2xl p-6 border transition-all duration-300",
        variants[variant]
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={cn(
            "p-3 rounded-xl transition-colors",
            iconVariants[variant]
          )}
        >
          <Icon className="w-5 h-5" />
        </div>
        {trend && (
          <span
            className={cn(
              "text-xs font-medium px-2 py-1 rounded-full",
              trend.isPositive
                ? "text-success bg-success/10"
                : "text-destructive bg-destructive/10"
            )}
          >
            {trend.isPositive ? "+" : ""}
            {trend.value}%
          </span>
        )}
      </div>

      <p className="text-sm text-muted-foreground mb-1">{title}</p>
      <p className="text-3xl font-bold text-foreground mb-1">{value}</p>
      {subtitle && (
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      )}
    </motion.div>
  );
};
