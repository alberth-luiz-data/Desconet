import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import ChatAI from "../pages/chat/chatAI/chatAI";
// import Register from "../pages/Register";


const routes = [
  { path: "/", element: <Welcome /> },
  { path: "/login", element: <Login /> },
  { path: "/chat", element: <ChatAI /> },
  // { path: "/register", element: <Register /> },
];

export default routes;
