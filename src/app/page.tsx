'use client';

import Image from 'next/image'
import Button from './components/Button'
import { useState, useEffect } from 'react'

async function getLatestReleaseDownloadUrl() {
  try {
    const response = await fetch('https://api.github.com/repos/dtom90/PomoTrack/releases/latest');
    const data = await response.json();
    
    // Find the first asset that matches your pattern
    const matchingAssets = data.assets.filter((asset: { name: string; }) => 
      asset.name.match(new RegExp('PomoTrack-\\d+\\.\\d+\\.\\d+\\.dmg'))
    );
    
    return matchingAssets.length > 0 ? matchingAssets[0]?.browser_download_url : null;
  } catch (error) {
    console.error('Error fetching release:', error);
    return null;
  }
}

const getAppUrls = (macUrl: string | null) => ({
  browser: 'https://pomotrack.app/',
  github: 'https://github.com/dtom90/PomoTrack',
  mac: macUrl || '#' // Use fetched URL or fallback to '#'
});

export default function Home() {
  const [macUrl, setMacUrl] = useState<string | null>(null);

  useEffect(() => {
    getLatestReleaseDownloadUrl().then(url => {
      setMacUrl(url);
    });
  }, []);

  const urls = getAppUrls(macUrl);
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="px-[14.5vw]">
        <div className="w-full md:w-[70%]">
          <div className="mt-20">
            <h1 className="text-[56px] font-medium font-inter leading-[62px] tracking-[-0.03em] text-[#08090A]">
              Timed focus sessions to help you achieve more, faster
            </h1>
            
            <p className="mt-5 text-[20px] font-normal font-inter leading-[28px] tracking-[-0.03em] text-[#08090A]">
              Discover the perfect tool for timed focus and productivity. Effortlessly manage tasks, track progress, and stay on target with structured work sessions.
            </p>

            <div className="flex gap-4 mt-5">
              <Button 
                variant="dark"
                href={urls.mac}
                download
              >
                Download for Mac
              </Button>
              <Button 
                variant="dark"
                onClick={() => window.open(urls.browser, '_blank')}
              >
                Use on Browser
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Banner Image */}
      <div className="mt-[18px] w-full overflow-hidden">
        <Image
          src="/pomoTrackMainImage2.jpg"
          alt="Pomotrack Main Interface"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain translate-x-[20px]"
          priority
        />
      </div>

      {/* Features Section */}
      <div className="px-[14.5vw] pt-[32px] pb-[72px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[62px]">
          {/* Tag Functionality */}
          <div>
            <h3 className="text-[21px] font-medium font-inter leading-[28px] tracking-[-0.37px] text-[#08090A]">
              Tag functionality
            </h3>
            <p className="mt-1 text-[17px] font-normal font-inter leading-[24.5px] text-[#333333]">
              Organize tasks effortlessly with customizable tags for better focus.
            </p>
            <div className="mt-[32px]">
              <Image
                src="/TagsimgHQ.jpg"
                alt="Tag Functionality Feature"
                width={325}
                height={256}
                className="w-[325px]"
              />
            </div>
          </div>

          {/* Intuitive Timer */}
          <div>
            <h3 className="text-[21px] font-medium font-inter leading-[28px] tracking-[-0.37px] text-[#08090A]">
              Intuitive Timer
            </h3>
            <p className="mt-1 text-[17px] font-normal font-inter leading-[24.5px] text-[#333333]">
              Set a timer and focus on your task with a clear, intuitive interface.
            </p>
            <div className="mt-[32px]">
              <Image
                src="/TimerHQ.jpg"
                alt="Intuitive Timer Feature"
                width={325}
                height={256}
                className="w-[325px]"
              />
            </div>
          </div>

          {/* Set long-term goals */}
          <div>
            <h3 className="text-[21px] font-medium font-inter leading-[28px] tracking-[-0.37px] text-[#08090A]">
              Set long-term goals
            </h3>
            <p className="mt-1 text-[17px] font-normal font-inter leading-[24.5px] text-[#333333]">
              Set time-based goals and monitor your daily productivity.
            </p>
            <div className="mt-[32px]">
              <Image
                src="/GraphHQ.jpg"
                alt="Long Term Goals Feature"
                width={325}
                height={256}
                className="w-[325px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Reminder Banner */}
      <div className="px-[14.5vw] py-[32px] pb-[48px]">
        <div className="flex justify-between items-center">
          <h2 className="text-[32px] font-medium font-inter leading-[62px] tracking-[-0.03em] text-[#08090A]">
            Stay on task today
          </h2>
          <div className="flex gap-4">
            <Button 
              variant="dark"
              href={urls.mac}
              download
            >
              Download for Mac
            </Button>
            <Button 
              variant="dark"
              onClick={() => window.open(urls.browser, '_blank')}
            >
              Use on Browser
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
