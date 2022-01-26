import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className=" w-screen h-screen bg-gradient-to-br from-slate-900 to-slate-700 flex justify-center items-center">
      <div className=" bg-white w-full h-full md:w-[95%] md:h-[90%] md:rounded-3xl md:shadow-md overflow-hidden">
        <Navbar />
        <div className="p-5 w-full h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
