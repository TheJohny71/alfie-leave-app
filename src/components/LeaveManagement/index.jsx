import React from 'react';
import NotificationCenter from '../Navigation/NotificationCenter';
import UserPreferences from '../Navigation/UserPreferences';

export default function LeaveManagement() {
    return (
        <div>
            <h1>Leave Management</h1>
            <NotificationCenter />
            <UserPreferences />
        </div>
    );
}
