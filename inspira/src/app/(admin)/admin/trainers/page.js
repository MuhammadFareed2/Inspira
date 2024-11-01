import { TrainerTable } from '@/components/DataTables/TrainersTable'
import { TrainerModal } from '@/components/Dialogs/TrainersDialog'
import React from 'react'

const Trainers = () => {
  return (
    <>
    <div className='min-h-screen p-10'>
      <div className='flex justify-between my-2'>
        <div className='text-3xl font-bold text-center'>Trainer</div>
        <TrainerModal />
      </div>
      <TrainerTable />
    </div>
    </>
  )
}

export default Trainers


