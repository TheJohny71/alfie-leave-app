import React, { useState } from 'react';
import { GlobalNavigation } from '../Navigation/GlobalNavigation';
import { NotificationCenter } from '../Navigation/NotificationCenter';
import { UserPreferences } from '../Navigation/UserPreferences';
import LeaveRequestFlow from './LeaveRequestFlow';
import LeaveStatusTracker from './LeaveStatusTracker';
import LeaveApproval from './LeaveApproval';
import LeaveNotifications from './LeaveNotifications';
import LeaveBalance from './LeaveBalance';

const LeaveManagement = () => {
  const [activeView, setActiveView] = useState('dashboard');
  
  const sampleData = {
    balances: [
      {
        type: 'Annual Leave',
        used: 10,
        total: 20,
        pending: 2,
        expiryDays: 90
      },
      {
        type: 'Sick Leave',
        used: 3,
        total: 10,
        pending: 0,
        expiryDays: 180
      }
    ],
    requests: [
      {
        type: 'Annual Leave',
        startDate: '2024-12-20',
        endDate: '2024-12-25',
        status: 'pending',
        requestDate: '2024-11-15',
        notes: 'Year-end vacation'
      }
    ],
    notifications: [
      {
        type: 'pending',
        message: 'Your leave request is awaiting approval',
        time: '2 hours ago',
        read: false
      }
    ]
  };

  const handleNewRequest = (requestData) => {
    console.log('New request:', requestData);
  };

  const renderView = () => {
    switch (activeView) {
      case 'request':
        return <LeaveRequestFlow onSubmit={handleNewRequest} />;
      case 'status':
        return <LeaveStatusTracker requests={sampleData.requests} />;
      case 'approvals':
        return <LeaveApproval request={sampleData.requests[0]} />;
      default:
        return (
          <div className="grid gap-6">
            <LeaveBalance balances={sampleData.balances} />
            <LeaveNotifications notifications={sampleData.notifications} />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <GlobalNavigation 
        activeView={activeView}
        onViewChange={setActiveView}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end space-x-4 py-4">
          <NotificationCenter notifications={sampleData.notifications} />
          <UserPreferences />
        </div>
        
        <main className="py-6">
          {renderView()}
        </main>
      </div>
    </div>
  );
};

export default LeaveManagement;
