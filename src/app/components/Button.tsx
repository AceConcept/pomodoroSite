'use client';

interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  variant?: 'outline' | 'dark';
  href: string;
  download?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function Button({ 
  children, 
  icon, 
  iconPosition = 'right', 
  variant = 'outline', 
  href, 
  download, 
  className = '',
  onClick
}: ButtonProps) {
  const baseStyles = "h-[40px] px-[16px] rounded-[32px] text-[14px] font-normal font-inter flex items-center justify-center group transition-opacity";
  const variantStyles = {
    outline: "bg-transparent border border-[#08090A] text-[#08090A] hover:opacity-90",
    dark: "bg-[#08090A] text-white hover:opacity-90"
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (download) {
    return (
      <a 
        href={href}
        className={combinedStyles}
        download
        onClick={onClick}
      >
        {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
        <span className="opacity-100 transition-opacity group-hover:opacity-90">{children}</span>
        {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      </a>
    );
  }

  return (
    <a 
      href={href}
      className={combinedStyles}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      <span className="opacity-100 transition-opacity group-hover:opacity-90">{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </a>
  );
} 