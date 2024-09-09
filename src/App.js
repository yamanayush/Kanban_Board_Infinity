import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Provider, useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./store/tasksSlice";
import store from "./store/store";
import TaskAdder from "./components/taskAdder";
import TaskList from "./components/TaskSections";
import Nav from "./components/nav";

const App = () => {
  const dispatch = useDispatch();
  useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        await dispatch(fetchTasks());
      } catch (error) {
        toast.error("Error fetching tasks from Firebase", { autoClose: 2000 });
      }
    };

    loadTasks();
  }, [dispatch]);

  return (
    <>
      
      <DndProvider backend={HTML5Backend}>
        <ToastContainer />
        <div className="bg-gray-100 min-h-screen">
          <div>
            <Nav />
          </div>

          <TaskAdder />
          <div>
            <TaskList />
          </div>
        </div>
        
      </DndProvider>
    </>
  );
};

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default RootApp;
