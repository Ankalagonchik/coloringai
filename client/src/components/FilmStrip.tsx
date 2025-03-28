import React from 'react';

interface FilmStripProps {
  position: 'top' | 'bottom';
  className?: string;
}

const FilmStrip: React.FC<FilmStripProps> = ({ position, className = '' }) => {
  return (
    <div 
      className={`absolute ${position}-0 left-0 w-full z-10 ${className}`}
      style={{
        height: '30px',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 30' preserveAspectRatio='none'%3E%3Crect x='0' y='0' width='10' height='30' fill='%23121212'/%3E%3Crect x='20' y='0' width='10' height='30' fill='%23121212'/%3E%3Crect x='40' y='0' width='10' height='30' fill='%23121212'/%3E%3Crect x='60' y='0' width='10' height='30' fill='%23121212'/%3E%3Crect x='80' y='0' width='10' height='30' fill='%23121212'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat-x',
        backgroundSize: 'auto 100%'
      }}
      aria-hidden="true"
    />
  );
};

export default FilmStrip;
