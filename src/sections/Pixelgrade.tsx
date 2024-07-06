import Image from "next/image";
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { buttonVariants } from '../components/ui/button';
import Link from 'next/link';

const Pixelgrade = () => {
  return (
    <MaxWidthWrapper className="flex flex-col lg:flex-row justify-between items-center px-5 py-10 gap-0 lg:gap-20">
      <Image
        src="/pixelgrade.svg"
        width={0}
        height={0}
        alt="pixelgrade"
        className="w-auto h-auto max-w-sm object-cover " 
      />
      <div className="sub-section font-inter ml-auto lg:ml-0" data-aos="fade-left">
        <h1 className="text-gray-900 dark:text-gray-100 tracking-tight text-balance mt-16 font-bold !leading-tight text-4xl md:text-4xl lg:text-5xl">
          The unseen of spending three&nbsp;
          <br />
          <span className="text-primary dark:text-green-400">Pixelgrade</span> years at
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 text-base mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
        </p>
        <Link
          href=""
          className={buttonVariants({ size: 'lg', className: 'bg-green-500 dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-700 text-white' })}
        >
          Learn More
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default Pixelgrade;