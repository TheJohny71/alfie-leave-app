import React from 'react';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-[#5E5CE6] text-white hover:bg-[#4b49b8] focus:ring-[#5E5CE6]',
        secondary: 'bg-white border border-[#5E5CE6] text-[#5E5CE6] hover:bg-[#F5F5F7]',
        tertiary: 'text-[#5E5CE6] hover:bg-[#F5F5F7]'
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

const Button = React.forwardRef(({ 
  className, 
  variant, 
  size, 
  children, 
  ...props 
}, ref) => {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
