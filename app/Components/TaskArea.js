'use client'
import { Checkbox } from '@mui/material';
import React from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import { useContextProvider } from '../ContextApi';

function TaskArea(props) {
  const { allTasks, setAllTasks,openDropDownMenu,setOpenDropDownMenu } = useContextProvider();
  function handleCheckedBox  (task)  {
    // copying the all task array
    const tempArray = [...allTasks];

    // getting the index of the task we clicked on
    const taskIndex = tempArray.indexOf(task);

    // change the check state
  
      tempArray[taskIndex].isChecked = !tempArray[taskIndex].isChecked;

      // updating the variable all tasks
      setAllTasks(tempArray);
    
  };

  function openDropDownFx(event){
    if(event){
      event.stopPropagation();
    }
    setOpenDropDownMenu(true);
  }

  
  return (
    <div className='ml-3 mr-3 h-56 mt-3 flex flex-col overflow-auto gap-1'>
      {allTasks.map((task) => (
        <SingleTask key={task._id} task={task} handleCheckedBox={handleCheckedBox} />
      ))}
    </div>
  );
}

export default TaskArea;

function SingleTask({key,task }) {
  const { allTasks, setAllTasks,openDropDownMenu,setOpenDropDownMenu } = useContextProvider();

  function handleCheckedBox  (task)  {
    // copying the all task array
    const tempArray = [...allTasks];

    // getting the index of the task we clicked on
    const taskIndex = tempArray.indexOf(task);

    // change the check state
  
      tempArray[taskIndex].isChecked = !tempArray[taskIndex].isChecked;

      // updating the variable all tasks
      setAllTasks(tempArray);
    
  };

  function openDropDownFx(event){
    if(event){
      event.stopPropagation();
    }
    setOpenDropDownMenu(true);
  }

  return (
    <div
      key={key}
      className={`border text-[14px] px-4 items-center border-gray-300 
        p-1 rounded-xl shadow-sm flex gap-2 justify-between ${task.isChecked ? 'opacity-50' : ''}`}
    >
      <Checkbox
        sx={{
          color: 'blue',
          '&.Mui-checked': {
            color: 'blue',
          },
        }}
        size='small'
        checked={task.isChecked}
        onChange={() => {
          handleCheckedBox(task);
        }}
      />

      <div className={`text-left w-full font-dm text-lg ${task.isChecked ? 'line-through font-medium' : ''}`}>
        {task.name}
      </div>
      <div className=' cursor-pointer transition-all duration-300 hover:scale-150 hover:rotate-90'>
        <HiDotsVertical onClick={(event)=>{
          openDropDownFx(event);
        }} />
      </div>
    </div>
  );
}
