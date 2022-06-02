import React from "react";
import { Provider } from "react-redux";
import TasksList from "./components/TasksList";
import configureStore from "./store/configureStore";
import { taskAdded, taskCompleted } from "./store/tasks";
import AddTask from "./components/AddTask";
import { VStack, Heading } from "@chakra-ui/react";

const store = configureStore();

store.subscribe(() => {
  //console.log("Store changeeeed!");
});

//const unfinishedTasks = getUnfinishedTasks(store.getState());

function App() {
  return (
    <VStack p={4}>
      <Heading mb="8" fontWeight="bold" size="2xl" color="pink.700">
        TODO APP
      </Heading>
      <Provider store={store}>
        <div className="container">
          <TasksList />
          <AddTask />
        </div>
      </Provider>
    </VStack>
  );
}

export default App;
