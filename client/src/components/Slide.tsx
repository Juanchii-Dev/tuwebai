import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SlideProps {
  children: ReactNode;
  isActive: boolean;
  className?: string;
  id: string;
  withGradient?: boolean;
}

export default function Slide({
  children,
  isActive,
  className = "",
  id,
  withGradient = false,
}: SlideProps) {
  if (!isActive) return null;

  return (
    <motion.section
      id={`slide-${id}`}
      className={`min-h-screen h-screen w-full flex items-center relative overflow-hidden ${
        withGradient ? "bg-gradient-tech" : "bg-primary-dark"
      } ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
}
