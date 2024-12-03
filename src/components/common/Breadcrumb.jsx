import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm">
      <div className="flex items-center text-gray-600 hover:text-gray-900">
        <Home className="w-4 h-4" />
      </div>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <button
            className={`${
              index === items.length - 1
                ? 'text-gray-900 font-medium cursor-default'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {item}
          </button>
        </React.Fragment>
      ))}
    </nav>
  );
};

// Demo Component showing different breadcrumb scenarios
const BreadcrumbDemo = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-50">
      <div className="space-y-4">
        <h2 className="text-lg font-medium text-gray-900">Breadcrumb Examples</h2>
        
        <div className="space-y-4">
          {/* Leave Request Flow */}
          <div className="p-4 bg-white rounded-lg border border-gray-200">
            <Breadcrumb 
              items={['Leave Requests', 'New Request']} 
            />
          </div>

          {/* Team Calendar View */}
          <div className="p-4 bg-white rounded-lg border border-gray-200">
            <Breadcrumb 
              items={['Team Calendar', 'Marketing', 'November 2024']} 
            />
          </div>

          {/* Settings Page */}
          <div className="p-4 bg-white rounded-lg border border-gray-200">
            <Breadcrumb 
              items={['Settings', 'Notifications']} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbDemo;
