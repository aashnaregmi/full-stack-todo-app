import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./home";
import RootLayout from "./RootLayout";
import About from "./About";
import Todo from "../todo";

const Entry = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="todo" element={<Todo />} />
      </Route>,
    ),
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Entry;
