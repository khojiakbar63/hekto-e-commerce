import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { router } from "./router/index.jsx";
import App from "./App.jsx";
import 'boxicons'
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
