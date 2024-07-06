
"use client"

import React from 'react';
import { useSwipeable } from 'react-swipeable';

interface CarouselProps {
  children: React.ReactNode[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ children, currentIndex, setCurrentIndex }) => {
  const childrenArray = React.Children.toArray(children);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const newIndex = currentIndex === childrenArray.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    },
    onSwipedRight: () => {
      const newIndex = currentIndex === 0 ? childrenArray.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    },
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;