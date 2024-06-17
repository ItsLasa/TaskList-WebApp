import React from 'react'
import { FaPenToSquare } from 'react-icons/fa6'
import AddTaskBar from './AddTaskBar'
import TaskArea from './TaskArea'
import FooterBar from './FooterBar'
import UpdateTask from './UpdateTask'
import { Toaster } from 'react-hot-toast'

function Head() {
  return (
    <div className='w-[470px] h-[460px] bg-white p-4 rounded-xl'>
     <ToDoTitle/>
     <AddTaskBar/>
     <TaskArea/>
     <FooterBar/>

     {/* <Toaster
     toastOptions={{
      style:{
        padding:'15px',
      }
     }}
     /> */}
    
    </div>
  )
}

export default Head

function ToDoTitle(){
    return(
        <div className='p-3 flex items-center  gap-3'>
            <FaPenToSquare 
            className='text-3xl  '
            />

            <div className= ' font-semibold text-xl flex gap-1'>
                <div className='text-blue-500'>Task </div>
                <div>Master</div>
            </div>

          

        </div>
    )
}