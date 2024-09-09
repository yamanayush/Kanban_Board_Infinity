import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateTask, deleteTask } from "../store/tasksSlice";
import { PlusCircleFilled } from "@ant-design/icons";

const Modal = ({ onClose, isOpen, task, setTask }) => {
  const dispatch = useDispatch();

  const handleUpdateTask = (e) => {
    e.preventDefault();
    dispatch(updateTask(task));
    toast.success("Task updated successfully", { autoClose: 2000 });
    onClose();
  };

  const handleDeleteTask = (e) => {
    e.preventDefault();
    dispatch(deleteTask(task.id));
    toast.success("Task deleted successfully", { autoClose: 2000 });
    onClose();
  };

  return createPortal(
    isOpen && (
      <div className="fixed top-0 left-0 z-40 w-full h-full flex items-center justify-center bg-gray-400 bg-opacity-80">
        <div className="bg-white rounded-md p-4 w-3/6 h-5/6  ">
          <div className="w-full h-full  ">
            <form
              className="flex flex-col w-full h-full  justify-between"
              onSubmit={handleUpdateTask}
            >
              <div className="w-full flex justify-between">
                <div className="flex gap-5">
                  <div>
                    <PlusCircleFilled className="" />
                  </div>
                  <div className="font-semibold">Update Task</div>
                </div>

                <div>
                  <AiOutlineClose
                    onClick={onClose}
                    className="text-3xl rounded-md p-2 flex items-center justify-center hover: hover:bg-rose-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 cursor-pointer "
                  />
                </div>
              </div>
              <div className="flex flex-col my-2">
                <label
                  className="text-sm font-semibold max-sm:text-xs text-black"
                  htmlFor="taskName"
                >
                  Title
                </label>

                <input
                  className="h-10 w-full border-2 p-3 rounded-md mb-1 my-1 focus:outline-0 hover:bg-gray-200 "
                  type="text"
                  placeholder="Select here"
                  name="name"
                  required
                  value={task.name}
                  onChange={(e) => setTask({ ...task, name: e.target.value })}
                />
              </div>
              <div className="flex flex-col my-2">
                <label
                  className="text-sm font-semibold max-sm:text-xs text-black"
                  htmlFor="taskName"
                >
                  Description
                </label>
                <textarea
                  className=" p-2 border-2 rounded-md mb-2 my-1 min-h-20 w-full resize-none focus:outline-0 hover:bg-gray-200"
                  placeholder="Task Description"
                  name="description"
                  value={task.description}
                  onChange={(e) =>
                    setTask({ ...task, description: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="flex flex-col my-2">
                <div className="flex flex-row justify-between">
                  <label
                    className="text-sm max-sm:text-xs text-black font-semibold"
                    htmlFor="taskStatus"
                  >
                    Status
                  </label>
                </div>
                <select
                  className="border-2 p-2 rounded-md mb-2 my-1 focus:outline-0"
                  name="status"
                  value={task.status}
                  onChange={(e) => setTask({ ...task, status: e.target.value })}
                >
                  <option value="todo">Todo</option>
                  <option value="inprogress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="flex flex-col my-2">
                <div className="flex flex-row justify-between">
                  <label
                    className="text-sm font-semibold max-sm:text-xs text-black"
                    
                  >
                    Priority
                  </label>
                </div>
                <select
                  className="bg-gray-100 p-2 rounded-md mb-2 my-1 focus:outline-0 hover:bg-gray-200"
                  name="status"
                  value={task.priority}
                  onChange={(e) => setTask({ ...task, priority: e.target.value })}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  onClick={handleUpdateTask}
                  className="bg-white text-purple-800 hover:text-white text-ls hover: border border-purple-700 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover: dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                >
                  Update
                </button>
                <button
                  onClick={handleDeleteTask}
                  className="hover:bg-red-600 bg-red-500 text-white text-ls hover: border border-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover: dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    ),
    document.getElementById("modal-root")
  );
};

export default Modal;
