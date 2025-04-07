import { useEffect, useState } from "react";
import { slides } from "@/lib/slideData";
import { motion } from "framer-motion";

interface ProgressIndicatorProps {
  currentSlideIndex: number;
}

export default function ProgressIndicator({ currentSlideIndex }: ProgressIndicatorProps) {
  const [progress, setProgress] = useState(0);
  
  // Calculate progress percentage
  useEffect(() => {
    const totalSlides = slides.length;
    const percentage = ((currentSlideIndex + 1) / totalSlides) * 100;
    setProgress(percentage);
  }, [currentSlideIndex]);

  return (
    <div className="fixed bottom-0 left-0 w-full z-30 px-4 pb-4">
      <div className="container mx-auto max-w-5xl flex items-center">
        <div className="text-sm text-gray-400 mr-4 min-w-[80px]">
          {currentSlideIndex + 1} / {slides.length}
        </div>
        <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-secondary to-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="text-sm text-gray-400 ml-4">
          {slides[currentSlideIndex].title}
        </div>
      </div>
    </div>
  );
}