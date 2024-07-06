import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const socialMediaContent = [
  "/SocialMedia/instagram.svg",
  "/SocialMedia/dribble.svg",
  "/SocialMedia/twitter.svg",
  "/SocialMedia/youtube.svg",
];
const SocialIcon = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <div className="bg-gray-900 border border-white px-2 py-2 rounded-circle rounded-full">
      <Image src={imgUrl} width={24} height={24} alt="social-media" />
    </div>
  );
};

const footerLinks = [
  {
    title: "Company",
    links: ["About Us", "Blog", "Contact us", "Pricing", "Testimonials"],
  },
  {
    title: "Support",
    links: [
      "Help center",
      "Terms of service",
      "Legal",
      "Privacy policy",
      "Status",
    ],
  },
];

const FooterComponent = () => {
  return (
    <MaxWidthWrapper
      className="flex flex-col lg:flex-row justify-between items-center px-5 py-10  text-white font-inter gap-lg-3 gap-5"
      data-aos="fade-up"
    >
      <div className="flex flex-col">
        <Link
          href="/"
          className="flex items-center mb-4 gap-2"
        >
          <Image src="/logo_icon.svg" width={35} height={24} alt="logo" />
          <span className="text-3xl font-bold">Nexcent</span>
        </Link>
        <div className="text-gray-400 text-sm mt-4">
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p className="mt-3">All rights reserved</p>
        </div>
        <div className="flex items-center gap-3 mt-5">
          {socialMediaContent.map((item) => (
            <SocialIcon key={item} imgUrl={item} />
          ))}
        </div>
      </div>
      <div className="flex   gap-10 flex-wrap sm:flex-nowrap justify-between lg:flex-nowrap ">
        <div className="flex gap-6 text-white">
          {footerLinks.map((items) => (
            <div key={items.title} className="">
              <h5 className=" text-xl font-bold mb-4">{items.title}</h5>
              <ul className="space-y-2">
                {items.links.map((links) => (
                  <li key={links}>{links}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-2">
          <h5 className="text-white font-bold">Stay up to date</h5>
          <div className="flex gap-2">
            <input
              type="email"
              className="shadow-none border rounded-lg px-3 py-2 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500"
              id="exampleFormControlInput1"
              placeholder="Your email address"
            />
            <button className="flex items-center px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
              <Image src="/send.svg" height={20} width={20} alt="send" />
            </button>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default FooterComponent;
