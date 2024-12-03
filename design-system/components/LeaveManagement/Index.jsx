import React, { useState } from 'react';
import LeaveRequestFlow from './LeaveRequestFlow';
import LeaveStatusTracker from './LeaveStatusTracker';
import LeaveApproval from './LeaveApproval';
import LeaveNotifications from './LeaveNotifications';
import LeaveBalance from './LeaveBalance';

const LeaveManagement = () => {
  const [activeView, setActiveView] = useState('dashboard');
  
  // Sample data
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
    // Add request handling logic
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
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-semibold text-gray-900">Alfie</span>
              </div>
              <div className="ml-6 flex space-x-8">
                {[
                  { name: 'Dashboard', key: 'dashboard' },
                  { name: 'Request Leave', key: 'request' },
                  { name: 'My Requests', key: 'status' },
                  { name: 'Approvals', key: 'approvals' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setActiveView(item.key)}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium 
                      ${activeView === item.key 
                        ? 'border-b-2 border-blue-500 text-gray-900' 
                        : 'text-gray-500 hover:border-b-2 hover:border-gray-300'
                      }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {renderView()}
      </main>
    </div>
  );
};

export default LeaveManagement;
