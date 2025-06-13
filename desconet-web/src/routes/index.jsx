import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ChatAI from "../pages/chatAI";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import NavBAr from "../pages/Navbar";
import Group from "../pages/Group";
import Family from "../pages/family";
import Community from "../pages/comunity";
import ChatGroup from "../pages/chat-group";
import Chat from "../pages/chat";
import EscolherPerfil from "../pages/escolher"; // IMPORTAR A NOVA TELA

const routes = [
  { path: "/", element: <Welcome /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/escolher", element: <EscolherPerfil /> }, // ADICIONAR NOVA ROTA
  { path: "/home", element: <Home /> },
  { path: "/chatAI", element: <ChatAI /> },
  { path: "/chat", element: <Chat /> },
  { path: "/chatGroup", element: <ChatGroup /> },
  { path: "/profile", element: <Profile /> },
  { path: "/navbar", element: <NavBAr /> },
  { path: "/group", element: <Group /> },
  { path: "/family", element: <Family /> },
  { path: "/community", element: <Community /> }
];

export default routes;
