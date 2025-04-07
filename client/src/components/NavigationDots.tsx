import { motion } from "framer-motion";

interface NavigationDotsProps {
  totalSlides: number;
  currentSlide: number;
  goToSlide: (index: number) => void;
}

export default function NavigationDots({
  totalSlides,
  currentSlide,
  goToSlide,
}: NavigationDotsProps) {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <motion.button
          key={index}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentSlide === index
              ? "bg-secondary scale-125"
              : "bg-white/30 scale-100"
          }`}
          onClick={() => goToSlide(index)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
