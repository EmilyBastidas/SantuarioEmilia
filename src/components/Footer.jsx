import React from "react";
import { Link } from "react-router-dom"; // si usas router

function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-auto">
      <div className="container w-100">
        <div className="row g-5">
          {/* Columna 1: Santuario */}
          <div className="col-md-4">
            <h5 className="mb-4 fw-bold">
              <span style={{ color: "#86b89a" }}>♥</span> Santuario de Gatos
            </h5>
            <p className="small text-secondary">
              Dedicados al rescate, cuidado y rehabilitación de gatos en
              situación vulnerable. Cada vida importa. Ayúdanos a seguir
              salvando vidas con amor y compromiso.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="col-md-4">
            <h5 className="mb-4 fw-bold">Enlaces rápidos</h5>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-secondary text-decoration-none hover-link"
                >
                  Inicio
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/gatitos"
                  className="text-secondary text-decoration-none hover-link"
                >
                  Conoce a nuestros gatitos
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/donar"
                  className="text-secondary text-decoration-none hover-link"
                >
                  Cómo donar
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/transparencia"
                  className="text-secondary text-decoration-none hover-link"
                >
                  Transparencia de gastos
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="col-md-4">
            <h5 className="mb-4 fw-bold">Contacto</h5>
            <ul className="list-unstyled small">
              <li className="mb-3">
                <i
                  className="bi bi-geo-alt-fill me-2"
                  style={{ color: "#86b89a" }}
                ></i>
                Av. Principal 123, Santiago, Chile
              </li>
              <li className="mb-3">
                <i
                  className="bi bi-telephone-fill me-2"
                  style={{ color: "#86b89a" }}
                ></i>
                +56 9 1234 5678
              </li>
              <li className="mb-3">
                <i
                  className="bi bi-envelope-fill me-2"
                  style={{ color: "#86b89a" }}
                ></i>
                hola@santuariodegatos.cl
              </li>
            </ul>

            {/* Opcional: redes sociales */}
            <div className="mt-4">
              <a href="#" className="text-secondary me-3 fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-secondary me-3 fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-secondary fs-4">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        <div className="text-center small text-secondary">
          © {new Date().getFullYear()} Santuario de Gatos. Todos los derechos
          reservados.
          <br />
          Hecho con <span style={{ color: "#86b89a" }}>♥</span> para nuestros
          amigos felinos.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
