import ManageCard from "../components/ManageCard";
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const ManageContent = [
  {
    id: 1,
    title: "Membership Organisations",
    imgUrl: "/Features/icon1.svg",
  },
  {
    id: 2,
    title: "National Associations",
    imgUrl: "/Features/icon2.svg",
  },
  {
    id: 3,
    title: "Clubs And Similar Groups",
    imgUrl: "/Features/icon3.svg",
  },
];

const Manage = () => {
  return (
    <MaxWidthWrapper className="text-center font-inter py-5">
      <div data-aos="fade-down">
        <h1 className="text-gray-900 dark:text-gray-100 tracking-tight text-balance mt-16 font-bold !leading-tight text-4xl md:text-4xl lg:text-5xl">
          Manage your entire community <br /> in a single system
        </h1>
        <p className="mt-4 text-lg text-center text-balance text-gray-600 dark:text-gray-300">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ManageContent.map((card) => (
          <ManageCard key={card.id} {...card} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Manage;