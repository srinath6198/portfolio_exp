import React from 'react';
import { useMagnetic } from '../../hooks/useMagnetic';

export const MagneticButton = ({ children, strength = 0.35, className = '', ...props }) => {
  const ref = useMagnetic(strength);

  return (
    <div ref={ref} className={`magnetic-wrap ${className}`} {...props}>
      {children}
    </div>
  );
};
