import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./home/Home";
import RootLayout from "./RootLayout";
import About from "./about/About";
import Todo from "../todo";

import Contact from "./contact/Contact";
import Login from "./login/Login";
import Signup from "./signup/Signup";

const Entry = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

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
