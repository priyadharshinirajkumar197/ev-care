import { motion } from "framer-motion";
import { TipCard } from "@/components/TipCard";
import {
  Battery,
  Thermometer,
  Zap,
  Car,
  Wind,
  Sun,
  Snowflake,
  Gauge,
  Clock,
  Shield,
} from "lucide-react";

const tips = [
  {
    icon: Battery,
    title: "Keep Battery Between 20-80%",
    description:
      "For daily use, maintaining charge between 20% and 80% significantly extends battery life. Only charge to 100% for long trips.",
  },
  {
    icon: Thermometer,
    title: "Avoid Extreme Temperatures",
    description:
      "Park in shade during summer and use climate preconditioning in winter. Extreme temperatures can temporarily reduce range by 20-40%.",
  },
  {
    icon: Zap,
    title: "Prefer Slow Charging",
    description:
      "Level 2 (home) charging is gentler on your battery. Limit DC fast charging to when you really need it for road trips.",
  },
  {
    icon: Car,
    title: "Drive Smoothly",
    description:
      "Gentle acceleration and using regenerative braking can improve your range by up to 20%. Smooth driving = more miles.",
  },
  {
    icon: Wind,
    title: "Mind Your Speed",
    description:
      "Highway speeds above 70 mph significantly reduce efficiency. At 80 mph, you may use 30% more energy than at 60 mph.",
  },
  {
    icon: Snowflake,
    title: "Precondition in Cold Weather",
    description:
      "Warm your car and battery while still plugged in. This preserves range and improves charging speed in winter.",
  },
  {
    icon: Sun,
    title: "Use Cabin Preconditioning",
    description:
      "Precondition your cabin temperature while charging. This way, you don't waste battery energy on climate control after unplugging.",
  },
  {
    icon: Gauge,
    title: "Check Tire Pressure Monthly",
    description:
      "Properly inflated tires can improve range by 3-5%. Cold weather drops tire pressure, so check more often in winter.",
  },
  {
    icon: Clock,
    title: "Schedule Charging During Off-Peak",
    description:
      "Electricity rates are often lower at night. Schedule charging between 11 PM and 6 AM to save on energy costs.",
  },
  {
    icon: Shield,
    title: "Update Software Regularly",
    description:
      "Manufacturers often release updates that improve battery management and efficiency. Keep your EV software current.",
  },
];

const Tips = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            EV Care <span className="text-gradient">Tips</span>
          </h1>
          <p className="text-muted-foreground">
            Simple habits to extend your battery life and maximize range
          </p>
        </motion.div>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {tips.map((tip, index) => (
            <TipCard
              key={index}
              icon={tip.icon}
              title={tip.title}
              description={tip.description}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 card-gradient rounded-2xl p-8 border border-primary/20 text-center"
        >
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Want Personalized Tips?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Our Smart Insights feature analyzes your specific driving and
            charging patterns to provide custom recommendations tailored to your
            EV lifestyle.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Tips;
