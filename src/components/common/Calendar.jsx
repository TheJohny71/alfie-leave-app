import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarGrid = () => {
  // Sample data for demonstration
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentMonth = Array.from({ length: 35 }, (_, i) => ({
    date: i + 1,
    isCurrentMonth: i < 31,
    hasEvent: [5, 12, 18].includes(i + 1),
    eventType: i + 1 === 5 ? 'annual' : i + 1 === 12 ? 'sick' : 'personal'
  }));

  const eventColors = {
    annual: 'bg-blue-500',
    sick: 'bg-red-500',
    personal: 'bg-green-500'
  };

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Calendar Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">November 2024</h2>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-50 rounded-lg">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg">
              Today
            </button>
            <button className="p-2 hover:bg-gray-50 rounded-lg">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-4">
        {/* Day headers */}
        <div className="grid grid-cols-7 mb-2">
          {days.map(day => (
            <div key={day} className="px-2 py-3">
              <span className="text-sm font-medium text-gray-600">{day}</span>
            </div>
          ))}
        </div>

        {/* Date grid */}
        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {currentMonth.map((day, index) => (
            <div
              key={index}
              className={`min-h-32 bg-white ${!day.isCurrentMonth ? 'bg-gray-50' : ''}`}
            >
              <div className="px-2 py-1">
                <span className={`text-sm ${!day.isCurrentMonth ? 'text-gray-400' : 'text-gray-900'}`}>
                  {day.date}
                </span>
                
                {day.hasEvent && (
                  <div className="mt-1">
                    <div className={`
                      px-2 py-1 rounded text-xs text-white
                      ${eventColors[day.eventType]}
                    `}>
                      {day.eventType.charAt(0).toUpperCase() + day.eventType.slice(1)} Leave
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="px-6 py-4 border-t border-gray-200">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm text-gray-600">Annual Leave</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-sm text-gray-600">Sick Leave</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-600">Personal Leave</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Demo wrapper
const CalendarDemo = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <CalendarGrid />
    </div>
  );
};

export default CalendarDemo;
