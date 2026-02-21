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
import Resource from "./Resource";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";

const Entry = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="resource" element={<Resource />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

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
