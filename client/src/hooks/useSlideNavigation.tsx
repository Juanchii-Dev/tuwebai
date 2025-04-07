import { useCallback } from "react";

interface UseSlideNavigationProps {
  slideCount: number;
  currentSlideIndex: number;
  setCurrentSlideIndex: (index: number) => void;
}

export function useSlideNavigation({
  slideCount,
  currentSlideIndex,
  setCurrentSlideIndex,
}: UseSlideNavigationProps) {
  const goToNextSlide = useCallback(() => {
    if (currentSlideIndex < slideCount - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  }, [currentSlideIndex, slideCount, setCurrentSlideIndex]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  }, [currentSlideIndex, setCurrentSlideIndex]);

  const handleWheel = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      e.preventDefault();
      
      // Using a timeout to debounce the wheel event
      const wheelDelta = e.deltaY;
      
      if (wheelDelta > 0) {
        goToNextSlide();
      } else if (wheelDelta < 0) {
        goToPrevSlide();
      }
    },
    [goToNextSlide, goToPrevSlide]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        goToNextSlide();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        goToPrevSlide();
      }
    },
    [goToNextSlide, goToPrevSlide]
  );

  return {
    goToNextSlide,
    goToPrevSlide,
    handleWheel,
    handleKeyDown,
  };
}
