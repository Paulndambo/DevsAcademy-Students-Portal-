import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Calendar, Clock, CheckCircle, ArrowLeft, Download, UserCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams } from 'react-router-dom';
import { BACKEND_URL } from '../../constants';

const AssignmentDetails = () => {
  // Sample assignment data - replace with your actual data
  const [assignment, setAssignmentDetails] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    const getAssignmentDetails = async() => {
      const response = await fetch(`${BACKEND_URL}/courses/assignments/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Cookies.get("token")}`
        }
      })

      const data = await response.json()
      console.log(data)
      setAssignmentDetails(data)
    }
    getAssignmentDetails();
  }, [id])


  const getStatusColor = (status) => {
    switch (status && status.toLowerCase()) {
      case 'submitted': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'late': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <Button variant="ghost" className="mb-4" onClick={() => window.location.replace("/")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Assignments
        </Button>
        
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{assignment?.title}</h1>
          <Badge className={getStatusColor(assignment?.status)}>
            {assignment?.status}
          </Badge>
        </div>
        <p className="text-gray-600 mt-2">Course: {assignment?.course_title}</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Assignment Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>{assignment?.description}</p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span>Due Date: {assignment?.due_date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span>Time Remaining: {assignment?.time_remaining} Days</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gray-500" />
                <span>Maximum Score: {assignment?.total_score} points</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCircle className="w-4 h-4 text-gray-500" />
                <span>Instructor: {assignment?.instructor}</span>
              </div>
            </div>
          </CardContent>
        </Card>

      
        <Card>
          <CardHeader>
            <CardTitle>Resources & Attachments</CardTitle>
            <CardDescription>Download the assignment materials below</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
             
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <Button className="bg-green-500" onClick={() => window.location.replace(assignment?.assignment_link)} variant="ghost" size="sm">
                    View Assignment Document
                  </Button>
                </div>
            
            </div>
          </CardContent>
        </Card>

        {/*
        <Card>
          <CardHeader>
            <CardTitle>Submit Assignment</CardTitle>
            <CardDescription>Upload your completed work in {assignment?.submissionType} format</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-32 border-2 border-dashed rounded-lg border-gray-300 bg-gray-50">
              <div className="text-center">
                <Button>Choose File</Button>
                <p className="mt-2 text-sm text-gray-600">or drag and drop your file here</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end space-x-4">
            <Button variant="outline">Save Draft</Button>
            <Button>Submit Assignment</Button>
          </CardFooter>
        </Card>
        */}
      </div>
    </div>
  );
};

export default AssignmentDetails;