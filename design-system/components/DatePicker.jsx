import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

const DatePicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  
  // Sample calendar data
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const currentMonth = Array.from({ length: 35 }, (_, i) => ({
    date: i + 1,
    isCurrentMonth: i < 31,
    isToday: i === 7
  }));

  const handleDateSelect = (day) => {
    if (day.isCurrentMonth) {
      setSelectedDate(day.date);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      {/* Input Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 px-3 py-2 text-left text-sm bg-white border border-gray-200 rounded-lg hover:border-blue-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      >
        <CalendarIcon className="w-4 h-4 text-gray-400" />
        <span className="text-gray-700">
          {selectedDate ? `November ${selectedDate}, 2024` : 'Select date'}
        </span>
      </button>

      {/* Calendar Dropdown */}
      {isOpen && (
        <div className="absolute z-10 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200">
          {/* Calendar Header */}
          <div className="px-3 py-2 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <button className="p-1 hover:bg-gray-50 rounded-md">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <span className="text-sm font-medium text-gray-900">November 2024</span>
              <button className="p-1 hover:bg-gray-50 rounded-md">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="p-3">
            {/* Day Headers */}
            <div className="grid grid-cols-7 mb-1">
              {days.map(day => (
                <div key={day} className="text-center">
                  <span className="text-xs font-medium text-gray-500">{day}</span>
                </div>
              ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-1">
              {currentMonth.map((day, index) => (
                <button
                  key={index}
                  onClick={() => handleDateSelect(day)}
                  disabled={!day.isCurrentMonth}
                  className={`
                    h-8 text-sm rounded-md flex items-center justify-center
                    ${!day.isCurrentMonth ? 'text-gray-300' : 'text-gray-700'}
                    ${day.isToday ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:bg-gray-50'}
                    ${selectedDate === day.date ? 'bg-blue-600 text-white hover:bg-blue-600' : ''}
                  `}
                >
                  {day.date}
                </button>
              ))}
            </div>
          </div>

          {/* Calendar Footer */}
          <div className="px-3 py-2 border-t border-gray-200">
            <button
              onClick={() => {
                const today = new Date().getDate();
                setSelectedDate(today);
                setIsOpen(false);
              }}
              className="w-full px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Demo Component
const DatePickerDemo = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-sm mx-auto space-y-4">
        <h2 className="text-lg font-medium text-gray-900">Select Leave Date</h2>
        <DatePicker />
      </div>
    </div>
  );
};

export default DatePickerDemo;
