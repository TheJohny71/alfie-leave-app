import React from 'react';
import { Clock, Calendar, Users, AlertCircle } from 'lucide-react';

const StatsCard = ({ title, value, icon: Icon, trend, color = 'blue' }) => {
  const colors = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    red: 'bg-red-50 text-red-600'
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
        </div>
        <div className={`p-2 rounded-lg ${colors[color]}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      {trend && (
        <p className="mt-2 text-sm text-gray-600">{trend}</p>
      )}
    </div>
  );
};

const LeaveStatsDisplay = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Leave Statistics</h2>
        <select className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>This Month</option>
          <option>Last 3 Months</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Available Leave Days"
          value="12"
          icon={Calendar}
          trend="2 days used this month"
          color="blue"
        />
        <StatsCard
          title="Pending Requests"
          value="3"
          icon={Clock}
          trend="1 awaiting approval"
          color="yellow"
        />
        <StatsCard
          title="Team on Leave"
          value="2"
          icon={Users}
          trend="Marketing Team"
          color="green"
        />
        <StatsCard
          title="Leave Conflicts"
          value="0"
          icon={AlertCircle}
          trend="No conflicts detected"
          color="red"
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="font-medium text-gray-900">Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              { user: 'Sarah Chen', action: 'approved your leave request', time: '2 hours ago' },
              { user: 'Mark Thompson', action: 'requested leave Dec 24-26', time: '4 hours ago' },
              { user: 'Anita Patel', action: 'cancelled leave request', time: '1 day ago' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  {activity.user.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo Component
const StatsDemo = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <LeaveStatsDisplay />
    </div>
  );
};

export default StatsDemo;
