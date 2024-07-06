import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { buttonVariants } from '../components/ui/button';
import Link from 'next/link';

const Demo = () => {
  return (
    <MaxWidthWrapper className="text-center py-10 " data-aos="zoom-in">
      <h1 className="text-gray-900 dark:text-gray-100 tracking-tight text-balance  mb-8 font-bold !leading-tigh text-4xl md:text-4xl lg:text-5xl">
        Pellentesque suscipit<br />fringilla libero eu.
      </h1>
      <Link
        href="/api/auth/login"
        className={buttonVariants({ size: 'lg', className: 'bg-green-500' })} // Use buttonVariants function
      >
        Get Demo
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="ml-2"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </Link>
    </MaxWidthWrapper>
  );
};

export default Demo;
