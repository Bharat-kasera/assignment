// // components/Carousel.tsx
"use client"

// import React from 'react';

// interface CarouselProps {
//   children: React.ReactNode[];
//   currentIndex: number;
//   setCurrentIndex: (index: number) => void;
// }

// const Carousel: React.FC<CarouselProps> = ({ children, currentIndex, setCurrentIndex }) => {
//   return (
//     <div className="relative h-full">
//       {React.Children.map(children, (child, index) => (
//         <div
//           className={`transition-opacity duration-500 h-full ${
//             index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
//           }`}
//         >
//           {child}
//         </div>
//       ))}

//     </div>
//   );
// };

// export default Carousel;


// components/Carousel.tsx

// components/Carousel.tsx
// components/Carousel.tsx
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
      setCurrentIndex((prevIndex) => 
        prevIndex === childrenArray.length - 1 ? 0 : prevIndex + 1
      );
    },
    onSwipedRight: () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? childrenArray.length - 1 : prevIndex - 1
      );
    },
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true
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