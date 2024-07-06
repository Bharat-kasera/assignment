import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import { buttonVariants } from './ui/button';
import Image from "next/image";
import MobileNav from "./MobileNav";
import * as React from "react"
import { ModeToggle } from "@/components/ModeToggle"

const Navbar = async () => {
  return (
    <nav className="sticky z-50 h-14 inset-x-0 top-0 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200 dark:border-zinc-800">
          <Link href="/" className="flex gap-2 z-40 font-semibold">
            <Image src="/logo.svg" width={35} height={24} alt="logo" />
            <span className="text-gray-800 dark:text-gray-200 hidden md:flex">
              Nexcent
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              Services
            </Link>
            <Link href="/features" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              Features
            </Link>
            <Link href="/product" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              Product
            </Link>
            <Link href="/testimonial" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              Testimonial
            </Link>
            <Link href="/faq" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              FAQ
            </Link>
          </div>
          <div className="h-full flex items-center space-x-4">
            <Link
              href="/api/auth/register"
              className={buttonVariants({ size: 'sm', variant: 'ghost' })}
            >
              Login
            </Link>

            <Link
              href="/api/auth/login"
              className={buttonVariants({ size: 'sm', className: 'bg-[#4CAF4F] dark:bg-green-400 text-white' })}
            >
              Sign up
            </Link>
            <ModeToggle/>

            <div>
              <MobileNav />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;