import React from 'react';
import Balance from './Balance';
import StatusTracker from './StatusTracker';
import Notifications from './Notifications';
import RequestFlow from './RequestFlow';
import Approval from './Approval';

export default function LeaveManagement() {
    // Sample data for leave balances
    const leaveBalances = [
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
    ];

    // Sample data for leave requests
    const leaveRequests = [
        {
            type: 'Annual Leave',
            startDate: '2024-03-15',
            endDate: '2024-03-20',
            status: 'pending',
            requestDate: '2024-03-01',
            notes: 'Family vacation'
        },
        {
            type: 'Sick Leave',
            startDate: '2024-03-10',
            endDate: '2024-03-11',
            status: 'approved',
            requestDate: '2024-03-09'
        }
    ];

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Leave Balance Card */}
                <div className="xl:col-span-2">
                    <Balance balances={leaveBalances} />
                </div>
                
                {/* Status Tracker */}
                <div>
                    <StatusTracker requests={leaveRequests} />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Request Flow Section */}
                <div>
                    <RequestFlow />
                </div>
                
                {/* Approval Section */}
                <div>
                    <Approval />
                </div>
            </div>
        </div>
    );
}
