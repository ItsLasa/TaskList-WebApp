'use client'
import React, { useRef, useState } from 'react';
import { useContextProvider } from '../ContextApi';
import toast from 'react-hot-toast';

function AddTaskBar(props) {
  const [addTaskText, setAddTaskText] = useState('');
  const { allTasks, setAllTasks } = useContextProvider();
  const inputRef = useRef(null);

  function onChangeText(event) {
    const newValue = event.target.value;
    setAddTaskText(newValue);
  }

  function addTaskBtn() {
    inputRef.current.focus();
    if (addTaskText.trim().length === 0) {
      return toast('Please enter a task before adding.', {
        duration: 2000,
        icon: '❗',
      });
    }

    const newTask = {
      id: allTasks.length + 1,
      name: addTaskText,
      isChecked: false,
    };

    const tempArray = [...allTasks, newTask];
    setAllTasks(tempArray);

    toast.success(`The task (${addTaskText}) is added successfully`);
    setAddTaskText('');
  }

  return (
    <div className='flex justify-between p-3 mt-5'>
      <input
        type="text"
        ref={inputRef}
        value={addTaskText}
        onChange={onChangeText}
        placeholder='Choose A Name ...'
        className='border pl-4 border-gray-400 p-2 w-[270px] rounded-md text-[13px] outline-none'
      />

      <button
        className='bg-gradient-to-r text-white rounded-md w-[120px] from-blue-700 to-blue-400 hover:text-black hover:text-light'
        onClick={addTaskBtn} 
      >
        Add a task
      </button>
    </div>
  );
}

export default AddTaskBar;