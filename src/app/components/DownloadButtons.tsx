'use client';

import Image from 'next/image';
import Button from './Button';
import { useState, useEffect, useRef } from 'react';

type MacUrls = {
  m1Url: string;
  intelUrl: string;
};

type DownloadButtonsProps = {
  urls: {
    browser: string;
  };
  macUrls: MacUrls;
};

export function DownloadButtons({ urls, macUrls }: DownloadButtonsProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
      <Button 
        variant="dark"
        href={urls.browser}
        className="w-full md:w-auto"
        icon={
          <Image
            src="/newtab.svg"
            alt="New tab"
            width={16}
            height={16}
            className="opacity-100 transition-opacity group-hover:opacity-90 invert brightness-0"
          />
        }
      >
        Try on Web
      </Button>
      
      {/* Mac Download Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <Button 
          variant="outline"
          href="#"
          className="w-full md:w-auto"
          iconPosition="left"
          icon={
            <Image
              src="/Apple_logo_black.svg"
              alt="Apple"
              width={16}
              height={16}
              className="opacity-100 transition-opacity group-hover:opacity-90"
            />
          }
          onClick={(e) => {
            e.preventDefault();
            setIsDropdownOpen(!isDropdownOpen);
          }}
        >
          <span className="flex items-center">
            Download for Mac
            <svg
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
            >
              <path
                d="M2.5 4.5L6 8L9.5 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
            <div className="py-1" role="menu" aria-orientation="vertical">
              <a
                href={macUrls.m1Url}
                download
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => setIsDropdownOpen(false)}
              >
                Mac Silicon (M1/M2)
              </a>
              <a
                href={macUrls.intelUrl}
                download
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => setIsDropdownOpen(false)}
              >
                Mac Intel
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
