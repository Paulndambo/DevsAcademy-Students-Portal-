import React from 'react'
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
  
const StudentDashboard = ({ course }) => {
    const studentData = {
        name: "John Doe",
        email: "john.doe@example.com",
        course: "Advanced Mathematics",
        instructor: {
          name: "Dr. Sarah Smith",
          email: "sarah.smith@example.com",
          office: "Room 204"
        },
        payments: [
          { id: 1, date: "2024-01-15", amount: 500, status: "Paid" },
          { id: 2, date: "2024-02-15", amount: 500, status: "Pending" }
        ],
        assignments: [
          { id: 1, title: "Calculus Assignment 1", dueDate: "2024-12-25", status: "Submitted" },
          { id: 2, title: "Linear Algebra Quiz", dueDate: "2024-12-28", status: "Pending" }
        ],
        attendance: [
          { id: 1, date: "2024-12-20", status: "Present" },
          { id: 2, date: "2024-12-19", status: "Absent" }
        ]
      };
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Course Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Course: {course?.name}</p>
                <p className="mt-2">Instructor: {course?.instructor}</p>
                <p>Email: {course?.instructor_email}</p>
                <p>Phone: {course?.instructor_phone}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                {studentData.assignments.map(assignment => (
                  <div key={assignment.id} className="mb-2">
                    <p className="font-medium">{assignment.title}</p>
                    <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
                    <p className="text-sm text-gray-600">Status: {assignment.status}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Attendance</CardTitle>
              </CardHeader>
              <CardContent>
                {studentData.attendance.map(record => (
                  <div key={record.id} className="mb-2">
                    <p>Date: {record.date}</p>
                    <p className="text-sm text-gray-600">Status: {record.status}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
  )
}

export default StudentDashboard