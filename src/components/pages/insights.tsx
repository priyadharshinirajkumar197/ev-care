import { motion } from "framer-motion";
import { InsightCard } from "@/components/InsightCard";
import { Sparkles } from "lucide-react";

const insights = [
  {
    type: "warning" as const,
    title: "Frequent Fast Charging Detected",
    description:
      "You've used fast charging 8 times this month. Frequent DC fast charging may reduce battery lifespan by 5-10% over time. Consider slow charging when possible.",
  },
  {
    type: "success" as const,
    title: "Excellent Driving Efficiency",
    description:
      "Your average energy consumption is 4.2 mi/kWh, which is 12% better than similar vehicles. Your smooth acceleration habits are paying off!",
  },
  {
    type: "tip" as const,
    title: "Optimal Charging Window",
    description:
      "Based on your electricity rates and driving patterns, charging between 11 PM - 6 AM could save you up to $15/month on energy costs.",
  },
  {
    type: "info" as const,
    title: "Battery Preconditioning Active",
    description:
      "Your vehicle automatically warms the battery in cold weather. This uses about 1-2% charge but significantly improves range and charging speed.",
  },
  {
    type: "success" as const,
    title: "Regenerative Braking Maximized",
    description:
      "You recovered 847 kWh this month through regenerative braking—equivalent to 3 full charges! Keep up the one-pedal driving.",
  },
  {
    type: "tip" as const,
    title: "Climate Control Tip",
    description:
      "Preconditioning your cabin while plugged in can add 8-15 miles to your range in extreme temperatures.",
  },
];

const Insights = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Smart <span className="text-gradient">Insights</span>
            </h1>
          </div>
          <p className="text-muted-foreground">
            AI-powered recommendations to optimize your EV experience
          </p>
        </motion.div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card-gradient rounded-2xl p-6 md:p-8 border border-primary/20 mb-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              This Month's Overview
            </h2>
            <p className="text-muted-foreground mb-6">
              Based on your driving and charging patterns, here's what we've
              learned about your EV usage.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-muted-foreground">Insights Generated</p>
                <p className="text-2xl font-bold text-foreground">24</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Actions Taken</p>
                <p className="text-2xl font-bold text-success">18</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Range Saved</p>
                <p className="text-2xl font-bold text-foreground">+42 mi</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Money Saved</p>
                <p className="text-2xl font-bold text-primary">$67</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Insights List */}
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <InsightCard
              key={index}
              type={insight.type}
              title={insight.title}
              description={insight.description}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
