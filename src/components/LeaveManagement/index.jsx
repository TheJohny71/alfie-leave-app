import React from 'react';
import Approval from './Approval';
import Balance from './Balance';
import Notifications from './Notifications';
import RequestFlow from './RequestFlow';
import StatusTracker from './StatusTracker';

export default function LeaveManagement() {
    return (
        <div className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Balance />
                <StatusTracker />
                <Notifications />
            </div>

            {/* Request and Approval Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow">
                    <RequestFlow />
                </div>
                <div className="bg-white rounded-lg shadow">
                    <Approval />
                </div>
            </div>
        </div>
    );
}
