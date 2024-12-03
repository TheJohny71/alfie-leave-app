import React from 'react';
import { Search, Bell, Settings, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Left section: Logo and Search */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">a</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">alfie</span>
            </div>
            
            <div className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="search"
                  placeholder="Search leaves..."
                  className="w-64 pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Center section: View toggles */}
          <nav className="hidden md:flex items-center gap-1">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">Month</button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">Week</button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">Agenda</button>
          </nav>

          {/* Right section: Actions */}
          <div className="flex items-center gap-2">
            {/* Region Selector */}
            <div className="flex items-center gap-1 px-2 py-1 border border-gray-200 rounded-lg">
              <button className="px-2 py-1 text-sm font-medium bg-blue-600 text-white rounded">UK</button>
              <button className="px-2 py-1 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded">US</button>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-1">
              <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <Settings className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Demo wrapper to show the header in context
const HeaderDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-semibold text-gray-900">Content Area</h1>
      </main>
    </div>
  );
};

export default HeaderDemo;
