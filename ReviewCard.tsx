import { motion } from "framer-motion";
import { Star, CheckCircle } from "lucide-react";

interface ReviewCardProps {
  name: string;
  title: string;
  review: string;
  rating: number;
  index: number;
}

const ReviewCard = ({ name, title, review, rating, index }: ReviewCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card/80 backdrop-blur border border-border rounded-2xl p-8 flex flex-col justify-between min-h-[280px]"
    >
      <div>
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        <h3 className="text-xl font-black text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{review}</p>
      </div>
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
        <span className="font-bold text-foreground italic">{name}</span>
        <span className="flex items-center gap-1 text-xs text-primary font-semibold">
          <CheckCircle className="w-4 h-4" />
          Verified
        </span>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
