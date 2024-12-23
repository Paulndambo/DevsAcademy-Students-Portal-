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

const Sessions = ({ sessionsData }) => {
  

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Sessions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th>#</th>
                <th className="px-6 py-3">Course</th>
                <th className="px-6 py-3">Cohort</th>
                <th className="px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {sessionsData.map((session, index) => (
                <tr key={session.id} className="bg-white border-b">
                  <td>{index + 1}</td>
                  <td className="px-6 py-4">{session.course_name}</td>
                  <td className="px-6 py-4">{session.cohort_name}</td>
                  <td className="px-6 py-4">{session.session_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default Sessions;