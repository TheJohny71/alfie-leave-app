import React from 'react';
import Balance from './Balance';
import StatusTracker from './StatusTracker';
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
        },
        {
            type: 'Personal Leave',
            used: 2,
            total: 5,
            pending: 1,
            expiryDays: 120
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

    // Sample data for approval
    const pendingApproval = {
        employee: "Jane Smith",
        department: "Engineering",
        startDate: "2024-03-20",
        endDate: "2024-03-25",
        duration: "5",
        reason: "Annual family vacation",
        teamCoverage: [
            { name: "John Doe", available: true },
            { name: "Alice Johnson", available: false },
            { name: "Bob Wilson", available: true }
        ]
    };

    const handleApprove = (comments) => {
        console.log('Approved with comments:', comments);
    };

    const handleReject = (comments) => {
        console.log('Rejected with comments:', comments);
    };

    return (
        <div className="space-y-8">
            {/* First Row: Balance and Status */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <Balance balances={leaveBalances} />
                </div>
                <div>
                    <StatusTracker requests={leaveRequests} />
                </div>
            </div>

            {/* Second Row: Request Flow and Approval */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <RequestFlow />
                </div>
                <div>
                    <Approval 
                        request={pendingApproval}
                        onApprove={handleApprove}
                        onReject={handleReject}
                    />
                </div>
            </div>
        </div>
    );
}
