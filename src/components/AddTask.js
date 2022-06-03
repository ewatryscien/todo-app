import React, { useState } from "react";
import {
  Input,
  Button,
  HStack,
  FormControl,
  FormErrorMessage,
  Center,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/tasks";

const AddTask = () => {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  const handleAdding = () => {
    if (value.trim().length === 0) {
      setIsError(true);
    } else {
      setIsError(false);
      dispatch(addTask(value));
    }
  };

  return (
    <FormControl isInvalid={isError}>
      <Center>
        <HStack
          w="100%"
          maxW={{
            base: "90vh",
            sm: "50vh",
            md: "60vh",
            lg: "80vh",
            xl: "90vh",
          }}
          mt="8"
        >
          <Input
            //ref={newTaskRef}
            placeholder="Dodaj zadanie..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {isError ? (
            <FormErrorMessage>
              Nazwa nie może być samymi spacjami
            </FormErrorMessage>
          ) : (
            ""
          )}{" "}
          <Button onClick={handleAdding} colorScheme="teal" px="8">
            Dodaj
          </Button>
        </HStack>
      </Center>
    </FormControl>
  );
};

export default AddTask;
