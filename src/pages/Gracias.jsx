import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Gracias() {
  return (
    <section className="py-5 bg-success text-white min-vh-100 d-flex align-items-center">
      <div className="container text-center">
        {/* Icono grande de corazón o gato feliz */}
        <div className="mb-5">
          <span style={{ fontSize: "6rem" }}>
            {" "}
            <FaHeart />
          </span>
        </div>

        <h1 className="display-4 fw-bold mb-4">¡Gracias por tu donación!</h1>

        <p className="lead fs-4 mb-5">
          Tu ayuda llegó justo a tiempo. Gracias a personas como tú, hoy un
          gatito rescatado tiene comida, medicina y una oportunidad de ser
          feliz. Cada peso cuenta y llega directo a ellos.
        </p>

        {/* Mensaje personalizado (puedes hacerlo dinámico después) */}
        <div
          className="bg-white bg-opacity-10 rounded p-4 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <p className="mb-0">
            Tu generosidad nos ayuda a seguir rescatando, curando y encontrando
            hogares para más gatitos. ¡Eres parte de esta familia!
          </p>
        </div>

        {/* Botones de acción */}
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-4">
          <Link
            to="/"
            className="btn btn-light btn-lg px-5 py-3 fw-bold rounded-pill"
          >
            Volver al inicio
          </Link>

          <Link
            to="/gatitos"
            className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill"
          >
            Conoce a nuestros gatitos
          </Link>
        </div>

        {/* Pequeño mensaje extra */}
        <p className="mt-5 small opacity-75">
          Recibirás un correo de confirmación pronto. Si tienes dudas,
          escríbenos a hola@santuariodegatos.cl <FaHeart />
        </p>
      </div>
    </section>
  );
}

export default Gracias;
