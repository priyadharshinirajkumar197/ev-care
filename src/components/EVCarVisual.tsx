import { motion } from "framer-motion";

export const EVCarVisual = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Ambient glow behind car */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="w-80 h-40 bg-primary/20 blur-[80px] rounded-full"
          animate={{
            scale: [1, 1.1, 1],
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
        viewBox="0 0 500 220"
        className="w-full h-auto relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <defs>
          {/* Car body gradient - teal/cyan EV color */}
          <linearGradient id="evBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(185, 80%, 50%)" />
            <stop offset="50%" stopColor="hsl(185, 70%, 40%)" />
            <stop offset="100%" stopColor="hsl(185, 60%, 30%)" />
          </linearGradient>
          
          {/* Window gradient */}
          <linearGradient id="evWindowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(200, 50%, 25%)" />
            <stop offset="100%" stopColor="hsl(200, 60%, 12%)" />
          </linearGradient>
          
          {/* Chrome/silver accent */}
          <linearGradient id="evChromeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(0, 0%, 75%)" />
            <stop offset="50%" stopColor="hsl(0, 0%, 90%)" />
            <stop offset="100%" stopColor="hsl(0, 0%, 65%)" />
          </linearGradient>
        </defs>

        {/* Ground shadow */}
        <motion.ellipse
          cx="250"
          cy="195"
          rx="180"
          ry="12"
          fill="hsl(var(--primary))"
          fillOpacity="0.15"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Main car body */}
        <motion.path
          d="M55 155
             L55 130
             L75 130
             L95 95
             Q100 88 115 85
             L180 75
             Q200 72 220 72
             L320 72
             Q350 72 375 82
             L420 100
             Q435 108 440 125
             L445 135
             L445 155
             Q445 165 435 165
             L65 165
             Q55 165 55 155 Z"
          fill="url(#evBodyGradient)"
          stroke="hsl(185, 100%, 60%)"
          strokeWidth="1"
          strokeOpacity="0.3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Roof highlight */}
        <motion.path
          d="M115 85 L180 75 Q200 72 220 72 L320 72 Q350 72 375 82"
          fill="none"
          stroke="hsl(185, 100%, 70%)"
          strokeWidth="1"
          strokeOpacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Front windshield */}
        <motion.path
          d="M98 95 L115 78 Q120 74 135 74 L175 74 L175 115 L105 115 Q98 115 98 108 Z"
          fill="url(#evWindowGradient)"
          stroke="url(#evChromeGradient)"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />

        {/* Rear windshield */}
        <motion.path
          d="M320 74 Q345 74 365 82 L400 98 Q408 102 408 112 L408 115 L320 115 L320 74 Z"
          fill="url(#evWindowGradient)"
          stroke="url(#evChromeGradient)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        />

        {/* Side windows */}
        <motion.path
          d="M185 74 L185 115 L310 115 L310 74 Q260 72 220 72 Q200 72 185 74 Z"
          fill="url(#evWindowGradient)"
          stroke="url(#evChromeGradient)"
          strokeWidth="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        />

        {/* B-pillar */}
        <motion.line
          x1="245"
          y1="74"
          x2="245"
          y2="115"
          stroke="hsl(185, 60%, 35%)"
          strokeWidth="4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.4 }}
        />

        {/* Door line */}
        <motion.path
          d="M245 115 L245 155"
          stroke="hsl(185, 50%, 45%)"
          strokeWidth="1"
          strokeOpacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />

        {/* Door handles */}
        <motion.rect
          x="180"
          y="128"
          width="25"
          height="5"
          rx="2"
          fill="url(#evChromeGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.8 }}
        />
        <motion.rect
          x="295"
          y="128"
          width="25"
          height="5"
          rx="2"
          fill="url(#evChromeGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.9 }}
        />

        {/* Front wheel well */}
        <motion.path
          d="M85 165 Q85 130 120 130 Q155 130 155 165"
          fill="hsl(220, 20%, 8%)"
          stroke="hsl(185, 60%, 35%)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        />

        {/* Front wheel */}
        <motion.circle
          cx="120"
          cy="165"
          r="32"
          fill="hsl(220, 15%, 10%)"
          stroke="hsl(220, 10%, 30%)"
          strokeWidth="6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
        <motion.circle
          cx="120"
          cy="165"
          r="20"
          fill="hsl(220, 10%, 18%)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.7 }}
        />
        {/* Wheel spokes */}
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <motion.line
            key={`front-${i}`}
            x1="120"
            y1="165"
            x2={120 + 18 * Math.cos((angle * Math.PI) / 180)}
            y2={165 + 18 * Math.sin((angle * Math.PI) / 180)}
            stroke="hsl(220, 10%, 40%)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.9 + i * 0.05 }}
          />
        ))}
        <motion.circle
          cx="120"
          cy="165"
          r="6"
          fill="hsl(220, 10%, 30%)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2, delay: 2 }}
        />

        {/* Rear wheel well */}
        <motion.path
          d="M345 165 Q345 130 380 130 Q415 130 415 165"
          fill="hsl(220, 20%, 8%)"
          stroke="hsl(185, 60%, 35%)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        />

        {/* Rear wheel */}
        <motion.circle
          cx="380"
          cy="165"
          r="32"
          fill="hsl(220, 15%, 10%)"
          stroke="hsl(220, 10%, 30%)"
          strokeWidth="6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
        <motion.circle
          cx="380"
          cy="165"
          r="20"
          fill="hsl(220, 10%, 18%)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.7 }}
        />
        {/* Wheel spokes */}
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <motion.line
            key={`rear-${i}`}
            x1="380"
            y1="165"
            x2={380 + 18 * Math.cos((angle * Math.PI) / 180)}
            y2={165 + 18 * Math.sin((angle * Math.PI) / 180)}
            stroke="hsl(220, 10%, 40%)"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.9 + i * 0.05 }}
          />
        ))}
        <motion.circle
          cx="380"
          cy="165"
          r="6"
          fill="hsl(220, 10%, 30%)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2, delay: 2 }}
        />

        {/* Headlight - LED style */}
        <motion.path
          d="M55 128 Q52 128 52 132 L52 142 Q52 146 55 146 L68 146 L75 140 L75 134 L68 128 Z"
          fill="hsl(var(--primary))"
          fillOpacity="0.3"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        />
        <motion.ellipse
          cx="60"
          cy="137"
          rx="5"
          ry="4"
          fill="hsl(var(--primary))"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
        />

        {/* Taillight - LED style */}
        <motion.path
          d="M440 128 Q445 128 445 132 L445 148 Q445 152 440 152 L428 152 L420 142 L420 138 L428 128 Z"
          fill="hsl(0, 80%, 50%)"
          fillOpacity="0.3"
          stroke="hsl(0, 80%, 50%)"
          strokeWidth="1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        />
        <motion.ellipse
          cx="435"
          cy="140"
          rx="4"
          ry="6"
          fill="hsl(0, 80%, 55%)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2.5 }}
        />

        {/* Side mirror */}
        <motion.ellipse
          cx="92"
          cy="105"
          rx="8"
          ry="5"
          fill="url(#evBodyGradient)"
          stroke="hsl(185, 100%, 60%)"
          strokeWidth="0.5"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6 }}
        />

        {/* Charging port with glow */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <rect
            x="155"
            y="125"
            width="18"
            height="14"
            rx="3"
            fill="hsl(160, 80%, 40%)"
            fillOpacity="0.2"
            stroke="hsl(160, 80%, 45%)"
            strokeWidth="1"
          />
          <motion.path
            d="M164 128 L162 133 L166 133 L164 138"
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
          d="M75 140 L155 140 M245 140 L345 140"
          stroke="hsl(185, 100%, 65%)"
          strokeWidth="0.5"
          strokeOpacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        />
      </motion.svg>

      {/* Floating particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/30"
          style={{
            left: `${25 + i * 15}%`,
            bottom: "25%",
          }}
          animate={{
            y: [-5, -20, -5],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2.5 + i * 0.4,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};
