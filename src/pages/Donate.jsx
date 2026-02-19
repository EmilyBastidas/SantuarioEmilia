import React from "react";
import UrgentDonationCard from "../components/UrgentDonationCard";

const urgentCases = [
  {
    petName: "Simba",
    status: "Crítico",
    imageUrl:
      "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=800",
    description:
      "Fractura de fémur + trauma múltiple. Necesita cirugía urgente.",
    raised: 18200,
    goal: 35000,
    percentage: 52,
  },
  {
    petName: "Luna",
    status: "Urgente",
    imageUrl:
      "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800",
    description: "Infección respiratoria grave. Tratamiento prolongado.",
    raised: 9500,
    goal: 18000,
    percentage: 53,
  },
];

function Donate() {
  return (
    <>
      <section className="py-5 bg-light text-center">
        <div className="container-fluid px-3 px-md-5">
          <h1 className="mb-4 fw-bold text-dark m-3">
            Ayúdanos a salvar más vidas
          </h1>
          <p className="lead text-muted mb-4">
            Cada donación, por pequeña que sea, marca la diferencia en la vida
            de nuestros gatitos rescatados. Tu apoyo cubre cirugías,
            medicamentos, alimento y mucho amor.
          </p>
        </div>
      </section>

      {/* donaciones urgentes*/}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">
            Casos urgentes que necesitan tu ayuda hoy
          </h2>
          <div className="row g-4">
            {urgentCases.map((cat, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <UrgentDonationCard
                  petName={cat.petName}
                  status={cat.status}
                  imageUrl={cat.imageUrl}
                  description={cat.description}
                  raised={cat.raised}
                  goal={cat.goal}
                  percentage={cat.percentage}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* donación rápida */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Elige cómo ayudar</h2>
          <div className="row g-4 justify-content-center">
            {/* Opción 1 */}
            <div className="col-md-4">
              <div className="card text-center shadow-sm h-100">
                <div className="card-body">
                  <h3 className="card-title mb-4">Donación única</h3>
                  <p className="display-5 fw-bold text-primary mb-3">$5.000</p>
                  <p className="text-muted mb-4">
                    Ayuda inmediata para medicamentos y comida
                  </p>
                  <button className="btn btn-primary btn-lg w-100">
                    Donar $5.000
                  </button>
                </div>
              </div>
            </div>

            {/* Opción 2 */}
            <div className="col-md-4">
              <div className="card text-center shadow-sm h-100 border-primary">
                <div className="card-body">
                  <h3 className="card-title mb-4">Patrocinador mensual</h3>
                  <p className="display-5 fw-bold text-primary mb-3">
                    $10.000 <small className="fs-5">/mes</small>
                  </p>
                  <p className="text-muted mb-4">
                    Apoyo constante para cuidados veterinarios
                  </p>
                  <button className="btn btn-primary btn-lg w-100">
                    Ser patrocinador
                  </button>
                </div>
              </div>
            </div>

            {/* Opción 3 */}
            <div className="col-md-4">
              <div className="card text-center shadow-sm h-100">
                <div className="card-body">
                  <h3 className="card-title mb-4">Donación personalizada</h3>
                  <p className="text-muted mb-4">
                    Elige el monto que puedas aportar
                  </p>
                  <input
                    type="number"
                    className="form-control form-control-lg mb-3 text-center"
                    placeholder="Ingresa monto"
                    min="1000"
                  />
                  <button className="btn btn-primary btn-lg w-100">
                    Donar ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* formación de transparencia y seguridad */}
      <section className="py-5">
        <div className="container text-center">
          <h3 className="mb-4">Transparencia total</h3>
          <p className="text-muted mb-4">
            Todas las donaciones se destinan 100% al cuidado de los gatitos.
            Publicamos informes mensuales.
          </p>
          <a
            href="/transparencia"
            className="btn btn-outline-primary btn-lg px-5"
          >
            Ver reporte de gastos
          </a>
        </div>
      </section>
    </>
  );
}

export default Donate;
