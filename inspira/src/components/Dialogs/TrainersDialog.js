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

// TrainerModal Component
export function TrainerModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Trainer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add Trainer</DialogTitle>
        </DialogHeader>
        <TrainerForm />
      </DialogContent>
    </Dialog>
  )
}

// TrainerForm Component
function TrainerForm({ className }) {
  return (
    <form className={cn("grid grid-cols-1 sm:grid-cols-2 gap-4", className)}>
      <div className="flex flex-col">
        <Label htmlFor="firstName">First Name</Label>
        <Input required type="text" id="firstName" className="mt-1" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="lastName">Last Name</Label>
        <Input required type="text" id="lastName" className="mt-1" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="education">Education</Label>
        <Input required type="text" id="education" className="mt-1" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="cnic">CNIC</Label>
        <Input required type="text" id="cnic" className="mt-1" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="email">Email</Label>
        <Input required type="email" id="email" className="mt-1" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="profilePic">Profile Picture URL</Label>
        <Input required type="url" id="profilePic" className="mt-1" />
      </div>
      <div className="flex flex-col sm:col-span-2">
        <Label htmlFor="address">Address</Label>
        <Input required type="text" id="address" className="mt-1 w-full" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="gender">Gender</Label>
        <Select required id="gender" className="mt-1">
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
        <Select required id="role" className="mt-1">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Trainer">Trainer</SelectItem>
            <SelectItem value="Student">Student</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="col-span-2">Add Trainer</Button>
    </form>
  )
}
