import StatCard from "../components/StatCard";
import MaxWidthWrapper from '@/components/MaxWidthWrapper';


const StatContent = [
  {
    title: "Members",
    value: 2245341,
    imgUrl: "/Stats/icon1.svg",
  },
  {
    title: "Clubs",
    value: 46328,
    imgUrl: "/Stats/icon2.svg",
  },
  {
    title: "Event Bookings",
    value: 828267,
    imgUrl: "/Stats/icon3.svg",
  },
  {
    title: "Payments",
    value: 1926436,
    imgUrl: "/Stats/icon4.svg",
  },
];

const BusinessStats = () => {
  return (
      <MaxWidthWrapper className="flex flex-col lg:flex-row justify-between items-lg-center px-5 py-10">
        <div className="font-inter" data-aos="fade-right">
          <h1 className="text-gray-900 dark:text-gray-100 tracking-tight text-balance mt-16 font-bold !leading-tight text-4xl md:text-4xl lg:text-5xl">
            Helping a local&nbsp;
            <br />
            <span className="text-primary dark:text-green-400">business reinvent itself</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base mb-4">
            We reached here with our hardwork and dedication.
          </p>
        </div>
        <div className="grid md:grid-cols-2 md:grid-rows-2 gap-4">
          {StatContent.map((card) => (
            <StatCard key={card.title} {...card} />
          ))}
        </div>
      </MaxWidthWrapper>
  );
};

export default BusinessStats;