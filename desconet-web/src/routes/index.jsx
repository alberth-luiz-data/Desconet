import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Register from "../pages/Register";


const routes = [
  { path: "/", element: <Welcome /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  
];

export default routes;
