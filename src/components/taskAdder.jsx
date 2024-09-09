import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addTask } from "../store/tasksSlice";
import { AiOutlineClose } from "react-icons/ai";
import { PlusCircleFilled } from "@ant-design/icons";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DateRangeIcon from "@mui/icons-material/DateRange";
const TaskAdder = () => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const [date, setDate] = useState(new Date());
   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [task, setTask] = useState({
    name: "",
    status: "todo",
    description: "",
    priority: "low",
    date: date.toLocaleDateString(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.name.length < 3) {
      toast.error("Task name should be at least 3 characters long", {
        autoClose: 2000,
      });
      return;
    }
    const newTask = { ...task, id: uuidv4(), date: date.toLocaleDateString() };
    dispatch(addTask(newTask));

    setTask({
      name: "",
      status: "todo",
      description: "",
      priority: "low",
      date: "",
    });
    setDisplay(false);
    toast.success("Task added successfully", { autoClose: 2000 });
  };

  const handlePlusButton = () => {
    setDisplay(true);
  };

  const handlePopClose = (e) => {
    if (e.target === e.currentTarget) {
      setDisplay(false);
      setDate(new Date());
    }
  };

 const handleDateChange = (selectedDate) => {
   setDate(selectedDate); 
   setIsCalendarOpen(false); 
 };

const toggleCalendar = () => {
  setIsCalendarOpen(!isCalendarOpen); 
};
  return (
    <>
      {display ? (
        <div
          className="fixed top-0 left-0 z-40 w-full h-full flex items-center justify-center bg-gray-400 bg-opacity-80"
          onClick={handlePopClose}
        >
          <div className="bg-white rounded-md p-4 w-3/6 h-5/6">
            <div className="w-full h-full">
              <form
                className="flex flex-col w-full h-full justify-between"
                onSubmit={handleSubmit}
              >
                <div className="w-full flex justify-between">
                  <div className="flex gap-5">
                    <div>
                      <PlusCircleFilled />
                    </div>
                    <div className="font-semibold">Create New Task</div>
                  </div>

                  <div>
                    <AiOutlineClose
                    aria-label="close"
                      onClick={handlePopClose}
                      className="text-3xl rounded-md p-2 flex items-center justify-center hover:bg-rose-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex flex-col my-2">
                  <label
                    className="text-sm font-semibold text-black"
                    htmlFor="taskName"
                  >
                    Title
                  </label>
                  <input
                    className="h-10 w-full border-2 p-3 rounded-md mb-1 my-1 focus:outline-0 hover:bg-gray-200"
                    type="text"
                    placeholder="Task title"
                    value={task.name}
                    onChange={(e) => setTask({ ...task, name: e.target.value })}
                    required
                  />
                </div>

                <div className="flex flex-col my-2">
                  <label
                    className="text-sm font-semibold text-black"
                    htmlFor="taskDescription"
                  >
                    Description
                  </label>
                  <textarea
                    className="p-2 border-2 rounded-md mb-2 my-1 min-h-20 w-full resize-none focus:outline-0 hover:bg-gray-200"
                    placeholder="Task description"
                    value={task.description}
                    onChange={(e) =>
                      setTask({ ...task, description: e.target.value })
                    }
                  ></textarea>
                </div>

                <div className="relative flex flex-col my-2">
                  <label
                    className="text-sm font-semibold text-black"
                    htmlFor="taskDate"
                  >
                    Select Date
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      value={date.toDateString()}
                      readOnly
                      className="focus:outline-none rounded p-2 w-full border-2 "
                    />
                    <div className="flex items-center justify-center ">
                      <DateRangeIcon
                        color="gray"
                        onClick={toggleCalendar}
                        className=" cursor-pointer absolute right-3 "
                      />
                    </div>
                  </div>

                  {isCalendarOpen && (
                    <div className="absolute top-full right-0  p-4 border border-gray-300 shadow-lg bg-white z-50">
                      <Calendar
                        onChange={handleDateChange}
                        value={date}
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-col my-2">
                  <label
                    className="text-sm font-semibold text-black"
                    htmlFor="taskStatus"
                  >
                    Status
                  </label>
                  <select
                    className="border-2 p-2 rounded-md mb-2 my-1 focus:outline-0 hover:bg-gray-200 "
                    value={task.status}
                    onChange={(e) =>
                      setTask({ ...task, status: e.target.value })
                    }
                  >
                    <option value="todo">Todo</option>
                    <option value="inprogress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <div className="flex flex-col my-2">
                  <label
                    className="text-sm font-semibold text-black"
                    htmlFor="taskPriority"
                  >
                    Priority
                  </label>
                  <select
                    className="border-2 p-2 rounded-md mb-2 my-1 focus:outline-0 hover:bg-gray-200"
                    value={task.priority}
                    onChange={(e) =>
                      setTask({ ...task, priority: e.target.value })
                    }
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    className="bg-white border-2 hover:text-white border-purple-600 text-purple-800  hover:bg-purple-600 focus:ring-4 focus:outline-none  rounded-md text-sm font-normal px-5 py-2 mb-2"
                  onClick={handlePopClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-purple-600 border-2 border-purple-600 text-white  hover:bg-purple-700 focus:ring-4 focus:outline-none  rounded-md text-sm font-normal px-3 py-2 mb-2"
                  >
                    Add Task
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-1/6 flex items-center justify-around">
          <div className="w-3/4 h-2/3 flex items-center justify-between bg-white p-4 rounded-xl">
          <div className="font-semibold text-2xl">
              Desktop & Mobile Application
              
            </div>
            <div
              onClick={handlePlusButton}
              className="bg-[#8a31e5] hover:bg-purple-800 text-lg py-2 px-5 rounded-md text-white cursor-pointer"
            >
              Create Task
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskAdder;
