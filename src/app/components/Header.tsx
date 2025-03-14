'use client';

import Button from './Button';

const getAppUrls = () => ({
  browser: 'https://pomotrack.app/',
  github: 'https://github.com/dtom90/PomoTrack',
  mac: '#' // TODO: Add Mac download link when available
});

export default function Header() {
  const urls = getAppUrls();
  
  return (
    <header className="bg-white px-[14.5vw] pt-6">
      <div className="flex justify-between items-center h-10">
        {/* Logo */}
        <div className="text-[20px] font-semibold text-[#08090A] font-inter">
          Pomotrack
        </div>
        
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
          onClick={() => window.open(urls.github, '_blank')}
        >
          View Github
        </Button>
      </div>
    </header>
  );
}
