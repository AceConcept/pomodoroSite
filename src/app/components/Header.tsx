'use client';

import Link from 'next/link';
import Button from './Button';
import Image from 'next/image';

const getAppUrls = () => ({
  browser: 'https://pomotrack.app/',
  github: 'https://github.com/dtom90/PomoTrack',
});

export default function Header() {
  const urls = getAppUrls();
  
  return (
    <header className="bg-white px-4 sm:px-[14.5vw] pt-6">
      <div className="flex justify-between items-center h-10">
        {/* Logo */}
        <Link href="/" className="text-[20px] font-semibold text-[#08090A] font-inter hover:text-[#08090A] transition-colors">
          Pomodash
        </Link>
        
        {/* Button */}
        <Button 
          icon={
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-100 transition-opacity group-hover:opacity-90"
            >
              <path
                d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          href={urls.github}
        >
          <span className="flex items-center gap-2">
            <Image
              src="/github_icon.svg"
              alt="Github"
              width={16}
              height={16}
              className="opacity-100 transition-opacity group-hover:opacity-90"
            />
            View Github
          </span>
        </Button>
      </div>
    </header>
  );
}
