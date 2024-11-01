"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const mockTrainers = [
  { id: "1", name: "Trainer 1" },
  { id: "2", name: "Trainer 2" },
  { id: "3", name: "Trainer 3" },
]

const mockCourses = [
  { id: "1", name: "Course 1" },
  { id: "2", name: "Course 2" },
  { id: "3", name: "Course 3" },
]

export function StudentModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Student</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add Student</DialogTitle>
        </DialogHeader>
        <StudentForm />
      </DialogContent>
    </Dialog>
  )
}

function StudentForm({ className }) {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    education: '',
    cnic: '',
    email: '',
    profilePic: '',
    address: '',
    gender: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Student Data Submitted:", formData);
    // Optionally reset the form or close the modal after submission
    // setFormData(initialState);
  };

  return (
    <form className={cn("grid grid-cols-1 sm:grid-cols-2 gap-4", className)} onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <Label htmlFor="firstName">First Name</Label>
        <Input required type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="lastName">Last Name</Label>
        <Input required type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="education">Education</Label>
        <Input required type="text" id="education" name="education" value={formData.education} onChange={handleChange} className="mt-1" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="cnic">CNIC</Label>
        <Input required type="text" id="cnic" name="cnic" value={formData.cnic} onChange={handleChange} className="mt-1" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="email">Email</Label>
        <Input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="profilePic">Profile Picture URL</Label>
        <Input required type="url" id="profilePic" name="profilePic" value={formData.profilePic} onChange={handleChange} className="mt-1" />
      </div>
      <div className="flex flex-col sm:col-span-2">
        <Label htmlFor="address">Address</Label>
        <Input required type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="mt-1 w-full" />
      </div>
      <div className="flex flex-col sm:col-span-2">
        <Label htmlFor="gender">Gender</Label>
        <Select required id="gender" name="gender" onValueChange={(value) => setFormData({ ...formData, gender: value })} className="mt-1">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Male">Male</SelectItem>
            <SelectItem value="Female">Female</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col sm:col-span-2">
        <Label htmlFor="role">Role</Label>
        <Select required id="role" name="role" onValueChange={(value) => setFormData({ ...formData, role: value })} className="mt-1">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Trainer">Trainer</SelectItem>
            <SelectItem value="Student">Student</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="col-span-2">Add Student</Button>
    </form>
  )
}
