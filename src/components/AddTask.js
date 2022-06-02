import React, { useState } from "react";
import {
  Input,
  Button,
  HStack,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { taskAdded, addTask } from "../store/tasks";

const AddTask = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const isError = value.trim().length === 0;
  const handleAdding = () => {
    dispatch(addTask(value));
  };

  return (
    <HStack w="50vh">
      <FormControl isInvalid={isError}>
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
        )}
        <Button
          onClick={handleAdding}
          colorScheme="pink"
          px="8"
          isDisabled={isError}
        >
          Dodaj
        </Button>
      </FormControl>
    </HStack>
  );
};

export default AddTask;
