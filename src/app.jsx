import React from 'react';
import { GlobalNavigation } from './components/Navigation';
import LeaveManagement from './components/LeaveManagement';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <GlobalNavigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <LeaveManagement />
      </main>
    </div>
  );
};

export default App;
