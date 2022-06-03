import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "./index.css";
import App from "./App";
import SingleTask from "./components/SingleTask";
import Error404 from "./components/Error404";

const store = configureStore();

store.subscribe(() => {
  //console.log("Store changeeeed!");
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <Provider store={store}>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/task/:id" element={<SingleTask />} />
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </ChakraProvider>
);
