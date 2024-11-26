import React from 'react';
import { Calendar, Globe, Users } from 'lucide-react';

const Card = ({ 
  className = '', 
  children,
  variant = 'default',
  ...props 
}) => {
  const baseClasses = 'rounded-2xl p-6 transition-all duration-300';
  
  const variants = {
    default: 'bg-white shadow-sm hover:shadow-md',
    feature: 'bg-blue-600 text-white',
    info: 'bg-gray-50 border border-gray-100'
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

// Feature Card Demo with the new Apple-inspired design
const FeatureCardDemo = () => {
  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Smart Calendar",
      description: "Plan your time off with our intelligent calendar system",
      badge: "AI-Powered"
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Region Aware",
      description: "Seamlessly handles UK and US holiday systems",
      badge: "Global Ready"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Team Sync",
      description: "Coordinate leave with your team effortlessly",
      badge: "Real-time"
    }
  ];

  return (
    <div className="p-6 bg-gray-50 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Features</h2>
      
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} variant="feature" className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-white/10 rounded-lg">
                {feature.icon}
              </div>
              <span className="text-sm bg-white/10 px-3 py-1 rounded-full">
                {feature.badge}
              </span>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
            
            <button className="flex items-center text-sm text-white/80 hover:text-white">
              Learn more
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeatureCardDemo;
