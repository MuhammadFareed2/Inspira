import { CourseTable } from '@/components/DataTables/CourseTable'
import { CourseDialog } from '@/components/Dialogs/CourseModal'
import React from 'react'

const Courses = () => {
  return (
    <>
      <div className='min-h-screen p-10'>
        <div className='flex justify-between my-2'>
          <div className='text-3xl font-bold text-center'>Courses</div>
          <CourseDialog />
        </div>
        <CourseTable />
      </div>
    </>
  )
}

export default Courses