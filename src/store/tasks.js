import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { tasksStorage } from "./storageApi";

const slice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    //loading: false,
  },
  reducers: {
    taskAdded: (tasks, action) => {
      tasks.list.push(action.payload);
    },

    taskUpdated: (tasks, action) => {
      const index = tasks.list.findIndex(
        (task) => task.id === action.payload.id
      );
      console.log("taskCompleted: ", action);
      tasks.list[index] = action.payload;
    },

    taskDeleted: (tasks, action) => {
      tasks.list = Object.values(action.payload);
    },

    tasksLoaded: (tasks, action) => {
      tasks.list = Object.values(action.payload);
    },
  },
});

export const {
  taskAdded,
  taskUpdated,
  taskDeleted,
  tasksLoaded,
} = slice.actions;
export default slice.reducer;

//Actions creators
export const loadTasks = () =>
  tasksStorage({
    command: "load",
    onSuccess: tasksLoaded.type,
  });

export const addTask = (task) =>
  tasksStorage({
    command: "store",
    data: task,
    onSuccess: taskAdded.type,
  });

export const completeTask = (task) =>
  tasksStorage({
    command: "update",
    data: { ...task, completed: true },
    onSuccess: taskUpdated.type,
  });

export const incompleteTask = (task) =>
  tasksStorage({
    command: "update",
    data: { ...task, completed: false },
    onSuccess: taskUpdated.type,
  });

export const deleteTask = (id) =>
  tasksStorage({
    command: "delete",
    data: id,
    onSuccess: taskDeleted.type,
  });

export const getAllTasks = createSelector(
  (state) => {
    console.log("state:", state);
    return state;
  }, //input
  (tasks) => {
    console.log("tasks:", tasks);
    return tasks.list;
  }
);
