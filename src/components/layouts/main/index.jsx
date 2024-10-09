import React from "react";
import { useBreakpointValue } from "@chakra-ui/react";

const Main = ({ children, className }) => {
  const topValue = useBreakpointValue({ base: "52px", lg: "120px" });

  return <main className={`${className}`} style={{marginTop: topValue}}>{children}</main>;
};

export default Main;
