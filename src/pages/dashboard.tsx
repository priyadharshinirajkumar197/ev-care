import { motion } from "framer-motion";
import { Battery, Gauge, Thermometer, RotateCcw, TrendingUp, Calendar } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { BatteryVisual } from "@/components/BatteryVisual";
import { HealthGauge } from "@/components/HealthGauge";

const Dashboard = () => {
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
            Vehicle Health <span className="text-gradient">Dashboard</span>
          </h1>
          <p className="text-muted-foreground">
            Your Tesla Model 3 at a glance • Last updated: Just now
          </p>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard
            title="Battery Health"
            value="94%"
            subtitle="Excellent condition"
            icon={Battery}
            variant="primary"
            trend={{ value: 0.2, isPositive: false }}
            delay={0.1}
          />
          <StatCard
            title="Estimated Range"
            value="287"
            subtitle="miles on full charge"
            icon={Gauge}
            variant="success"
            delay={0.2}
          />
          <StatCard
            title="Charging Cycles"
            value="342"
            subtitle="total cycles"
            icon={RotateCcw}
            delay={0.3}
          />
          <StatCard
            title="Battery Temp"
            value="72°F"
            subtitle="Optimal range"
            icon={Thermometer}
            variant="success"
            delay={0.4}
          />
        </div>

        {/* Battery Visual & Health Gauges */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card-gradient rounded-2xl p-8 border border-border"
          >
            <h2 className="text-xl font-semibold text-foreground mb-8">
              Battery Status
            </h2>
            <BatteryVisual percentage={78} />
            <div className="mt-8 flex items-center justify-center gap-8 text-sm">
              <div className="text-center">
                <p className="text-muted-foreground">Current Charge</p>
                <p className="text-2xl font-bold text-foreground">78%</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-muted-foreground">Range Available</p>
                <p className="text-2xl font-bold text-foreground">224 mi</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card-gradient rounded-2xl p-8 border border-border"
          >
            <h2 className="text-xl font-semibold text-foreground mb-8">
              Health Metrics
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <HealthGauge value={94} label="Overall Health" />
              <HealthGauge value={287} label="Range (mi)" maxValue={310} unit=" mi" />
              <HealthGauge value={72} label="Temp (°F)" maxValue={100} unit="°" />
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="card-gradient rounded-2xl p-6 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Efficiency Score</h3>
            </div>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-4xl font-bold text-foreground">4.2</span>
              <span className="text-muted-foreground mb-1">mi/kWh</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your driving efficiency is 12% above average for your vehicle model.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="card-gradient rounded-2xl p-6 border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-success/10">
                <Calendar className="w-5 h-5 text-success" />
              </div>
              <h3 className="font-semibold text-foreground">Next Service</h3>
            </div>
            <div className="flex items-end gap-2 mb-2">
              <span className="text-4xl font-bold text-foreground">45</span>
              <span className="text-muted-foreground mb-1">days away</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Tire rotation and cabin air filter replacement recommended.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
