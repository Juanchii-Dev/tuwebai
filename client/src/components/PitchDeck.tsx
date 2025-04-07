import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import NavigationDots from "./NavigationDots";
import ProgressIndicator from "./ProgressIndicator";
import Cover from "./slides/Cover";
import Problem from "./slides/Problem";
import Solution from "./slides/Solution";
import Services from "./slides/Services";
import Differentials from "./slides/Differentials";
import Process from "./slides/Process";
import Projects from "./slides/Projects";
import Statistics from "./slides/Statistics";
import Testimonials from "./slides/Testimonials";
import VideoPresentation from "./slides/VideoPresentation";
import Team from "./slides/Team";
import CTA from "./slides/CTA";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import { slides as slidesData } from "@/lib/slideData";

// Ensure this array matches the slides from slideData.ts
const slides = [
  { id: "cover", component: Cover },
  { id: "problem", component: Problem },
  { id: "solution", component: Solution },
  { id: "services", component: Services },
  { id: "differentials", component: Differentials },
  { id: "process", component: Process },
  { id: "projects", component: Projects },
  { id: "statistics", component: Statistics },
  { id: "testimonials", component: Testimonials },
  { id: "video-presentation", component: VideoPresentation },
  { id: "team", component: Team },
  { id: "cta", component: CTA },
];

export default function PitchDeck() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const { handleWheel, handleKeyDown } = useSlideNavigation({
    slideCount: slides.length,
    currentSlideIndex,
    setCurrentSlideIndex,
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-primary-dark">
      <div
        ref={containerRef}
        className="h-screen w-full"
        onWheel={handleWheel}
      >
        <NavigationDots
          totalSlides={slides.length}
          currentSlide={currentSlideIndex}
          goToSlide={goToSlide}
        />
        
        <ProgressIndicator currentSlideIndex={currentSlideIndex} />

        <AnimatePresence>
          {slides.map((Slide, index) => {
            const SlideComponent = Slide.component;
            return (
              <SlideComponent
                key={Slide.id}
                isActive={index === currentSlideIndex}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
