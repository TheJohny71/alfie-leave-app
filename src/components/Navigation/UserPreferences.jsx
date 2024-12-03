import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";

const UserPreferences = () => {
  const [preferences, setPreferences] = useState({
    notifications: {
      email: true,
      push: true,
      leaveRequests: true,
      teamUpdates: false,
    },
    appearance: {
      darkMode: false,
      compactView: false,
    },
    calendar: {
      defaultView: 'month',
      showWeekends: true,
      showHolidays: true,
    }
  });

  const updatePreference = (category, setting, value) => {
    setPreferences(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [setting]: value
      }
    }));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <Settings className="h-5 w-5 text-gray-500" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Preferences</SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-6">
          {/* Notifications */}
          <div>
            <h3 className="text-lg font-medium">Notifications</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm">Email Notifications</label>
                <Switch
                  checked={preferences.notifications.email}
                  onCheckedChange={(checked) => 
                    updatePreference('notifications', 'email', checked)
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm">Push Notifications</label>
                <Switch
                  checked={preferences.notifications.push}
                  onCheckedChange={(checked) => 
                    updatePreference('notifications', 'push', checked)
                  }
                />
              </div>
            </div>
          </div>

          {/* Appearance */}
          <div>
            <h3 className="text-lg font-medium">Appearance</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm">Dark Mode</label>
                <Switch
                  checked={preferences.appearance.darkMode}
                  onCheckedChange={(checked) => 
                    updatePreference('appearance', 'darkMode', checked)
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm">Compact View</label>
                <Switch
                  checked={preferences.appearance.compactView}
                  onCheckedChange={(checked) => 
                    updatePreference('appearance', 'compactView', checked)
                  }
                />
              </div>
            </div>
          </div>

          {/* Calendar Settings */}
          <div>
            <h3 className="text-lg font-medium">Calendar</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm">Show Weekends</label>
                <Switch
                  checked={preferences.calendar.showWeekends}
                  onCheckedChange={(checked) => 
                    updatePreference('calendar', 'showWeekends', checked)
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm">Show Holidays</label>
                <Switch
                  checked={preferences.calendar.showHolidays}
                  onCheckedChange={(checked) => 
                    updatePreference('calendar', 'showHolidays', checked)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default UserPreferences;
