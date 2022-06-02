import * as actions from "../storageApi";
import { v1 as uuid } from "uuid";

const storage = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type !== actions.tasksStorage.type) return next(action);

  if (action.payload.command === "store") {
    const task = {
      id: uuid(),
      description: action.payload.data,
    };
    //add to the local storage
    const tasks = loadFromLocalStorage();
    tasks[task.id] = task;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    dispatch({ type: action.payload.onSuccess, payload: task });
  }

  if (action.payload.command === "load") {
    const tasks = loadFromLocalStorage();
    dispatch({ type: action.payload.onSuccess, payload: tasks });
  }

  if (action.payload.command === "delete") {
    const tasks = loadFromLocalStorage();
    console.log("tasks.id:", action.payload.data);
    delete tasks[action.payload.data];
    localStorage.setItem("tasks", JSON.stringify(tasks));
    dispatch({ type: action.payload.onSuccess, payload: tasks });
  }

  next(action);
};

function loadFromLocalStorage() {
  const unparsedTasks = localStorage.getItem("tasks");
  if (!unparsedTasks) {
    return {};
  }
  return JSON.parse(unparsedTasks);
}

export default storage;
