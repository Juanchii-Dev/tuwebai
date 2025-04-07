import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slides as slideMetadata } from "@/lib/slideData";

interface ProgressIndicatorProps {
  currentSlideIndex: number;
}

export default function ProgressIndicator({ currentSlideIndex }: ProgressIndicatorProps) {
  // Track the displayed slide index to force updates
  const [displayIndex, setDisplayIndex] = useState(currentSlideIndex);
  
  // Update display index when currentSlideIndex changes
  useEffect(() => {
    setDisplayIndex(currentSlideIndex);
  }, [currentSlideIndex]);
  
  // Get total slide count
  const totalSlides = slideMetadata.length;
  
  // Calculate progress percentage
  const progress = ((displayIndex + 1) / totalSlides) * 100;
  
  // Get current slide title
  const currentSlideTitle = slideMetadata[displayIndex]?.title || "";

  return (
    <div className="fixed bottom-0 left-0 w-full z-30 px-4 pb-4">
      <div className="container mx-auto max-w-5xl flex items-center">
        <div className="text-sm text-gray-400 mr-4 min-w-[80px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={displayIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {displayIndex + 1} / {totalSlides}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-secondary to-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="text-sm text-gray-400 ml-4 min-w-[120px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={displayIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {currentSlideTitle}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}