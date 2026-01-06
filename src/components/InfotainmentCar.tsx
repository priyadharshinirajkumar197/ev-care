import { motion } from "framer-motion";

export const InfotainmentCar = () => {
  return (
    <div className="relative w-full aspect-[16/9]">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="w-64 h-32 bg-primary/30 blur-[80px] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Modern EV Car SVG */}
      <motion.svg
        viewBox="0 0 400 180"
        className="w-full h-full relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <defs>
          {/* Car body gradient */}
          <linearGradient id="carBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(195, 100%, 45%)" />
            <stop offset="50%" stopColor="hsl(195, 80%, 35%)" />
            <stop offset="100%" stopColor="hsl(195, 70%, 25%)" />
          </linearGradient>
          
          {/* Window gradient */}
          <linearGradient id="windowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(200, 50%, 20%)" />
            <stop offset="100%" stopColor="hsl(200, 60%, 10%)" />
          </linearGradient>
          
          {/* Chrome accent */}
          <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(0, 0%, 70%)" />
            <stop offset="50%" stopColor="hsl(0, 0%, 90%)" />
            <stop offset="100%" stopColor="hsl(0, 0%, 60%)" />
          </linearGradient>

          {/* Headlight glow */}
          <filter id="headlightGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Taillight glow */}
          <filter id="taillightGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ground shadow */}
        <motion.ellipse
          cx="200"
          cy="160"
          rx="140"
          ry="12"
          fill="hsl(var(--primary))"
          fillOpacity="0.15"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Main car body - lower section */}
        <motion.path
          d="M50 130 
             Q50 120 60 115
             L90 110
             L110 90
             Q120 80 140 75
             L180 70
             Q200 68 220 68
             L280 70
             Q310 72 330 85
             L350 105
             Q360 115 360 125
             L360 135
             Q360 145 350 145
             L50 145
             Q50 140 50 130 Z"
          fill="url(#carBodyGradient)"
          stroke="hsl(195, 100%, 50%)"
          strokeWidth="0.5"
          strokeOpacity="0.3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Roof highlight */}
        <motion.path
          d="M115 88 Q130 78 150 74 L180 70 Q200 68 220 68 L275 70 Q295 72 315 82"
          fill="none"
          stroke="hsl(195, 100%, 70%)"
          strokeWidth="1"
          strokeOpacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Front windshield */}
        <motion.path
          d="M113 90 L130 75 Q140 72 155 72 L175 72 L175 105 L115 105 Q110 105 110 98 Z"
          fill="url(#windowGradient)"
          stroke="url(#chromeGradient)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        />

        {/* Side windows */}
        <motion.path
          d="M180 72 L180 105 L270 105 L270 72 Q235 70 200 70 Q180 70 180 72 Z"
          fill="url(#windowGradient)"
          stroke="url(#chromeGradient)"
          strokeWidth="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        />

        {/* Rear windshield */}
        <motion.path
          d="M275 72 Q295 74 312 82 L330 95 Q335 100 335 105 L275 105 Z"
          fill="url(#windowGradient)"
          stroke="url(#chromeGradient)"
          strokeWidth="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />

        {/* B-pillar */}
        <motion.line
          x1="225"
          y1="72"
          x2="225"
          y2="105"
          stroke="hsl(195, 70%, 30%)"
          strokeWidth="4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        />

        {/* Door line */}
        <motion.line
          x1="225"
          y1="105"
          x2="225"
          y2="140"
          stroke="hsl(195, 50%, 40%)"
          strokeWidth="0.5"
          strokeOpacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.2 }}
        />

        {/* Door handles */}
        <motion.rect
          x="165"
          y="115"
          width="20"
          height="4"
          rx="2"
          fill="url(#chromeGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.3 }}
        />
        <motion.rect
          x="260"
          y="115"
          width="20"
          height="4"
          rx="2"
          fill="url(#chromeGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.35 }}
        />

        {/* Side mirror */}
        <motion.ellipse
          cx="108"
          cy="95"
          rx="8"
          ry="5"
          fill="url(#carBodyGradient)"
          stroke="hsl(195, 100%, 50%)"
          strokeWidth="0.3"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4 }}
        />

        {/* Front wheel well */}
        <motion.path
          d="M75 145 Q75 115 105 115 Q135 115 135 145"
          fill="hsl(220, 20%, 8%)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        />

        {/* Front wheel */}
        <motion.circle
          cx="105"
          cy="145"
          r="26"
          fill="hsl(220, 15%, 10%)"
          stroke="hsl(220, 10%, 25%)"
          strokeWidth="4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        />
        <motion.circle
          cx="105"
          cy="145"
          r="16"
          fill="hsl(220, 10%, 15%)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.5 }}
        />
        {/* Wheel spokes */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <motion.line
            key={`front-spoke-${i}`}
            x1="105"
            y1="145"
            x2={105 + 14 * Math.cos((angle * Math.PI) / 180)}
            y2={145 + 14 * Math.sin((angle * Math.PI) / 180)}
            stroke="hsl(220, 10%, 35%)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 + i * 0.03 }}
          />
        ))}
        <motion.circle
          cx="105"
          cy="145"
          r="5"
          fill="hsl(220, 10%, 25%)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.8 }}
        />

        {/* Rear wheel well */}
        <motion.path
          d="M275 145 Q275 115 305 115 Q335 115 335 145"
          fill="hsl(220, 20%, 8%)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        />

        {/* Rear wheel */}
        <motion.circle
          cx="305"
          cy="145"
          r="26"
          fill="hsl(220, 15%, 10%)"
          stroke="hsl(220, 10%, 25%)"
          strokeWidth="4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        />
        <motion.circle
          cx="305"
          cy="145"
          r="16"
          fill="hsl(220, 10%, 15%)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.5 }}
        />
        {/* Wheel spokes */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <motion.line
            key={`rear-spoke-${i}`}
            x1="305"
            y1="145"
            x2={305 + 14 * Math.cos((angle * Math.PI) / 180)}
            y2={145 + 14 * Math.sin((angle * Math.PI) / 180)}
            stroke="hsl(220, 10%, 35%)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 + i * 0.03 }}
          />
        ))}
        <motion.circle
          cx="305"
          cy="145"
          r="5"
          fill="hsl(220, 10%, 25%)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.8 }}
        />

        {/* Headlight - LED DRL style */}
        <motion.g filter="url(#headlightGlow)">
          <motion.path
            d="M52 118 Q48 118 48 122 L48 130 Q48 134 52 134 L65 132 L70 125 L65 118 Z"
            fill="hsl(var(--primary))"
            fillOpacity="0.3"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          />
          <motion.circle
            cx="55"
            cy="126"
            r="4"
            fill="hsl(var(--primary))"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.g>

        {/* Taillight - LED strip */}
        <motion.g filter="url(#taillightGlow)">
          <motion.path
            d="M355 115 Q360 115 360 120 L360 132 Q360 137 355 137 L345 135 L340 126 L345 117 Z"
            fill="hsl(0, 80%, 50%)"
            fillOpacity="0.4"
            stroke="hsl(0, 80%, 50%)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          />
          <motion.circle
            cx="352"
            cy="126"
            r="3"
            fill="hsl(0, 80%, 55%)"
            animate={{
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          />
        </motion.g>

        {/* Charging port with glow */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <rect
            x="145"
            y="112"
            width="14"
            height="10"
            rx="2"
            fill="hsl(160, 80%, 40%)"
            fillOpacity="0.2"
            stroke="hsl(160, 80%, 45%)"
            strokeWidth="0.5"
          />
          <motion.path
            d="M152 114 L150 118 L154 118 L152 122"
            stroke="hsl(160, 80%, 50%)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.g>

        {/* Body accent line */}
        <motion.path
          d="M65 128 L140 128 M225 128 L340 128"
          stroke="hsl(195, 100%, 60%)"
          strokeWidth="0.3"
          strokeOpacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        />
      </motion.svg>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            left: `${20 + i * 15}%`,
            bottom: "30%",
          }}
          animate={{
            y: [-5, -25, -5],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
};
