import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import { Box, Button } from "@mui/material";
import Greeting from "./domain/Greeting";
import Login from "./domain/login";
import Home from "./domain/home";
import CardDesign from "./domain/CardDesign";
import RequireAuth from "./domain/RequireAuth";

const App: React.FC = () => {
  return (
    <>
      <Link to="/">Home</Link>

      <Link to="/greeting">Greeting</Link>
      <Link to="/card">Card</Link>
      <Link to="/login">Login</Link>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home title="test user" />} />
          <Route path="/greeting" element={<Greeting name="sara" />} />
          <Route path="/card" element={<CardDesign />}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
export default App;
