// 'use client'
// import React, { useState, useRef, useEffect } from 'react';
// import Image from "next/image";
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import CountUp from 'react-countup';

// // Register ScrollTrigger plugin with GSAP (assuming GSAP is already imported)
// gsap.registerPlugin(ScrollTrigger);

// type StatsCardProps = {
//   imgUrl: string;
//   value: number;
//   title: string;
// };

// const StatCard = ({ imgUrl, value, title }: StatsCardProps) => {
//   const counterRef = useRef(null);
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     const trigger = ScrollTrigger.create({
//       trigger: counterRef.current, // Target the counter element for triggering
//       start: 'top center', // Start animation when element reaches top center
//       end: 'bottom center', // End animation when element leaves bottom center
//       onEnter: () => setIsActive(true), // Activate counter on enter
//       onLeaveBack: () => setIsActive(false), // Deactivate counter on leave (prevents re-triggering)
//     });

//     return () => {
      
//       trigger.kill();
//     };
//   }, []);

//   return (
//     <div className="flex items-center gap-3 animate-zoom-in">
//       <div className="mr-3">
//         <Image src={imgUrl} width={48} height={48} alt={title} className="w-12 h-12 rounded-full" />
//       </div>
//       <div className="flex flex-col gap-1" ref={counterRef}>
//         {isActive && (
//           <CountUp
//             end={value}
//             duration={6}
//             separator=","
//             decimals={0}
//           >
//             {({ countUpRef }) => (
//               <h2
//                 className="text-3xl font-bold text-gray-900 dark:text-gray-100 counter"
//                 ref={useRef<HTMLHeadingElement>(null)} 
//               ></h2>
//             )}
//           </CountUp>
//         )}
//         <p className="text-sm text-gray-500">{title}</p>
//       </div>
//     </div>
//   );
// };

// export default StatCard;

'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from 'react-countup';

// Register ScrollTrigger plugin with GSAP (assuming GSAP is already imported)
gsap.registerPlugin(ScrollTrigger);

type StatsCardProps = {
  imgUrl: string;
  value: number;
  title: string;
};

const StatCard = ({ imgUrl, value, title }: StatsCardProps) => {
  const counterRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: counterRef.current, // Target the counter element for triggering
      start: 'top bottom', // Start animation when element reaches top center
      end: 'bottom center', // End animation when element leaves bottom center
      onEnter: () => setIsActive(true), // Activate counter on enter

    });

    return () => {
      trigger.kill(); // Cleanup trigger on unmount
    };
  }, []);

  return (
    <div className="flex items-center gap-3 animate-zoom-in">
      <div className="mr-3">
        <Image src={imgUrl} width={48} height={48} alt={title} className="w-12 h-12 rounded-full" />
      </div>
      <div className="flex flex-col gap-1" ref={counterRef}>
        {isActive && (
          <CountUp
            end={value}
            duration={10}
            separator=","
            decimals={0}
          >
            {({ countUpRef }) => (
              <h2
                className="text-3xl font-bold text-gray-900 dark:text-gray-100 counter"
                ref={countUpRef as React.LegacyRef<HTMLHeadingElement>}
              ></h2>
            )}
          </CountUp>
        )}
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
  );
};

export default StatCard;
