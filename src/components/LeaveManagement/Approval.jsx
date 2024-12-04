import React from 'react'
import GlobalNavigation from './components/Navigation'
import LeaveManagement from './components/LeaveManagement'

function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <GlobalNavigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <LeaveManagement />
      </main>
    </div>
  )
}

export default App
