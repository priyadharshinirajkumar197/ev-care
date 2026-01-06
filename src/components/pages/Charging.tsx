import { motion } from "framer-motion";
import { ChargingChart } from "@/components/ChargingChart";
import { StatCard } from "@/components/StatCard";
import { InsightCard } from "@/components/InsightCard";
import { Zap, Clock, BatteryCharging, Plug } from "lucide-react";

const chargingData = [
  { name: "Mon", fast: 12, slow: 25 },
  { name: "Tue", fast: 0, slow: 30 },
  { name: "Wed", fast: 8, slow: 22 },
  { name: "Thu", fast: 0, slow: 28 },
  { name: "Fri", fast: 15, slow: 18 },
  { name: "Sat", fast: 5, slow: 35 },
  { name: "Sun", fast: 0, slow: 32 },
];

const recommendations = [
  {
    type: "tip" as const,
    title: "Best Charging Time: 11 PM - 6 AM",
    description:
      "Off-peak electricity rates could save you up to 40% on charging costs. Schedule your charging sessions during these hours.",
  },
  {
    type: "success" as const,
    title: "Good Slow Charging Ratio",
    description:
      "85% of your charging is slow charging. This is ideal for battery longevity. Keep prioritizing Level 2 charging when possible.",
  },
  {
    type: "info" as const,
    title: "Maintain 20-80% Range",
    description:
      "Keeping your battery between 20% and 80% charge optimizes battery health. You can charge to 100% for long trips.",
  },
];

const Charging = () => {
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
            Charging <span className="text-gradient">Behavior</span>
          </h1>
          <p className="text-muted-foreground">
            Understand and optimize your charging patterns
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard
            title="Total Energy"
            value="847 kWh"
            subtitle="This month"
            icon={Zap}
            variant="primary"
            delay={0.1}
          />
          <StatCard
            title="Charging Sessions"
            value="28"
            subtitle="This month"
            icon={Plug}
            delay={0.2}
          />
          <StatCard
            title="Avg. Session"
            value="2.4 hrs"
            subtitle="Per charge"
            icon={Clock}
            delay={0.3}
          />
          <StatCard
            title="Fast Charge Ratio"
            value="15%"
            subtitle="Of total charges"
            icon={BatteryCharging}
            variant="warning"
            trend={{ value: 5, isPositive: false }}
            delay={0.4}
          />
        </div>

        {/* Chart Section */}
        <div className="mb-10">
          <ChargingChart data={chargingData} />
        </div>

        {/* Weekly Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card-gradient rounded-2xl p-6 md:p-8 border border-border mb-10"
        >
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Weekly Summary
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-xl bg-secondary/50">
              <p className="text-sm text-muted-foreground mb-1">Fast Charges</p>
              <p className="text-3xl font-bold text-primary">4</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-secondary/50">
              <p className="text-sm text-muted-foreground mb-1">Slow Charges</p>
              <p className="text-3xl font-bold text-success">23</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-secondary/50">
              <p className="text-sm text-muted-foreground mb-1">Total kWh</p>
              <p className="text-3xl font-bold text-foreground">190</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-secondary/50">
              <p className="text-sm text-muted-foreground mb-1">Est. Cost</p>
              <p className="text-3xl font-bold text-foreground">$28</p>
            </div>
          </div>
        </motion.div>

        {/* Recommendations */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Recommendations
          </h2>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <InsightCard
                key={index}
                type={rec.type}
                title={rec.title}
                description={rec.description}
                delay={0.6 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charging;
