import React from "react";
import { FaHeart } from "react-icons/fa";

function Transparencia() {
  // Datos de ejemplo
  const gastos = [
    {
      categoria: "Medicamentos y tratamientos veterinarios",
      monto: 450000,
      porcentaje: 38,
      descripcion:
        "Antibióticos, vacunas, cirugías y controles especiales para gatitos en recuperación.",
    },
    {
      categoria: "Alimento y suplementos",
      monto: 320000,
      porcentaje: 27,
      descripcion:
        "Comida premium, latas, alimento seco y suplementos para gatitos con necesidades especiales.",
    },
    {
      categoria: "Mantenimiento del santuario",
      monto: 210000,
      porcentaje: 18,
      descripcion:
        "Limpieza, arena, camas, juguetes, reformas y pago de servicios básicos.",
    },
    {
      categoria: "Rescate y transporte",
      monto: 140000,
      porcentaje: 12,
      descripcion: "Captura, traslado y primeros auxilios en calle.",
    },
    {
      categoria: "Otros (capacitación y emergencias)",
      monto: 60000,
      porcentaje: 5,
      descripcion: "Cursos para voluntarios y fondo de emergencia.",
    },
  ];

  // total para calcular %
  const total = gastos.reduce((sum, item) => sum + item.monto, 0);

  return (
    <>
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h1 className="mb-4 fw-bold text-dark mt-4">Transparencia total</h1>
          <p className="lead text-muted mb-4">
            En el Santuario de Gatos, cada peso donado se usa responsablemente y
            se destina 100% al cuidado y rescate de nuestros gatitos. Publicamos
            mensualmente cómo usamos los fondos para que siempre sepas el
            impacto de tu ayuda.
          </p>
          <div className="mb-5">
            <h3 className="fw-bold text-success">
              Total recaudado este mes: ${total.toLocaleString("es-CL")}
            </h3>
            <p className="text-muted">
              Gracias a donantes como tú <FaHeart color="red" />
            </p>
          </div>
        </div>
      </section>

      {/* tarjetas con breakdown de gastos */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">
            ¿Cómo usamos las donaciones?
          </h2>
          <div className="row g-4">
            {gastos.map((gasto, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card shadow-sm h-100 border-0">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{gasto.categoria}</h5>
                    <p className="card-text text-muted mb-3">
                      {gasto.descripcion}
                    </p>

                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="fw-bold">
                        ${gasto.monto.toLocaleString("es-CL")}
                      </span>
                      <span className="badge bg-primary fs-6">
                        {gasto.porcentaje}%
                      </span>
                    </div>

                    <div className="progress" style={{ height: "12px" }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: `${gasto.porcentaje}%` }}
                        aria-valuenow={gasto.porcentaje}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-success text-white text-center">
        <div className="container">
          <h3 className="mb-4 fw-bold">Tu confianza nos motiva</h3>
          <p className="lead mb-0">
            Todas las operaciones son auditadas y reportadas públicamente. Si
            tienes dudas o quieres más detalles, escríbenos a
            hola@santuariodegatos.cl
          </p>
        </div>
      </section>
    </>
  );
}

export default Transparencia;
