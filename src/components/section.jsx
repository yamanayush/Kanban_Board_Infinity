import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { updateTask } from "../store/tasksSlice";
import Header from "./SectionHeaders";
import TaskDisplayer from "./TaskDisplayer";


const Section = ({
  status,
  tasks,
  onTaskClick,
  textColor,
  title,
  headerColor,
  borderColor,
}) => {
  const dispatch = useDispatch();
  const moveTask = (taskId, newStatus) => (dispatch, getState) => {
    const tasks = getState().tasks.tasks;
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      const updatedTask = { ...task, status: newStatus };
      dispatch(updateTask(updatedTask));
    }
  };

  const [{ isOver }, drop] = useDrop({
    accept: "task",
    drop: (item) => {
      dispatch(moveTask(item.id, status));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <div
      ref={drop}
      className={`w-full  rounded-xl p-2 ${isOver ? "bg-opacity-75" : ""}`}
    >
      <div className="bg-white min-h-60 rounded-b-xl pb-4">
        <Header
          text={status}
          count={filteredTasks.length}
          textColor={textColor}
          headerColor={headerColor}
          title={title}
        />
        {filteredTasks.length > 0 &&
          filteredTasks.map((task) => (
            <TaskDisplayer
              key={task.id}
              task={task}
              onTaskClick={onTaskClick}
              headerColor={headerColor}
              borderColor={borderColor}
              
            />
          ))}
      </div>
    </div>
  );
};
export default Section;