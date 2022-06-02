import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTasks, getAllTasks } from "../store/tasks";
import {
  VStack,
  HStack,
  Text,
  StackDivider,
  Button,
  Spacer,
  Checkbox,
} from "@chakra-ui/react";

const TasksList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, []);
  const tasks = useSelector(getAllTasks);

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vh", sm: "80vh", lg: "50vh" }}
      alignItems="stretch"
    >
      {tasks.map((task) => (
        <HStack key={task.id}>
          <Checkbox mr="4"></Checkbox>
          <Text>{task.description}</Text>
          <Spacer />
          <Button>Usuń</Button>
        </HStack>
      ))}
    </VStack>
  );
};

export default TasksList;
