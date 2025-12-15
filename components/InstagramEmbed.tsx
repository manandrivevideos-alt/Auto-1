import React from 'react';

interface InstagramEmbedProps {
  url: string;
  caption: string;
}

export const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url, caption }) => {
  // Ensure the URL ends with /embed for the iframe to work specifically for visuals
  const embedUrl = url.endsWith('/embed') ? url : `${url.replace(/\/$/, '')}/embed`;

  return (
    <div className="flex flex-col items-center w-full max-w-[350px] mx-auto">
      <div className="w-full relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-black aspect-[9/16]">
        <iframe
          src={embedUrl}
          className="w-full h-full absolute inset-0"
          frameBorder="0"
          scrolling="no"
          allowTransparency={true}
          title={caption}
        />
      </div>
      <p className="mt-4 text-sm text-slate-500 font-medium text-center px-4">
        {caption}
      </p>
    </div>
  );
};