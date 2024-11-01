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

export function BatchModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Batch</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Batch</DialogTitle>
        </DialogHeader>
        <BatchForm /> {/* Changed from CourseForm to BatchForm */}
      </DialogContent>
    </Dialog>
  )
}

function BatchForm({ className }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="batchName">Batch Name</Label>
        <Input required type="text" id="batchName" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="noOfStudents">Number of Students</Label>
        <Input required id="noOfStudents" type="number" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="trainer">Trainer</Label>
        <Select required id="trainer">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Trainer" />
          </SelectTrigger>
          <SelectContent>
            {mockTrainers.map((trainer) => (
              <SelectItem key={trainer.id} value={trainer.name}>
                {trainer.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="status">Status</Label>
        <Select required id="status">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="ongoing">Ongoing</SelectItem>
            <SelectItem value="merged">Merged</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="course">Course</Label>
        <Select required id="course">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Course" />
          </SelectTrigger>
          <SelectContent>
            {mockCourses.map((course) => (
              <SelectItem key={course.id} value={course.name}>
                {course.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Add Batch</Button>
    </form>
  )
}
