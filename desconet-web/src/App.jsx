import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <div>
      <Profile></Profile>
    </div>
  );
}
