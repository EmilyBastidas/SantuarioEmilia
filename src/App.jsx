import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar"; // Ajusta la ruta si es necesario
import Home from "./pages/Home";
import Gatitos from "./pages/Cats.jsx";
import Footer from "./components/Footer";

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

            {/* Agrega las demás páginas cuando las crees */}
            {/* <Route path="/donar" element={<Donar />} /> */}
            {/* <Route path="/transparencia" element={<Transparencia />} /> */}
            {/* <Route path="/admin" element={<Admin />} /> */}

            {/* Ruta para 404 (página no encontrada) - opcional */}
            <Route
              path="*"
              element={
                <div className="container py-5 text-center">
                  <h1>404 - Página no encontrada</h1>
                  <p>Lo sentimos, esta página no existe.</p>
                </div>
              }
            />
          </Routes>
        </main>
        {/* Footer (puedes moverlo aquí o dejarlo dentro de cada página) */}
        {Footer && <Footer />}
      </div>
    </Router>
  );
}

export default App;
