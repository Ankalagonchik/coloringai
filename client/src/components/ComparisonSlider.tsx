import { useEffect, useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
  handleIcon?: ReactNode;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ 
  beforeImage, 
  afterImage, 
  alt,
  handleIcon = null
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = (clientX: number) => {
    if (!sliderRef.current) return;
    
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const sliderWidth = sliderRect.width;
    const offsetX = clientX - sliderRect.left;
    
    // Calculate position as a percentage
    let newPosition = (offsetX / sliderWidth) * 100;
    
    // Clamp between 0 and 100
    newPosition = Math.min(100, Math.max(0, newPosition));
    
    setSliderPosition(newPosition);
  };

  // Mouse events
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  };

  // Touch events
  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !e.touches[0]) return;
    updateSliderPosition(e.touches[0].clientX);
  };

  // Click on slider
  const handleSliderClick = (e: React.MouseEvent) => {
    updateSliderPosition(e.clientX);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div 
      ref={sliderRef} 
      className="relative overflow-hidden w-full h-full cursor-pointer"
      onClick={handleSliderClick}
    >
      {/* After image (bottom layer) */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${afterImage})` }}
        aria-label={`${alt} after colorization`}
      />
      
      {/* Before image (top layer, clipped) */}
      <div 
        className="absolute top-0 left-0 h-full bg-cover bg-center pointer-events-none"
        style={{ 
          width: `${sliderPosition}%`, 
          backgroundImage: `url(${beforeImage})`,
          clipPath: `inset(0 0 0 0)`
        }}
        aria-label={`${alt} before colorization`}
      />
      
      {/* Divider line */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-[#E11D48] z-10 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      />
      
      {/* Handle */}
      <motion.div 
        className="absolute top-1/2 z-20 w-10 h-10 rounded-full bg-[#E11D48] flex items-center justify-center text-white transform -translate-y-1/2 cursor-grab active:cursor-grabbing"
        style={{ left: `${sliderPosition}%`, x: "-50%" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {handleIcon}
      </motion.div>
    </div>
  );
};

export default ComparisonSlider;
