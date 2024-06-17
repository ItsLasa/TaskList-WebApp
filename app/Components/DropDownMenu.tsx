import { Icon } from '@mui/material'
import React from 'react'
import { MdOutlineEdit,MdOutlineDeleteOutline  } from "react-icons/md";

function DropDownMenu() {
   
  return (
    <div className='p-4 w-48 fixed top-12 left-14 shadow-md flex rounded-lg flex-col gap-3 bg-white text-[13px]'>

    <div className=' group flex gap-2  flex-col items-center border border-gray-200 rounded-md p-3 cursor-pointer '>

    
        <MdOutlineEdit className='text-2xl text-blue-600 transition-all duration-300 group-hover:-rotate-45 group-hover:scale-110  '/>
        <span className=' font-semibold'>Modify</span>
    
    </div>
    
    <div className='group flex gap-2 flex-col items-center border border-gray-200 rounded-md rota p-3 cursor-pointer '>

    
        <MdOutlineDeleteOutline className='text-2xl text-blue-600 transition-all duration-300 group-hover:rotate-45 group-hover:scale-110'/>
        <span className=' font-semibold'>Delete</span>
    
    </div>


    </div>
  )
}

export default DropDownMenu