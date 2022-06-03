import React, { useEffect } from "react";
import {
  Text,
  VStack,
  Stack,
  StackDivider,
  Button,
  Center,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllTasks, loadTasks } from "../store/tasks";

const SingleTask = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getAllTasks);
  const params = useParams();

  useEffect(() => {
    dispatch(loadTasks());
  }, []);

  function getTask(id) {
    let task = tasks.find((task) => task.id == id);
    if (!task) {
      return { description: "Brak zadania" };
    }
    return task;
  }

  return (
    <Center>
      <Stack
        w="100%"
        maxW={{ base: "90vh", sm: "50vh", md: "60vh", lg: "80vh", xl: "90vh" }}
      >
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          borderColor="gray.100"
          borderWidth="2px"
          p="4"
          borderRadius="lg"
          alignItems="center"
          mt="16"
          mb="4"
        >
          }
          <Text fontSize="lg" fontWeight="bold">
            Zadanie:
          </Text>
          <Text>{getTask(params.id).description}</Text>
        </VStack>
        <VStack>
          <Link to={`/`}>
            <Button colorScheme="teal">Powrót</Button>
          </Link>
        </VStack>
      </Stack>
    </Center>
  );
};

export default SingleTask;
