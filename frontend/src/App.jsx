import React from "react";
import "./App.css"
import About from "./Components/About/About";
import Detail from "./Components/Detail/Detail";
import Favorites from "./Components/Favorites/Favorites";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div>      

      <div>{!(location.pathname === "/" || location.pathname.startsWith("/detail")) && <Navbar />}</div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;

















