import React, { useState, useEffect } from 'react';
import { Bell, Menu, Search, Settings, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const GlobalNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  // Quick actions menu items
  const quickActions = [
    { id: 1, label: 'Request Leave', action: () => {} },
    { id: 2, label: 'View Calendar', action: () => {} },
    { id: 3, label: 'Team Overview', action: () => {} }
  ];

  return (
    <div className="w-full bg-white shadow-sm">
      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Main Nav */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-semibold">alfie</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-64 p-4">
                        <div className="space-y-2">
                          {quickActions.map(action => (
                            <button
                              key={action.id}
                              onClick={action.action}
                              className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100"
                            >
                              {action.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Team</NavigationMenuTrigger>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Calendar</NavigationMenuTrigger>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center">
            {/* Search */}
            <div className="hidden md:flex items-center px-2 py-1 rounded-lg bg-gray-100">
              <Search className="h-4 w-4 text-gray-500" />
              <input
                type="search"
                placeholder="Search..."
                className="ml-2 bg-transparent border-none focus:ring-0 text-sm"
              />
            </div>

            {/* Notifications */}
            <button className="ml-4 p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-500" />
            </button>

            {/* Settings */}
            <button className="ml-4 p-2 rounded-full hover:bg-gray-100">
              <Settings className="h-5 w-5 text-gray-500" />
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden ml-4 p-2 rounded-full hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-gray-500" />
              ) : (
                <Menu className="h-5 w-5 text-gray-500" />
              )}
            </button>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="h-10 flex items-center space-x-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <span className="text-gray-500 hover:text-gray-700 cursor-pointer">
                {crumb}
              </span>
              {index < breadcrumbs.length - 1 && (
                <span className="text-gray-300">/</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {quickActions.map(action => (
              <button
                key={action.id}
                onClick={action.action}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalNavigation;
