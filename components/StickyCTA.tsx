import React from 'react';
import { Phone, Calendar } from 'lucide-react';

export const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 md:flex-row items-center print:hidden">
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 transition-transform hover:scale-105">
        <Calendar size={18} />
        <span>Book Intro Call</span>
      </button>
    </div>
  );
};