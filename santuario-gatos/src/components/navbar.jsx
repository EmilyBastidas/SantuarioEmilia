import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="container">
        {/* Logo con corazón */}
        <a
          className="navbar-brand d-flex align-items-center fw-bold fs-4"
          href="/"
        >
          <span className="me-2 fs-3" style={{ color: "#86b89a" }}>
            ♥
          </span>
          Santuario de Gatos
        </a>

        {/* Toggler para móvil */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú colapsable */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a
                className="nav-link active fw-semibold"
                aria-current="page"
                href="/"
              >
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/gatitos">
                Gatitos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/donar">
                Donar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/transparencia">
                Transparencia
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin">
                Admin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
