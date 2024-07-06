// import Link from "next/link";
// import Image from "next/image";


// type BlogCardProps = {
//   id: number;
//   imgUrl: string;
//   title: string;
//   link: string;
// };

// const BlogCard = ({ id, imgUrl, title, link }: BlogCardProps) => {
//   return (
//     <div
//       className='relative bg-gray-100 rounded-lg shadow-md overflow-hidden'      
//     >
//       <Image src={imgUrl} alt={title}         width={0}
//         height={0} className="w-full h-48 object-cover" />
//       <div className="p-4 flex flex-col justify-center items-center bg-white ">
//         <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
//         <Link href={link} className="text-primary underline hover:text-blue-600">
//           Read more &rarr;
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default BlogCard;

import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  id: number;
  imgUrl: string;
  title: string;
  link: string;
};

const BlogCard = ({ id, imgUrl, title, link }: BlogCardProps) => {
  return (
    <div className="relative bg-gray-200 rounded-lg shadow-md overflow-hidden">
      <Image src={imgUrl} width={368} height={286} alt={title} className="object-cover" />
      <div className="absolute inset-0 bg-white opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
        <div className="px-3 py-3 w-full flex flex-col items-center justify-center">
          <h1 className="text-2xl mt-8 font-semibold text-gray-800">{title}</h1>
          <Link
            href={link}
            className="mt-4 text-primary inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-500 disabled:opacity-50 transition duration-150 ease-in-out"
          >
            Read more &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
