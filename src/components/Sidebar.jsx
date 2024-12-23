import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  BookOpen, 
  Calendar, 
  CreditCard, 
  UserCircle,
  LogOut 
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Sidebar = ({ setActiveTab, isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} min-h-screen bg-white shadow-lg transition-all duration-300`}>
          <div className="p-4 flex justify-between items-center border-b">
            <h2 className={`font-bold ${isSidebarOpen ? 'block' : 'hidden'}`}>Student Portal</h2>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          </div>

          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full flex items-center p-2 rounded-lg hover:bg-gray-100 ${
                    activeTab === 'dashboard' ? 'bg-gray-100' : ''
                  }`}
                >
                  <Home size={20} />
                  {isSidebarOpen && <span className="ml-3">Dashboard</span>}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('assignments')}
                  className={`w-full flex items-center p-2 rounded-lg hover:bg-gray-100 ${
                    activeTab === 'assignments' ? 'bg-gray-100' : ''
                  }`}
                >
                  <BookOpen size={20} />
                  {isSidebarOpen && <span className="ml-3">Assignments</span>}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('payments')}
                  className={`w-full flex items-center p-2 rounded-lg hover:bg-gray-100 ${
                    activeTab === 'payments' ? 'bg-gray-100' : ''
                  }`}
                >
                  <CreditCard size={20} />
                  {isSidebarOpen && <span className="ml-3">Payments</span>}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center p-2 rounded-lg hover:bg-gray-100 ${
                    activeTab === 'profile' ? 'bg-gray-100' : ''
                  }`}
                >
                  <UserCircle size={20} />
                  {isSidebarOpen && <span className="ml-3">Profile</span>}
                </button>
              </li>
            </ul>
          </nav>

          <div className="absolute bottom-0 w-full p-4 border-t">
            <div className="flex items-center space-x-3">
              <UserCircle size={20} />
              {isSidebarOpen && (
                <div>
                  <p className="font-medium">{studentData.name}</p>
                  <p className="text-sm text-gray-600">{studentData.email}</p>
                </div>
              )}
            </div>
          </div>
        </div>
  )
}

export default Sidebar