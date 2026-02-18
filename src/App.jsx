import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Gatitos from "./pages/Cats.jsx";
import Footer from "./components/Footer";
import Donate from "./pages/Donate";
import Transparencia from "./pages/Transparencia";
import Citas from "./pages/Citas";
import Admin from "./pages/Admin";
import Urgentes from "./pages/Urgentes";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {" "}
        {/* Para que el footer quede abajo */}
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gatitos" element={<Gatitos />} />
            <Route path="/donar" element={<Donate />} />
            <Route path="/transparencia" element={<Transparencia />} />
            <Route path="/citas" element={<Citas />} />
            <Route path="/urgentes" element={<Urgentes />} />
            <Route path="/admin" element={<Admin />} />
            {/* ← esta línea es la clave */}
            <Route
              path="*"
              element={
                <div className="text-center py-5">
                  <h1>404 - Página no encontrada</h1>
                  <p>Lo sentimos, esta página no existe.</p>
                </div>
              }
            />
          </Routes>
        </main>
        {/* Footer */}
        {Footer && <Footer />}
      </div>
    </Router>
  );
}

export default App;
