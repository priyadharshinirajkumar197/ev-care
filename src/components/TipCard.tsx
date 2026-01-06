import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TipCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const TipCard = ({ icon: Icon, title, description, index }: TipCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="card-gradient rounded-xl p-5 border border-border hover:border-primary/30 transition-all duration-300 cursor-default"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
