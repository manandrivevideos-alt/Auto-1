import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', highlight = false }) => {
  return (
    <div className={`p-6 rounded-xl border transition-all duration-300 ${highlight ? 'bg-blue-50 border-blue-200 shadow-md' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'} ${className}`}>
      {children}
    </div>
  );
};