import React from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">تطبيق الدردشة</h1>
          <p className="text-gray-600 mt-2">تواصل وتحدث مع أصدقائك بسهولة</p>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">مرحباً بك</h2>
          <p className="text-gray-600 mb-6">جاري تطوير تطبيق الدردشة...</p>
          <div className="animate-pulse flex justify-center items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
