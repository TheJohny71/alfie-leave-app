import React from 'react';
import { Bell, CheckCircle, XCircle, Clock, AlertCircle } from 'lucide-react';

const LeaveNotifications = ({ notifications }) => {
  const getNotificationIcon = (type) => {
    const icons = {
      approved: <CheckCircle className="w-5 h-5 text-green-500" />,
      rejected: <XCircle className="w-5 h-5 text-red-500" />,
      pending: <Clock className="w-5 h-5 text-yellow-500" />,
      reminder: <AlertCircle className="w-5 h-5 text-blue-500" />
    };
    return icons[type] || <Bell className="w-5 h-5 text-gray-400" />;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
          <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
            {notifications.filter(n => !n.read).length} New
          </span>
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {notifications.map((notification, index) => (
          <div 
            key={index}
            className={`p-4 hover:bg-gray-50 transition-colors ${
              !notification.read ? 'bg-blue-50' : ''
            }`}
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                {getNotificationIcon(notification.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm ${!notification.read ? 'font-medium' : ''} text-gray-900`}>
                  {notification.message}
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-xs text-gray-500">
                    {notification.time}
                  </span>
                  {!notification.read && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      New
                    </span>
                  )}
                </div>
                {notification.action && (
                  <button className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-500">
                    {notification.action}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="p-6 text-center">
          <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-sm font-medium text-gray-900">No notifications</h3>
          <p className="mt-1 text-sm text-gray-500">
            You're all caught up! No new notifications.
          </p>
        </div>
      )}
    </div>
  );
};

export default LeaveNotifications;
