import React from 'react';
import { Search } from 'lucide-react';

const Input = React.forwardRef(({ 
  className = '',
  type = 'text',
  label,
  error,
  icon,
  ...props 
}, ref) => {
  const baseClasses = 'w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors duration-200';
  const stateClasses = error
    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
    : 'border-gray-200 focus:border-blue-500 focus:ring-blue-500';
  
  const classes = `${baseClasses} ${stateClasses} ${className}`;

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        
        <input
          type={type}
          className={`${classes} ${icon ? 'pl-10' : ''}`}
          ref={ref}
          {...props}
        />
      </div>
      
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

// Input Demo Component
const InputDemo = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-50">
      <div className="max-w-sm space-y-4">
        <Input
          label="Search leaves"
          placeholder="Search..."
          icon={<Search className="w-4 h-4 text-gray-400" />}
        />
        
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
        />
        
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          error="Password must be at least 8 characters"
        />
      </div>
    </div>
  );
};

export default InputDemo;
