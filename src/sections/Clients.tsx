import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

const Clients = () => {
  return (
    <MaxWidthWrapper className="text-center py-5">
      <div className="relative mx-auto text-center flex flex-col items-center">
        <h1 className="text-gray-900 dark:text-gray-100 tracking-tight text-balance mt-16 font-bold !leading-tight text-4xl md:text-4xl lg:text-5xl">
          Our Clients
        </h1>
        <p className="mt-4 text-lg text-center text-balance text-gray-600 dark:text-gray-300">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="flex items-center w-100 justify-between flex-wrap mt-16">
        {[1, 2, 3, 4, 5, 6, 7].map((value) => (
          <div key={value} className="relative">
            <Image
              src={`/Clients/client${value}.svg`}
              width={50}
              height={50}
              alt={`client-${value}`}
              className="dark:color-white" // Invert colors in dark mode
            />
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Clients;