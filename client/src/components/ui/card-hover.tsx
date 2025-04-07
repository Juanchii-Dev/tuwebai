import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardHoverProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  hoverColor?: "secondary" | "accent";
}

export default function CardHover({ 
  children, 
  onClick, 
  className = "",
  hoverColor = "secondary"
}: CardHoverProps) {
  return (
    <motion.div
      className={`card p-6 rounded-xl relative overflow-hidden group transition-all duration-300 ${className}`}
      whileHover={{ 
        scale: 1.05, 
        backgroundColor: hoverColor === "secondary" ? "#38B2AC" : "#805AD5"
      }}
      onClick={onClick}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary to-accent opacity-20 rounded-bl-full transition-all duration-300 group-hover:opacity-40" />
      {children}
    </motion.div>
  );
}
