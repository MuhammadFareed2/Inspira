import { StudentTable } from '@/components/DataTables/StudentsTable'
import { StudentModal } from '@/components/Dialogs/StudentsModal'

import React from 'react'

const Students = () => {
  return (
    <>
    <div className='min-h-screen p-10'>
      <div className='flex justify-between my-2'>
        <div className='text-3xl font-bold text-center'>Students</div>
      <StudentModal />
      </div>
        <StudentTable />
    </div>
  </>
  )
}

export default Students