import { DragIndicatorOutlined } from "@mui/icons-material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useState } from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { updateTask } from "../store/tasksSlice";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import EditIcon from "@mui/icons-material/Edit";
const TaskDisplayer = ({ task, onTaskClick, borderColor }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  

  const handleStatusChange = (newStatus) => {
    console.log("New state ", newStatus);
    const updatedTask = { ...task, status: newStatus };
    dispatch(updateTask(updatedTask));
    setDropdownOpen(false);
  };
  
  
  const handleIconClick = (e) => {
    console.log('clicked')
    e.stopPropagation(); 
    setDropdownOpen(!dropdownOpen); 
  };

  return (
    <div>
      <div
        className={`relative  m-4 border-2  rounded-xl min-h-40  ${
          isDragging ? "opacity-50" : "opacity-500"
        }`}
      >
        <div className="flex justify-between">
          <div
            className={`bg-rose-100 mt-2 ml-2 text-xs text-rose-600 w-fit px-3 py-1 rounded-md`}
          >
            {task.priority}
          </div>
          <div
            className={`mt-2 mr-2 cursor-pointer`}
            onClick={() => onTaskClick(task)}
          >
            <EditIcon fontSize="small" />
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div
            className={`p-2 mt-2 w-full flex justify-between items-center  `}
          >
            <div className="w-full">
              <div className="flex w-full">
                <div
                  className={` p-2 border-l-4 ${borderColor} ml-[-11px]  w-full`}
                >
                  <div className="font-semibold text-xl align-text-top">
                    {task.name}
                  </div>
                  <div className="font-light text-sm w-full mb-[-15px] pb-2 border-b-2">
                    {task.description}
                  </div>
                </div>
                <div className="relative flex">
                  <KeyboardArrowDownOutlinedIcon
                    onClick={handleIconClick}
                    className="cursor-pointer"
                  />

                  {dropdownOpen && (
                    <div
                      className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-xl border  border-gray-300 z-10"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ul className="rounded-xl">
                        <li className="px-4 py-2 border-b-2 border-gray-300 bg-blue-100 select-none cursor-default rounded-t-xl font-semibold">
                          Change Status
                        </li>
                        <li
                          className="px-4 py-2  hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleStatusChange("todo")}
                        >
                          Todo
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleStatusChange("inprogress")}
                        >
                          In Progress
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleStatusChange("completed")}
                        >
                          Completed
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="text-xs mt-5 text-gray-500 font-thin ">
                {" "}
                <DateRangeIcon
                  fontSize="small"
                  color="gray"
                />{" "}
                {task.date}
              </div>
            </div>
          </div>
          <div
            ref={drag}
            className={`flex justify-end items-center  ${isDragging?`cursor-grabbing`:`cursor-grab`}`}
          >
            <DragIndicatorOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaskDisplayer;