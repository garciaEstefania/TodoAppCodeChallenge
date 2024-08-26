import { createContext, useState } from "react";

export const TaskContext = createContext();

const AppContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const deleteTask = (task) => {
    setTasks((prevState) => prevState.filter((t) => t !== task));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default AppContextProvider;
