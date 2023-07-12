import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <section className="sec">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Products" element={<Products />} />
          </Routes>
        </Router>
      </section>
    </>
  );
}

export default App;
