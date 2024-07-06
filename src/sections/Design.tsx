import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { buttonVariants } from '../components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Design = () => {
  return (
    <MaxWidthWrapper className="flex flex-col lg:flex-row justify-between items-center px-5 py-10 gap-0 lg:gap-20">
      <Image
        src="/useImg.svg"
        alt="use-Img"
        width={0}
        height={0}
        className="w-auto h-auto max-w-sm" 
        data-aos="fade-right"
      />
      <div className="sub-section font-inter ml-auto lg:ml-0" data-aos="fade-left">
        <h1 className="text-gray-900 dark:text-gray-100 tracking-tight text-balance mt-16 font-bold !leading-tight text-4xl md:text-4xl lg:text-5xl">
          How to design your site footer like&nbsp;
          <br />
          <span className="text-primary dark:text-green-400">we did?</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-4 text-base mb-4">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue
          nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit
          erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <Link
          href=""
          className={buttonVariants({ 
            size: 'lg', 
            className: 'bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white' 
          })}
        >
          Learn More
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default Design;