import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { taskAdded, addTask } from "../store/tasks";
import { v1 as uuid } from "uuid";

const AddTask = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleAdding = () => {
    //tutaj tez validacja input czy sa same spacje
    //ZANIM dispatch, moge uzywac
    /*    var str = "    ";
if (!str.replace(/\s/g, '').length) {
  console.log('string only contains whitespace (ie. spaces, tabs or line breaks)');
}
*/
    dispatch(addTask(value));
  };

  return (
    <div>
      Add task
      <Input
        //ref={newTaskRef}
        placeholder="Add new task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={handleAdding} colorScheme="teal">
        Add
      </Button>
    </div>
  );
};

export default AddTask;
