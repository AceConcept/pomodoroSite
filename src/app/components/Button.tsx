'use client';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant?: 'outline' | 'dark';
  href?: string;
  download?: boolean;
  className?: string;
}

export default function Button({ children, onClick, icon, variant = 'outline', href, download, className = '' }: ButtonProps) {
  const baseStyles = "h-[40px] px-[16px] rounded-[32px] text-[14px] font-normal font-inter flex items-center justify-center group transition-opacity";
  const variantStyles = {
    outline: "bg-transparent border border-[#08090A] text-[#08090A] hover:opacity-90",
    dark: "bg-[#08090A] text-white hover:opacity-90"
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href && download) {
    return (
      <a 
        href={href}
        className={combinedStyles}
        download
      >
        <span className="opacity-100 transition-opacity group-hover:opacity-90">{children}</span>
        {icon && <span className="ml-2">{icon}</span>}
      </a>
    );
  }

  if (href) {
    return (
      <a 
        href={href}
        className={combinedStyles}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="opacity-100 transition-opacity group-hover:opacity-90">{children}</span>
        {icon && <span className="ml-2">{icon}</span>}
      </a>
    );
  }

  return (
    <button 
      className={combinedStyles}
      onClick={onClick}
    >
      <span className="opacity-100 transition-opacity group-hover:opacity-90">{children}</span>
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
} 