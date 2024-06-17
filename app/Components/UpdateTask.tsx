import React from 'react'
import { IoCloseCircleSharp } from 'react-icons/io5'

function UpdateTask() {
  return (
    <div className='p-8 w-[420px] left-6 h-56 absolute top-24 bg-white rounded-md'>

        {/* Model Header */}
        <div className='flex justify-between items-center'>
          <div className=''>
             Edit The Task
          </div>

          <IoCloseCircleSharp className='text-2xl cursor-pointer' />
        </div>


        
        {/* Model Input */}
        <div className='flex gap-3 mt-14 justify-between items-center'>
          <input type="text"
          placeholder='Enter a name...'
          className='border p-3 border-gray-200 w-[240px] rounded-md text-[12px] outline-blue-600'
          />

<button className='bg-gradient-to-r p-2 text-white rounded-md w-[120px] from-blue-700 to-blue-400 hover:text-black hover:text-light'>Edit task</button>

        </div>

    </div>
  )
}

export default UpdateTask