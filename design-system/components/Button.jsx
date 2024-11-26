import React from 'react';

// Button Component
const Button = React.forwardRef(({ 
  className = '',
  variant = 'primary',
  size = 'md',
  children,
  disabled = false,
  ...props 
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50',
    tertiary: 'text-blue-600 hover:bg-gray-50'
  };

  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button
      className={classes}
      ref={ref}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

// Demo Component
const ButtonDemo = () => {
  return (
    <div className="p-6 space-y-4">
      <div className="space-x-4">
        <Button variant="primary">Request Leave</Button>
        <Button variant="secondary">Cancel</Button>
        <Button variant="tertiary">Learn More</Button>
      </div>
      
      <div className="space-x-4">
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
      </div>
      
      <div className="space-x-4">
        <Button variant="primary" disabled>Disabled</Button>
        <Button variant="secondary" disabled>Disabled</Button>
      </div>
    </div>
  );
};

export default ButtonDemo;
