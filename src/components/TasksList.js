import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasks, getAllTasks } from "../store/tasks";

const TasksList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, []);
  const tasks = useSelector(getAllTasks);

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>Nazwa: {task.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
