import { motion } from "framer-motion";

interface BlobProps {
  color: "accent" | "secondary";
  className?: string;
}

export default function Blob({ color, className = "" }: BlobProps) {
  return (
    <motion.div
      className={`absolute rounded-full opacity-30 z-0 ${
        color === "accent" ? "bg-accent" : "bg-secondary"
      } ${className}`}
      animate={{
        scale: [1, 1.1, 0.9, 1],
        x: [0, 50, -50, 0],
        y: [0, 20, -20, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
}
