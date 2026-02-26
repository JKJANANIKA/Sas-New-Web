import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface ToolCardProps {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  index: number;
}

const ToolCard = ({ icon: Icon, label, title, description, index }: ToolCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="flex flex-col md:flex-row gap-6 items-start"
    >
      {/* Left tilted card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
        className="w-48 h-56 rounded-2xl bg-primary/40 flex flex-col items-center justify-center gap-3 shadow-lg shrink-0"
      >
        <Icon className="w-12 h-12 text-primary-foreground" />
        <div className="text-center">
          <span className="text-xs text-primary-foreground/70 block">{label}</span>
          <span className="text-sm font-black text-primary-foreground uppercase tracking-wide">{title}</span>
        </div>
      </motion.div>

      {/* Right info card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 + 0.5 }}
        className="flex-1 bg-primary/30 rounded-2xl p-8 min-h-[14rem] flex flex-col justify-center"
      >
        <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-foreground uppercase tracking-tight mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default ToolCard;
