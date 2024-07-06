import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import BlogCard from "../components/BlogCard";

export const MarkettingContent = [
  {
    id: 1,
    title: "Creating Streamlined Safeguarding Processes with OneRen.",
    imgUrl: "/Readmore/how.svg",
    link: "/blog",
  },
  {
    id: 2,
    title: "What are your responsibilities and how can you manage them?",
    imgUrl: "/Readmore/manage.svg",
    link: "/blog",
  },
  {
    id: 3,
    title: "Revamping the Membership Model with Triathlon Australia.",
    imgUrl: "/Readmore/revamp.svg",
    link: "/blog",
  },
];

const Marketing = () => {
  return (
    <MaxWidthWrapper className="text-center px-5 py-10 gap-0 lg:gap-20">
      <div className="font-inter" data-aos="fade-right">
        <h1 className="text-gray-900 dark:text-gray-100 tracking-tight text-balance mt-16 font-bold !leading-tigh text-4xl md:text-4xl lg:text-5xl">
          Caring is the new marketing
        </h1>
        <p className="text-gray-500 text-base mt-4 dark:text-gray-400">
    The Nexcent blog is the best place to read about the latest membership
    insights, trends and more. <br /> See who joining the community,
    read about how our community are increasing their membership income
    and lot more.
</p>

      </div>
      <div className="mt-16 flex lg:flex-row flex-col justify-between items-center gap-3 lg:gap-5">
        {MarkettingContent.map((item) => (
          <BlogCard key={item.id} {...item} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Marketing;
