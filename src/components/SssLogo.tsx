import React from 'react';

interface SssLogoProps {
  className?: string;
  textColor?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const SssLogo: React.FC<SssLogoProps> = ({
  className = '',
  textColor = 'text-white',
  size = 'md',
}) => {
  const barSizes = {
    sm: 'h-4 w-[2.5px] gap-[2px]',
    md: 'h-5 w-[3px] gap-[2.5px]',
    lg: 'h-6 w-[3.5px] gap-[3px]',
  };

  const textSizes = {
    sm: 'text-sm font-semibold tracking-tight',
    md: 'text-base font-bold tracking-tight',
    lg: 'text-lg font-bold tracking-tight',
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* 3 distinctive mint bars */}
      <div className={`flex items-end ${barSizes[size]}`}>
        <span className="w-full h-3/5 bg-[#4ee3a5] rounded-full animate-pulse" />
        <span className="w-full h-full bg-[#4ee3a5] rounded-full" />
        <span className="w-full h-4/5 bg-[#4ee3a5] rounded-full" />
      </div>
      <span className={`${textSizes[size]} ${textColor} font-['Plus_Jakarta_Sans',sans-serif]`}>
        sssbank<span className="text-[#4ee3a5]">.</span>
      </span>
    </div>
  );
};
