import React, { useContext, useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  BookOpen, 
  Calendar, 
  CreditCard, 
  UserCircle,
  LogOut, 
  Users,
  Logs,
  LogsIcon,
  Calendar1Icon
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Payments from './payments/Payments';
import Assignments from './assignments/Assignments';
import StudentProfile from './StudentProfile';
import StudentDashboard from '../components/StudentDashboard';
import { DataContext } from '../context/DataContext';
import Sessions from "./sessions/Sessions";
import Attendance from "./attendance/Attendance";

const StudentPortal = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');

  const { studentDetails } = useContext(DataContext);
  const { assignments } = useContext(DataContext);
  const { sessions } = useContext(DataContext);
  const { attendances } = useContext(DataContext);


  // Sample data - replace with your actual data
 
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (<StudentDashboard course={studentDetails?.course} />);

      case 'payments':
        return (<Payments paymentsData={studentDetails?.payments} subscription={studentDetails?.subscription} />);

      case 'assignments':
        return (<Assignments assignmentsData={assignments} />);

      case 'sessions':
        return (<Sessions sessionsData={sessions} />);

      case 'attendances':
        return (<Attendance attendanceData={attendances} />);
        
    case 'profile':
        return (<StudentProfile studentData={studentDetails} />)
    

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
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
              {/*
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
              */}
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
                  onClick={() => setActiveTab('sessions')}
                  className={`w-full flex items-center p-2 rounded-lg hover:bg-gray-100 ${
                    activeTab === 'sessions' ? 'bg-gray-100' : ''
                  }`}
                >
                  <Calendar1Icon size={20} />
                  {isSidebarOpen && <span className="ml-3">Sessions</span>}
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
                  onClick={() => setActiveTab('attendances')}
                  className={`w-full flex items-center p-2 rounded-lg hover:bg-gray-100 ${
                    activeTab === 'attendances' ? 'bg-gray-100' : ''
                  }`}
                >
                  <LogsIcon size={20} />
                  {isSidebarOpen && <span className="ml-3">Attendance</span>}
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
                  <p className="font-medium">{studentDetails?.first_name} {studentDetails?.last_name}</p>
                  <p className="text-sm text-gray-600">{studentDetails?.email}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;