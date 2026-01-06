import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChargingChartProps {
  data: Array<{ name: string; fast: number; slow: number }>;
}

export const ChargingChart = ({ data }: ChargingChartProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card-gradient rounded-2xl p-6 border border-border"
    >
      <h3 className="text-lg font-semibold text-foreground mb-6">
        Charging History
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorFast" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(185, 100%, 50%)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="hsl(185, 100%, 50%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorSlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(150, 70%, 45%)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="hsl(150, 70%, 45%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(220, 15%, 18%)"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215, 15%, 55%)", fontSize: 12 }}
              tickFormatter={(value) => `${value}kWh`}
            />
            <Tooltip
              contentStyle={{
                background: "hsl(220, 20%, 10%)",
                border: "1px solid hsl(220, 15%, 18%)",
                borderRadius: "12px",
                padding: "12px",
              }}
              labelStyle={{ color: "hsl(210, 20%, 98%)", fontWeight: 600 }}
              itemStyle={{ color: "hsl(215, 15%, 55%)" }}
            />
            <Area
              type="monotone"
              dataKey="fast"
              stroke="hsl(185, 100%, 50%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorFast)"
              name="Fast Charging"
            />
            <Area
              type="monotone"
              dataKey="slow"
              stroke="hsl(150, 70%, 45%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorSlow)"
              name="Slow Charging"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-sm text-muted-foreground">Fast Charging</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-success" />
          <span className="text-sm text-muted-foreground">Slow Charging</span>
        </div>
      </div>
    </motion.div>
  );
};
