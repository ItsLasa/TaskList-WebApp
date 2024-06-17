'use client'
import React, { useEffect, useState } from "react";
import { useContextProvider } from "../ContextApi";
import toast from "react-hot-toast";

function FooterBar(props) {
  const { allTasks, setAllTasks } = useContextProvider();
  const [itemsLeftCounter, setItemsLeftCounter] = useState(0);

  useEffect(() => {
    itemsLeftCounterFunction();
  }, [allTasks]);

  function itemsLeftCounterFunction() {
    const filterUnDoneTasks = allTasks.filter((item) => item.isChecked === false);
    setItemsLeftCounter(filterUnDoneTasks.length);
  }

  function clearAllTasks() {
    function clearTasks() {
      const tempTaskArray = [...allTasks];
      tempTaskArray.length = 0;
      setAllTasks(tempTaskArray);
    }

    if (allTasks.length !== 0) {
      toast((t) => (
        <div className="flex flex-col gap-4">
          <div>Do you really want to delete all tasks..?</div>
          <div className="w-full flex gap-3 justify-center">
            <button
              onClick={() => {
                clearTasks();
                toast.dismiss(t.id);
              }}
              className="bg-red-500 text-white p-1 w-[100px] rounded-md"
            >
              Yes
            </button>
            <button
              className="bg-white text-blue-500 p-1 w-[100px] border border-blue-400 hover:text-white hover:bg-blue-600 rounded-md"
              onClick={() => toast.dismiss(t.id)}
            >
              No
            </button>
          </div>
        </div>
      ), {
        duration: 1000,
        id: 'task',
      });
    }
  }

  useEffect(()=>{
    itemsLeftCounterFunction();

  },[allTasks])

  return (
    <div className="ml-2 mr-3 flex justify-between items-center mt-6 gap-6 text-[12px] p-1">
      <div className="flex gap-2 items-center justify-center">
        <div className="text-blue-600 text-[17px] font-bold">{itemsLeftCounter}</div>
        <div className="font-light text-[15px]">Items Left</div>
      </div>
      <div
        className="text-blue-500 text-[17px] transition-all duration-100 hover:font-semibold select-none cursor-pointer"
        onClick={()=>{
          clearAllTasks();
        }}
      >
        Clear All Tasks
      </div>
    </div>
  );
}

export default FooterBar;
