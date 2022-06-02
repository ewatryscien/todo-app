import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./tasks";
import storage from "./middleware/localstorage";

export default function configureAppStore() {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), storage],
  });
}
