
'use client'
import Image from "next/image";
import CountUp from 'react-countup';
import React,{useState} from 'react';
import ScrollTrigger from 'react-scroll-trigger';

type StatsCardProps = {
  imgUrl: string;
  value: number;
  title: string;
};

const StatCard = ({ imgUrl, value, title }: StatsCardProps) => {
  const [counterOn,setCounterOn]=useState(false);
  return (
    <ScrollTrigger onEnter={()=> setCounterOn(true)} >
    <div className="flex items-center gap-3 animate-zoom-in">
      {/* Image in separate container */}
      <div className="mr-3">
        <Image src={imgUrl} width={48} height={48} alt={title} className="w-12 h-12 rounded-full" />
      </div>

      {/* Countup element */}
      <div className="flex flex-col gap-1">
        {counterOn  && 
                <CountUp
                end={value}
                duration={6} 
                separator=","
                decimals={0}
              >
                {({ countUpRef }) => (
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 counter" ref={countUpRef}></h2>
                )}
              </CountUp>
        }

        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </div>
    </ScrollTrigger>
  );
};

export default StatCard;

