import React from "react";
import { useLocation } from "react-router-dom";
import { VStack, Text, Heading } from "@chakra-ui/react";

const Error404 = () => {
  let location = useLocation();
  return (
    <VStack m="20">
      <Heading color="teal.600" fontWeight="bold" size="xl">
        404
      </Heading>
      <Heading color="teal.900" fontWeight="bold" size="lg">
        Page not found
      </Heading>
      <Text as="kbd" color="teal.900">
        No match for {location.pathname}
      </Text>
    </VStack>
  );
};

export default Error404;
