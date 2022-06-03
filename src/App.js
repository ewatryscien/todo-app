import React from "react";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";
import { VStack, Heading } from "@chakra-ui/react";

function App() {
  return (
    <VStack p={4}>
      <Heading mb="8" fontWeight="bold" size="2xl" color="teal.400">
        TODO APP
      </Heading>
      <TasksList />
      <AddTask />
    </VStack>
  );
}

export default App;
