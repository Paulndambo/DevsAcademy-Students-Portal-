import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  BookOpen, 
  Calendar, 
  CreditCard, 
  UserCircle,
  LogOut,
  PlusCircle,
  Eye,
  Pencil,
  Trash2
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Attendance = ({ attendanceData }) => {
    console.log(attendanceData)
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Sessions Attendance</CardTitle>
        
      </CardHeader>
      <CardContent>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th>#</th>
                <th className="px-6 py-3">Course</th>
                <th className="px-6 py-3">Session Date</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((attendance, index) => (
                <tr key={attendance.id} className="bg-white border-b">
                  <td>{index + 1}</td>
                  <td className="px-6 py-4">{attendance.course}</td>
                  <td className="px-6 py-4">{attendance.session_date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      attendance.marked_as === 'Present' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {attendance.marked_as}
                    </span>
                  </td>
              
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default Attendance;