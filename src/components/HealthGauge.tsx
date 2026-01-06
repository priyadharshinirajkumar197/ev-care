import { motion } from "framer-motion";

interface HealthGaugeProps {
  value: number;
  label: string;
  maxValue?: number;
  unit?: string;
}

export const HealthGauge = ({
  value,
  label,
  maxValue = 100,
  unit = "%",
}: HealthGaugeProps) => {
  const percentage = (value / maxValue) * 100;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference * 0.75;

  const getColor = () => {
    if (percentage > 70) return "hsl(var(--success))";
    if (percentage > 40) return "hsl(var(--warning))";
    return "hsl(var(--destructive))";
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <svg className="w-full h-full transform -rotate-[135deg]" viewBox="0 0 100 100">
          {/* Background arc */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`}
          />
          {/* Progress arc */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={getColor()}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ filter: `drop-shadow(0 0 8px ${getColor()})` }}
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-2xl font-bold text-foreground"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {value}
            <span className="text-lg text-muted-foreground">{unit}</span>
          </motion.span>
        </div>
      </div>
      <p className="mt-2 text-sm text-muted-foreground text-center">{label}</p>
    </div>
  );
};
