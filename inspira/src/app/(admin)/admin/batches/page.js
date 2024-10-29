import { BatchTable } from '@/components/DataTables/BatchTable'
import { BatchModal } from '@/components/Dialogs/BatchModal'
import React from 'react'

const Batches = () => {
  return (
        <>
        <div className='min-h-screen p-10'>
          <div className='flex justify-between my-2'>
            <div className='text-3xl font-bold text-center'>Batches</div>
          <BatchModal />
          </div>
          <BatchTable />
        </div>
      </>
  )
}

export default Batches