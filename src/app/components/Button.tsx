interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant?: 'outline' | 'dark';
}

export default function Button({ children, onClick, icon, variant = 'outline' }: ButtonProps) {
  const baseStyles = "h-[40px] px-[16px] rounded-[32px] text-[14px] font-medium font-inter flex items-center justify-center group transition-opacity";
  const variantStyles = {
    outline: "bg-transparent border border-[#08090A] text-[#08090A] hover:opacity-90",
    dark: "bg-[#08090A] text-white hover:opacity-90"
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      <span className="opacity-100 transition-opacity group-hover:opacity-90">{children}</span>
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
} 