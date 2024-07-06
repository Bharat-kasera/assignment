import Link from 'next/link';
import Image from 'next/image';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const MeetAllCustomers = () => {
  return (
    <MaxWidthWrapper className="flex flex-col lg:flex-row justify-between items-center px-5 py-10  gap-0 lg:gap-20
    ">
      <Image
        src="/feedback.svg"
        alt="feedback"
        width={0}
        height={0}
        className="w-auto h-auto max-w-sm" // Set max width for responsiveness
        data-aos="fade-right"
      />
      <div className="font-inter ml-auto lg:ml-0" data-aos="fade-left">
        <p className="text-gray-500 text-base mb-4 dark:text-gray-400">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-primary">Tim Smith</h2>
        <p className="text-gray-500 text-base dark:text-gray-400">
          British Dragon Boat Racing Association
        </p>
        <div className="flex gap-4 mb-4  flex-wrap mt-4 ">
          {[1, 2, 3, 4, 5, 6, 7].map((value) => (
            <Image
              key={value}
              src={`/Clients/client${value}.svg`}
              alt={`client-${value}`}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full" // Set rounded corners for clients images
            />
          ))}
        </div>
        <div className="flex items-center justify-center">
          
            <Link href="/" className="flex items-center text-primary font-semibold text-base">
              Meet All Customers
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right mx-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default MeetAllCustomers;
