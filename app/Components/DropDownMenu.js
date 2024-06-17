import React from 'react';
import { MdOutlineEdit, MdOutlineDeleteOutline } from 'react-icons/md';

function DropDownMenu() {
  return (
    <div className='p-4 w-48 fixed top-12 left-14 shadow-md flex rounded-lg flex-col gap-3 bg-white text-[13px]'>

      <div className='flex flex-col items-center gap-2 p-3 border border-gray-200 rounded-md cursor-pointer group'>

        <MdOutlineEdit className='text-2xl text-blue-600 transition-all duration-300 group-hover:-rotate-45 group-hover:scale-110' />
        <span className='font-semibold'>Modify</span>

      </div>

      <div className='flex flex-col items-center gap-2 p-3 border border-gray-200 rounded-md cursor-pointer group rota'>

        <MdOutlineDeleteOutline className='text-2xl text-blue-600 transition-all duration-300 group-hover:rotate-45 group-hover:scale-110' />
        <span className='font-semibold'>Delete</span>

      </div>

    </div>
  );
}

export default DropDownMenu;
