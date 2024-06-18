'use client'
import { Icon } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { MdOutlineEdit,MdOutlineDeleteOutline  } from "react-icons/md";
import { useContextProvider } from '../ContextApi';

function DropDownMenu(props) {
   const {openDropDownMenu,setOpenDropDownMenu,selectedTask,SetOpenEditModel}=useContextProvider();
   const dropDownRef=useRef(null);

    useEffect(()=>{
      function handleOutiseClick(event){
        if(!dropDownRef.current.contains(event.target)){
          setOpenDropDownMenu(false);
        }
      }
      document.addEventListener('click',handleOutiseClick);
      return()=>{
        document.removeEventListener('click',handleOutiseClick);
      };

   },[openDropDownMenu]);

   function clickedItemMenu(menuItem){
    if(menuItem.name==='Delete'){
      console.log('do you want to delete',selectedTask);
    }
    if(menuItem.name==='Modify'){
      SetOpenEditModel(true);
      setOpenDropDownMenu(false);
    }
   }
  return (
    <div
    ref={dropDownRef}
    className={`p-4 w-48 opacity-0 fixed top-18 right-[15rem] shadow-md ${openDropDownMenu ? 'opacity-100': ''} flex rounded-lg flex-col gap-3 bg-white text-[13px]`}>

    <div className=' group flex gap-2  flex-col items-center border transition-all duration-300 hover:bg-[#5ca0f8ee] border-gray-200 rounded-md p-3 cursor-pointer '>

    
        <MdOutlineEdit className='text-2xl text-blue-600 transition-all duration-300 group-hover:-rotate-45 group-hover:scale-110  '/>
        <span className=' font-semibold'>Modify</span>
    
    </div>
    
    <div className='group flex gap-2 flex-col  transition-all duration-300 hover:bg-[#5ca0f8da] items-center border border-gray-200 rounded-md rota p-3 cursor-pointer '>

    
        <MdOutlineDeleteOutline className='text-2xl text-blue-600 transition-all duration-300 group-hover:rotate-45 group-hover:scale-110'/>
        <span className=' font-semibold'>Delete</span>
    
    </div>


    </div>
  )
}

export default DropDownMenu