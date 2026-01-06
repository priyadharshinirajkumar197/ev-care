import { motion } from "framer-motion";

interface BatteryVisualProps {
  percentage: number;
}

export const BatteryVisual = ({ percentage }: BatteryVisualProps) => {
  const clampedPercentage = Math.min(100, Math.max(0, percentage));
  
  const getColor = () => {
    if (clampedPercentage > 60) return "hsl(var(--success))";
    if (clampedPercentage > 30) return "hsl(var(--warning))";
    return "hsl(var(--destructive))";
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Battery Container */}
      <svg
        viewBox="0 0 200 100"
        className="w-full h-auto"
        style={{ filter: "drop-shadow(0 0 20px rgba(0, 212, 255, 0.2))" }}
      >
        {/* Battery Body */}
        <rect
          x="10"
          y="20"
          width="160"
          height="60"
          rx="10"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="3"
        />
        
        {/* Battery Terminal */}
        <rect
          x="170"
          y="35"
          width="15"
          height="30"
          rx="4"
          fill="hsl(var(--border))"
        />

        {/* Battery Fill */}
        <motion.rect
          x="16"
          y="26"
          height="48"
          rx="6"
          fill={getColor()}
          initial={{ width: 0 }}
          animate={{ width: (clampedPercentage / 100) * 148 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Glow Effect */}
        <motion.rect
          x="16"
          y="26"
          height="48"
          rx="6"
          fill={getColor()}
          initial={{ width: 0, opacity: 0.5 }}
          animate={{ 
            width: (clampedPercentage / 100) * 148,
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            width: { duration: 1.5, ease: "easeOut" },
            opacity: { duration: 2, repeat: Infinity }
          }}
          style={{ filter: "blur(8px)" }}
        />

        {/* Percentage Text */}
        <text
          x="90"
          y="58"
          textAnchor="middle"
          className="text-2xl font-bold"
          fill="hsl(var(--foreground))"
        >
          {clampedPercentage}%
        </text>
      </svg>

      {/* Decorative Elements */}
      <motion.div
        className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary/20"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-4 -right-4 w-6 h-6 rounded-full bg-accent/20"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
    </div>
  );
};
