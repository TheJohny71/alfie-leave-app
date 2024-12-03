import React from 'react';
import { Calendar, Clock, Hourglass } from 'lucide-react';

const LeaveBalance = ({ balances }) => {
  const getProgressColor = (used, total) => {
    const percentage = (used / total) * 100;
    if (percentage > 75) return 'bg-red-500';
    if (percentage > 50) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Leave Balance</h2>
      </div>

      <div className="p-6 grid gap-6">
        {balances.map((balance, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <h3 className="font-medium text-gray-900">{balance.type}</h3>
              </div>
              <span className={`font-medium ${
                getProgressColor(balance.used, balance.total).replace('bg-', 'text-')
              }`}>
                {balance.total - balance.used} days remaining
              </span>
            </div>

            {/* Progress Bar */}
            <div className="relative pt-1">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-xs font-medium text-gray-600">
                    Used: {balance.used} days
                  </span>
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-600">
                    Total: {balance.total} days
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-100">
                <div
                  style={{ width: `${(balance.used / balance.total) * 100}%` }}
                  className={`shadow-none flex flex-col text-center whitespace-nowrap 
                    text-white justify-center ${getProgressColor(balance.used, balance.total)}`}
                />
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">
                  Pending: {balance.pending} days
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Hourglass className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">
                  Expires in: {balance.expiryDays} days
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="p-6 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600">
            Total Leave Balance
          </span>
          <span className="text-lg font-semibold text-gray-900">
            {balances.reduce((acc, curr) => acc + (curr.total - curr.used), 0)} days
          </span>
        </div>
      </div>
    </div>
  );
};

// Example Usage
const LeaveBalanceDemo = () => {
  const sampleBalances = [
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

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <LeaveBalance balances={sampleBalances} />
      </div>
    </div>
  );
};

export default LeaveBalanceDemo;
