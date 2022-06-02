import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadTasks,
  getAllTasks,
  deleteTask,
  completeTask,
  incompleteTask,
} from "../store/tasks";
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
  const tasks = useSelector(getAllTasks);

  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const toggleCheck = (task, isChecked) => {
    console.log("ischecked", isChecked);
    if (isChecked) {
      dispatch(completeTask(task));
    } else {
      dispatch(incompleteTask(task));
    }
    //setTasksToDisplay(tasks);
  };

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
      {tasks.length === 0 ? (
        <Text alignSelf="center">Nie ma nic do zrobienia!</Text>
      ) : (
        tasks.map((task) => (
          <HStack key={task.id}>
            <Checkbox
              mr="4"
              onChange={(event) => toggleCheck(task, event.target.checked)}
              isChecked={task.completed}
            ></Checkbox>
            <Text>{task.description}</Text>
            <Spacer />
            <Button onClick={() => handleDelete(task.id)}>Usuń</Button>}
          </HStack>
        ))
      )}
    </VStack>
  );
};

export default TasksList;
