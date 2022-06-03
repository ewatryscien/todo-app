import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadTasks,
  getAllTasks,
  deleteTask,
  completeTask,
  incompleteTask,
  getIncompletedTasks,
} from "../store/tasks";
import {
  Stack,
  VStack,
  HStack,
  Text,
  StackDivider,
  Button,
  Spacer,
  Checkbox,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const TasksList = () => {
  const dispatch = useDispatch();
  const allTasks = useSelector(getAllTasks);
  console.log("alltasks:", allTasks);
  const incompleteTasks = useSelector(getIncompletedTasks);

  const [showAllTasks, setShowAllTasks] = useState(true);

  const tasks = showAllTasks ? allTasks : incompleteTasks;

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
  };

  const handleHide = () => {
    setShowAllTasks(!showAllTasks);
  };

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p="4"
      w="100%"
      maxW={{ base: "90vh", sm: "50vh", md: "60vh", lg: "80vh", xl: "90vh" }}
      borderRadius="lg"
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
            <Link to={`/task/${task.id}`}>
              <Text as={task.completed ? "del" : ""}>{task.description}</Text>
            </Link>
            <Spacer />
            <Button onClick={() => handleDelete(task.id)}>Usuń</Button>}
          </HStack>
        ))
      )}

      <Button onClick={handleHide}>
        {showAllTasks ? "Ukryj ukończone" : "Pokaż wszystkie zadania"}
      </Button>
    </VStack>
  );
};

export default TasksList;
