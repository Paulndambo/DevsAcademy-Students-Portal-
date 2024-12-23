import React, { useState } from 'react';
import { Save, Edit } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const StudentProfile = ({ studentData }) => {
  const [isEditing, setIsEditing] = useState(false);
  console.log(studentData)

  const [editFormData, setEditFormData] = useState(studentData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setEditFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setEditFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const full_name = (first_name, last_name) => `${first_name} ${last_name}`

  const handleSubmit = () => {
    setStudentData(editFormData);
    setIsEditing(false);
    // Add your API call here to update the student data
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Student Profile</h1>
        <Button>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Full Name</label>
            {isEditing ? (
              <Input
                name="name"
                value={full_name(editFormData.first_name, editFormData.last_name)}
                onChange={handleInputChange}
              />
            ) : (
              <p className="text-sm">{full_name(studentData.first_name, studentData.last_name)}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            {isEditing ? (
              <Input
                name="email"
                type="email"
                value={editFormData.email}
                onChange={handleInputChange}
              />
            ) : (
              <p className="text-sm">{studentData.email}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Student ID</label>
            <p className="text-sm">{studentData.phone}</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Phone Number</label>
            {isEditing ? (
              <Input
                name="phone"
                value={editFormData.phone}
                onChange={handleInputChange}
              />
            ) : (
              <p className="text-sm">{studentData.phone}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Date of Birth</label>
            {isEditing ? (
              <Input
                name="dateOfBirth"
                type="date"
                value={editFormData.dateOfBirth}
                onChange={handleInputChange}
              />
            ) : (
              <p className="text-sm">{studentData.dateOfBirth}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Address</label>
            {isEditing ? (
              <Input
                name="address"
                value={editFormData.address}
                onChange={handleInputChange}
              />
            ) : (
              <p className="text-sm">{studentData.address}</p>
            )}
          </div>
        </CardContent>
      </Card>

      
    </div>
  );
};

export default StudentProfile;