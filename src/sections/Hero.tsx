"use client"
import { buttonVariants } from '../components/ui/button';
import Link from 'next/link';

import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Carousel from '@/components/Carousel'
import { useState } from 'react'

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselItems = [
        {
            title: "Lessons and insights",
            subtitle: "from 8 years",
            description: "Where to grow your business as a photographer: site or social media?",
            image: "/HeroImg.svg"
        },
        {
            title: "Mastering the art",
            subtitle: "of visual storytelling",
            description: "Explore techniques to capture compelling narratives through your lens.",
            image: "/HeroImg.svg"
        },
        {
            title: "The business side",
            subtitle: "of photography",
            description: "Learn how to market your skills and build a sustainable career in photography.",
            image: "/HeroImg.svg"
        }
    ];
    return (
        <div>
            <Carousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
                {carouselItems.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <MaxWidthWrapper className="select-none  pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-5 lg:pb-24">
                            <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
                                <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                                    <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 dark:text-gray-100 text-5xl md:text-6xl lg:text-6xl">
                                        {item.title}
                                        <span className="px-2 text-green-600 dark:text-green-400">{item.subtitle}</span>
                                    </h1>
                                    <p className="mt-4 mb-4 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap dark:text-gray-300">
                                        {item.description}
                                    </p>
                                    <Link
                                        href=""
                                        className={buttonVariants({ size: 'lg', className: 'bg-green-500 text-gray-100' })} // Use buttonVariants function
                                    >
                                        Register
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-ful lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
                                <div className="relative md:max-w-xl ">
                                    <img
                                        src={item.image}
                                        className="w-full h-auto object-cover"
                                        alt="Slide image"
                                    />
                                </div>
                            </div>
                        </MaxWidthWrapper>
                    </div>
                ))}
            </Carousel>


            {/* Carousel dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselItems.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Hero