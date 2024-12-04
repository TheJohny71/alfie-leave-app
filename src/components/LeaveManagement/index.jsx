import React from 'react';
import NotificationCenter from '../Navigation/NotificationCenter';
import UserPreferences from '../Navigation/UserPreferences';

export default function LeaveManagement() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation Header */}
            <nav className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <h1 className="text-xl font-bold text-gray-800">Leave Management</h1>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <NotificationCenter />
                            <UserPreferences />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 sm:px-0">
                    <div className="bg-white shadow rounded-lg p-6">
                        <h2 className="text-lg font-medium text-gray-900 mb-4">Leave Dashboard</h2>
                        
                        {/* Leave Status Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="text-sm font-medium text-blue-800">Available Leave</h3>
                                <p className="text-2xl font-bold text-blue-900 mt-2">15 days</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h3 className="text-sm font-medium text-green-800">Approved Leave</h3>
                                <p className="text-2xl font-bold text-green-900 mt-2">5 days</p>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg">
                                <h3 className="text-sm font-medium text-yellow-800">Pending Requests</h3>
                                <p className="text-2xl font-bold text-yellow-900 mt-2">2</p>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="mt-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                                    Request Leave
                                </button>
                                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                                    View Leave History
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
