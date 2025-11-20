import React from 'react';

export const Logo = ({ size = 'medium', className = '' }) => {
  const getSize = () => {
    switch (size) {
      case 'small': return { width: 32, height: 32 };
      case 'large': return { width: 120, height: 120 };
      case 'medium':
      default: return { width: 64, height: 64 };
    }
  };

  const dimensions = getSize();

  return (
  <img
    src="/img/Frame 12.png" //Logo image here
    alt="Your Logo"
    width={dimensions.width}
    height={dimensions.height}
    className={`logo wide ${className}`}  // 👈 added logo + wide classes
    style={{ display: 'inline-block' }}
  />
  
  );
};

export default Logo;
