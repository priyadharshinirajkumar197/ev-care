import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { 
  Thermometer, 
  Navigation, 
  Battery, 
  Wind, 
  Music, 
  Phone,
  Gauge,
  Wifi,
  Bluetooth,
  Sun,
  Clock,
  MapPin,
  Zap,
  Volume2,
  SkipBack,
  SkipForward,
  Play
} from "lucide-react";
import { InfotainmentCar } from "@/components/InfotainmentCar";

// Glass Panel Component with 3D depth
const GlassPanel = ({ 
  children, 
  className = "", 
  depth = 0,
  glowColor = "primary"
}: { 
  children: React.ReactNode; 
  className?: string;
  depth?: number;
  glowColor?: "primary" | "emerald";
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [2, -2]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-2, 2]), { stiffness: 300, damping: 30 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transform: `translateZ(${depth}px)`,
      }}
      whileHover={{ 
        scale: 1.02,
        z: depth + 10,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`
        relative overflow-hidden rounded-2xl
        bg-gradient-to-br from-white/[0.08] to-white/[0.02]
        backdrop-blur-xl
        border border-white/[0.08]
        shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]
        before:absolute before:inset-0 before:rounded-2xl
        before:bg-gradient-to-br before:from-white/[0.05] before:to-transparent
        before:pointer-events-none
        after:absolute after:inset-[1px] after:rounded-2xl
        after:bg-gradient-to-b after:from-transparent after:to-black/20
        after:pointer-events-none
        ${className}
      `}
    >
      {/* Edge highlight */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
      
      {/* Subtle glow */}
      <div className={`absolute -inset-1 rounded-3xl ${glowColor === 'emerald' ? 'bg-emerald-500/5' : 'bg-primary/5'} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

// Climate Control Dial
const ClimateDial = () => {
  const [temperature, setTemperature] = useState(22);
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28 sm:w-32 sm:h-32">
        {/* Outer ring */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
          <circle
            cx="64"
            cy="64"
            r="56"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="8"
          />
          <motion.circle
            cx="64"
            cy="64"
            r="56"
            fill="none"
            stroke="url(#dialGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: (temperature - 16) / 14 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="dialGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(160, 84%, 39%)" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xs text-emerald-400 font-medium">Climate</span>
          <span className="text-xl sm:text-2xl font-bold text-foreground">{temperature}°</span>
        </div>
      </div>
      
      {/* Temperature controls */}
      <div className="flex gap-4 mt-3">
        <button 
          onClick={() => setTemperature(Math.max(16, temperature - 1))}
          className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          -
        </button>
        <button 
          onClick={() => setTemperature(Math.min(30, temperature + 1))}
          className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
};

// Speed/Range Gauge
const SpeedGauge = ({ value, max, label, unit }: { value: number; max: number; label: string; unit: string }) => {
  const percentage = (value / max) * 100;
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r="35"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="6"
          />
          <motion.circle
            cx="40"
            cy="40"
            r="35"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${percentage * 2.2} 220`}
            initial={{ strokeDasharray: "0 220" }}
            animate={{ strokeDasharray: `${percentage * 2.2} 220` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold text-foreground">{value}</span>
          <span className="text-[10px] text-muted-foreground">{unit}</span>
        </div>
      </div>
      <span className="text-xs text-muted-foreground mt-2">{label}</span>
    </div>
  );
};

const Infotainment = () => {
  const [time, setTime] = useState(new Date());
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(true);
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  
  // Parallax mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height,
        });
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-8 overflow-hidden relative">
      {/* Dashboard frame background */}
      <div className="fixed inset-0 bg-[#0a0a0c]">
        {/* Subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 0%, rgba(0,180,216,0.08) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(16,185,129,0.05) 0%, transparent 40%)`,
          }}
        />
        
        {/* Dashboard edge vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>
      
      {/* Main dashboard container with perspective */}
      <div 
        ref={containerRef}
        className="relative z-10 container mx-auto px-4"
        style={{ perspective: "2000px" }}
      >
        {/* Status bar */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-6 px-4"
          style={{
            transform: `translateX(${mousePosition.x * -5}px)`,
          }}
        >
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-xl sm:text-2xl font-light text-foreground">{formatTime(time)}</span>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Navigation className="w-4 h-4" />
              <span className="text-sm">N</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <Wifi className="w-4 h-4 text-primary" />
            <Bluetooth className="w-4 h-4 text-primary" />
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-foreground">24°</span>
            </div>
          </div>
        </motion.div>

        {/* Main dashboard grid with parallax layers */}
        <div 
          className="grid grid-cols-12 gap-3 sm:gap-4 auto-rows-min"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Left panel - Navigation */}
          <motion.div 
            className="col-span-12 lg:col-span-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              transform: `translateX(${mousePosition.x * -15}px) translateY(${mousePosition.y * -10}px) translateZ(20px)`,
            }}
          >
            <GlassPanel className="p-5 sm:p-6 h-full" depth={20}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-medium">Navigation</span>
              </div>
              
              <h2 className="text-lg sm:text-xl font-medium text-foreground mb-2 leading-relaxed">
                Traffic is low,<br />
                chance of rain 73%.<br />
                32 minutes to destination.
              </h2>
              
              {/* Route visualization */}
              <div className="mt-6 relative h-16 sm:h-20">
                <svg className="w-full h-full" viewBox="0 0 200 60">
                  <motion.path
                    d="M 10 50 Q 50 50 80 30 Q 110 10 150 20 Q 180 30 190 25"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="2"
                  />
                  <motion.path
                    d="M 10 50 Q 50 50 80 30 Q 110 10 150 20 Q 180 30 190 25"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <motion.circle
                    cx="10"
                    cy="50"
                    r="4"
                    fill="hsl(var(--primary))"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  />
                  <motion.circle
                    cx="190"
                    cy="25"
                    r="4"
                    fill="hsl(160, 84%, 39%)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2 }}
                  />
                </svg>
              </div>
              
              <div className="flex items-center gap-2 mt-4 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Arrival at 12:45 PM</span>
              </div>
            </GlassPanel>
          </motion.div>
          
          {/* Center panel - Car visualization */}
          <motion.div 
            className="col-span-12 lg:col-span-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              transform: `translateY(${mousePosition.y * -20}px) translateZ(40px)`,
            }}
          >
            <GlassPanel className="p-4 sm:p-6" depth={40}>
              {/* Car with 360 rotation effect */}
              <motion.div
                className="relative"
                animate={{
                  rotateY: [0, 3, 0, -3, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <InfotainmentCar />
              </motion.div>
              
              {/* Mini gauges below car */}
              <div className="flex justify-center gap-6 sm:gap-8 mt-4">
                <SpeedGauge value={87} max={100} label="Battery" unit="%" />
                <SpeedGauge value={240} max={400} label="Range" unit="km" />
                <SpeedGauge value={45} max={180} label="Speed" unit="km/h" />
              </div>
            </GlassPanel>
            
            {/* Quick info cards below car */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
              <motion.div
                style={{
                  transform: `translateX(${mousePosition.x * -8}px) translateZ(30px)`,
                }}
              >
                <GlassPanel className="p-3 sm:p-4" depth={30}>
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-muted-foreground">Charging</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-foreground">Fast</div>
                  <div className="text-xs text-primary">150 kW available</div>
                </GlassPanel>
              </motion.div>
              
              <motion.div
                style={{
                  transform: `translateX(${mousePosition.x * 8}px) translateZ(30px)`,
                }}
              >
                <GlassPanel className="p-3 sm:p-4" depth={30} glowColor="emerald">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <Gauge className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-muted-foreground">Efficiency</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-foreground">94%</div>
                  <div className="text-xs text-primary">Eco mode active</div>
                </GlassPanel>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right panels */}
          <motion.div 
            className="col-span-12 lg:col-span-4 space-y-3 sm:space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              transform: `translateX(${mousePosition.x * 15}px) translateY(${mousePosition.y * -10}px) translateZ(20px)`,
            }}
          >
            {/* Weather */}
            <GlassPanel className="p-4" depth={20}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-emerald-400 font-medium mb-1">Weather</div>
                  <div className="text-sm text-foreground mb-1">Partly cloudy</div>
                  <div className="text-xs text-muted-foreground">Low 17°, winds W at 15 km/h</div>
                </div>
                <div className="relative">
                  <Sun className="w-10 h-10 text-yellow-400" />
                  <motion.div 
                    className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </div>
            </GlassPanel>
            
            {/* Media player - Enhanced */}
            <GlassPanel className="p-4" depth={15}>
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-primary/30 to-emerald-500/30 flex items-center justify-center overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-emerald-500/20"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <Music className="w-6 h-6 text-foreground relative z-10" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Now Playing</div>
                  <div className="text-sm font-medium text-foreground">Ambient Drive</div>
                  <div className="text-xs text-muted-foreground">Chill Beats</div>
                </div>
              </div>
              
              {/* Playback controls */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <SkipBack className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center text-primary transition-colors"
                >
                  <Play className={`w-5 h-5 ${isPlaying ? 'opacity-100' : 'opacity-50'}`} />
                </button>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <SkipForward className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2 ml-4">
                  <Volume2 className="w-4 h-4 text-muted-foreground" />
                  <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "70%" }}
                    />
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* Quick Actions */}
            <GlassPanel className="p-4" depth={10}>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { icon: Phone, label: "Call" },
                  { icon: MapPin, label: "POI" },
                  { icon: Battery, label: "Charge" },
                  { icon: Wind, label: "A/C" },
                ].map((item, i) => (
                  <motion.button
                    key={item.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-1 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-[10px] text-muted-foreground">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
          
          {/* Bottom row - Climate and controls */}
          <motion.div 
            className="col-span-12 mt-2 sm:mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              transform: `translateY(${mousePosition.y * 10}px) translateZ(10px)`,
            }}
          >
            <GlassPanel className="p-4 sm:p-6" depth={10}>
              <div className="flex items-center justify-between flex-wrap gap-6 sm:gap-8">
                {/* Climate dial */}
                <ClimateDial />
                
                {/* Quick controls */}
                <div className="flex gap-2 sm:gap-4">
                  {[
                    { icon: Wind, label: "A/C", active: true },
                    { icon: Thermometer, label: "Heat", active: false },
                    { icon: Phone, label: "Phone", active: false },
                    { icon: MapPin, label: "Locate", active: false },
                  ].map((control) => (
                    <motion.button
                      key={control.label}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-4 rounded-xl transition-colors
                        ${control.active 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground'
                        }
                      `}
                    >
                      <control.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span className="text-[10px] sm:text-xs">{control.label}</span>
                    </motion.button>
                  ))}
                </div>
                
                {/* AC controls */}
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="text-xs sm:text-sm text-muted-foreground mb-1">MAX</div>
                    <div className="text-lg sm:text-xl font-bold text-foreground">A/C</div>
                  </div>
                  <div className="h-10 sm:h-12 w-px bg-white/10" />
                  <div className="text-center">
                    <Wind className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-1" />
                    <div className="text-lg sm:text-xl font-bold text-foreground">A/C</div>
                  </div>
                </div>
              </div>
            </GlassPanel>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Infotainment;
