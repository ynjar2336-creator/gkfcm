import React, { useState } from 'react'
import { useAuthStore } from '../../store/authStore'
import { useNavigate } from 'react-router-dom'
import socketService from '../../services/socket'

export const UserProfile: React.FC = () => {
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)

  const handleLogout = () => {
    socketService.emit('auth:logout')
    logout()
    navigate('/login')
  }

  return (
    <div className="bg-white border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 space-x-reverse">
          <img
            src={user?.avatar || 'https://via.placeholder.com/40'}
            alt={user?.username}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-gray-800">{user?.username}</p>
            <p className="text-xs text-gray-500">
              {user?.status === 'online' ? '🟢 نشط' : '⚪ غير نشط'}
            </p>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>

          {showMenu && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
              <button className="block w-full text-right px-4 py-2 text-gray-700 hover:bg-gray-100">
                الإعدادات
              </button>
              <button className="block w-full text-right px-4 py-2 text-gray-700 hover:bg-gray-100">
                الملف الشخصي
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-right px-4 py-2 text-red-600 hover:bg-red-50"
              >
                تسجيل الخروج
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
