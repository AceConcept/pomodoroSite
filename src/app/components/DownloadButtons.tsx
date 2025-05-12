import Image from 'next/image';
import Button from './Button';

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
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
      <Button 
        variant="dark"
        onClick={() => window.open(urls.browser, '_blank')}
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
      <Button 
        variant="outline"
        href={macUrls.m1Url}
        download
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
      >
        Download for Mac Silicon
      </Button>
      <Button 
        variant="outline"
        href={macUrls.intelUrl}
        download
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
      >
        Download for Mac Intel
      </Button>
    </div>
  );
}
