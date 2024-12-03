import React from 'react';
import { Calendar, Clock, Hourglass } from 'lucide-react';

const LeaveBalance = ({ balances }) => {
  const getProgressColor = (used, total) => {
    const percentage = (used / total) * 100;
    if (percentage > 75) return 'text-red-600';
    if (percentage > 50) return 'text-yellow-600';
    return 'text-green-600';
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
              <span className={`font-medium ${getProgressColor(balance.used, balance.total)}`}>
                {balance.total - balance.used} days remaining
              </span>
            </div>

            {/* Progress Bar */}
            <div className="relative pt-1">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-xs font-medium text-gray-600">Used: {balance.used} days</span>
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-600">Total: {balance.total} days</span>
                </div>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-100">
                <div
                  style={{ width: `${(balance.used / balance.total) * 100}%` }}
                  className={`
                    shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center
                    ${getProgress
