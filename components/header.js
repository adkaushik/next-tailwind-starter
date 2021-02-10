import Link from "next/link";
import { useState } from "react";
import cn from 'classnames';

import { setThemeConfig } from '../themes';

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="bg-background shadow-sm min-w-full">
      <div className="flex flex-wrap items-center justify-between lg:container max-w-full lg:max-w-5xl px-4 py-6 mx-auto md:flex-no-wrap md:px-6">
        <div className="flex items-center">

          <Link href="/">
            <a className="text-base md:text-3xl ml-3 text-black font-logo font-bold">
              Next.js tailwind starter
            </a>
          </Link>
        </div>

        <button
          className="items-center px-3 py-2 text-darkGray border border-white rounded md:hidden flex"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg
            className="w-3 h-3 fill-current text-black"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <ul
          className={cn(
            "md:flex flex flex-row mr-auto ml-auto md:mr-0 bg-transparent md:rounded-3xl md:shadow:3xl cursor-pointer py-2 px-2 bg-solidPink md:flex-row md:items-center justify-center text-sm w-full md:w-auto",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          <li
            className="items-center px-3 py-2 w-6 h-6 shadow-3xl border-2 border-pureWhite mr-2  bg-solidLight text-darkGray rounded-full"
            onClick={() => setThemeConfig('light')}
          />
          <li
            className="items-center px-3 py-2 w-6 h-6 shadow-3xl border-2 border-pureWhite mr-2 bg-solidDark text-darkGray rounded-full"
            onClick={() => setThemeConfig('dark')}
          />
          <li
            className="items-center px-3 py-2 w-6 h-6 shadow-3xl border-2 border-pureWhite bg-solidPrimary text-darkGray rounded-full"
            onClick={() => setThemeConfig('primary')}
          />
        </ul>
      </div>
    </header>
  );
}
