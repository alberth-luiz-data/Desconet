import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ChatAI from "../pages/chatAI";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import NavBAr from "../pages/NavBar";
import Group from "../pages/group";
import Family from "../pages/family";

const routes = [
  { path: "/", element: <Welcome /> },
  { path: "/login", element: <Login /> },
  { path: "/chat", element: <ChatAI /> },
  { path: "/register", element: <Register /> },
  {path: "/home", element: <Home /> },
  {path: "/chatAI", element: <ChatAI /> },
  {path: "/profile", element: <Profile /> },
  {path : "/navbar", element: <NavBAr /> },
  {path: "/group", element: <Group /> },
];

export default routes;
