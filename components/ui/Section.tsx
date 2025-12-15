import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-6 md:px-12 lg:px-24 w-full flex justify-center ${dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-800'} ${className}`}
    >
      <div className="max-w-6xl w-full">
        {children}
      </div>
    </section>
  );
};