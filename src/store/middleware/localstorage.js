import * as actions from "../storageApi";
import { v1 as uuid } from "uuid";

const storage = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type !== actions.tasksStorage.type) return next(action);
  if (action.payload.command === "store") {
    const task = {
      id: uuid(),
      description: action.payload.data,
    };
    // todo: and add to the local storage
    const savedTasks = loadFromLocalStorage();
    savedTasks[task.id] = task;
    localStorage.setItem("savedTasks", JSON.stringify(savedTasks));

    dispatch({ type: action.payload.onSuccess, payload: task });
  }
  if (action.payload.command === "load") {
    const tasks = loadFromLocalStorage();
    dispatch({ type: action.payload.onSuccess, payload: tasks });
  }
  next(action);
};

function loadFromLocalStorage() {
  const unparsedTasks = localStorage.getItem("savedTasks");
  if (!unparsedTasks) {
    return {};
  }
  return JSON.parse(unparsedTasks);
}

export default storage;
