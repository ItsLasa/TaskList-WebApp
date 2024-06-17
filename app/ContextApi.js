'use client'
import React, { useEffect, useState, createContext, useContext } from 'react';

const GlobalContext = createContext();

export default function ContextProvider({ children }) {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const data = [
      { _id: 1, name: 'Start a Journey habit', isChecked: false },
      { _id: 2, name: 'Add new task for gameos', isChecked: false },
      { _id: 3, name: 'Plan upcoming vacation', isChecked: false },
    ];

    setAllTasks(data);
  }, []);

  return (
    <GlobalContext.Provider value={{ allTasks, setAllTasks }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useContextProvider() {
  return useContext(GlobalContext);
}
