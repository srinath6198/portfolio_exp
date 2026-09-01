import React from 'react';
import { useMagnetic } from '../../hooks/useMagnetic';
import './Button.scss';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = null,
  iconPosition = 'right',
  href = null,
  onClick = null,
  className = '',
  magnetic = false,
  target = null,
  rel = null,
  disabled = false,
  type = 'button',
  ...props
}) => {
  const magneticRef = useMagnetic(0.3);
  const ref = magnetic ? magneticRef : null;

  const content = (
    <>
      <span className="btn-glow-shimmer" />
      {icon && iconPosition === 'left' && <span className="btn-icon left">{icon}</span>}
      <span className="btn-text">{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon right">{icon}</span>}
    </>
  );

  const classes = `btn-custom btn-${variant} btn-${size} ${className} ${disabled ? 'disabled' : ''}`;

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};
