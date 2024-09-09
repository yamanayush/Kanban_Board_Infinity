import React, { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchTasks } from "../store/tasksSlice";
import Modal from "./updaterModal";
import Section from "./section";

const TaskSections = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks || []);
  const [selectedTask, setSelectedTask] = useState(null);
  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const statuses = [
    {
      title: "TODO",
      status: "todo",
      textColor: "text-white",
      headerColor: "bg-[#8a30e5]",
      borderColor: "border-l-[#8a30e5]",
    },
    {
      title: "IN PROGRESS",
      status: "inprogress",
      textColor: "text-black",
      headerColor: "bg-yellow-400",
      borderColor: "border-l-yellow-400",
    },
    {
      title: "COMPLETED",
      status: "completed",
      textColor: "text-white",
      headerColor: "bg-green-500",
      borderColor: "border-l-green-500",
    },
  ];
  const Close = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setSelectedTask(null);
  };

  return (
    <div className="w-full  flex flex-col items-center justify-between gap-20 ">
      <div className="flex flex-col sm:flex-row  w-3/4 justify-evenly">
        {statuses.map(
          ({ status, textColor, headerColor, title, borderColor }, index) => (
            <Section
              key={index}
              status={status}
              tasks={tasks}
              onTaskClick={handleTaskClick}
              textColor={textColor}
              title={title}
              headerColor={headerColor}
              borderColor={borderColor}
            />
          )
        )}
      </div>
      <Modal
        onClose={(e) => Close(e)}
        isOpen={!!selectedTask}
        task={selectedTask}
        setTask={setSelectedTask}
      />
    </div>
  );
};

export default TaskSections;
