import { Text } from "@chakra-ui/react";
import React from "react";

const HomeTitle = ({ children, className }) => {
  return (
    <Text
      color={"#1A0B5B"}
      fontSize={"36px"}
      fontWeight={"700"}
      textAlign={"center"}
      marginBottom={"55px"}
      className={className}
    >
      {children}
    </Text>
  );
};

export default HomeTitle;
