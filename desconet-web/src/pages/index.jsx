import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ChatAI from "../pages/chatAI";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
const routes = [
  { path: "/", element: <Welcome /> },
  { path: "/login", element: <Login /> },
  { path: "/chat", element: <ChatAI /> },
  { path: "/register", element: <Register /> },
  {path: "/home", element: <Home /> },
  {path: "/chatAI", element: <ChatAI /> },
  {path: "/profile", element: <Profile /> }
];

export default routes;

// miguel
// import React from "react";
// import CommunityFeed from "../pages/Community"; 
// const routes = [
//   { path: "/", element: <CommunityFeed /> },
// ];

// export default routes;
