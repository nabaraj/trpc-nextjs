import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
interface HeaderProps {
  // Add your props here
}

export const Header: React.FC<HeaderProps> = (props) => {
  "use client";

  // export function Links() {
  const pathname = usePathname();

  return (
    <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
      <div className='container mx-auto px-4'>
        <ul className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <li className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
            <Link
              className={`link ${pathname === "/" ? "active underline" : ""}`}
              href='/'
            >
              Home
            </Link>
          </li>
          <li className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
            <Link
              className={`link ${
                pathname === "/posts" ? "active underline" : ""
              }`}
              href='/posts'
            >
              Posts
            </Link>
          </li>
          <li className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
            <Link
              className={`link ${
                pathname === "/users" ? "active underline" : ""
              }`}
              href='/users'
            >
              Users
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
  // }
};
