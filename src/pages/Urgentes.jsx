import React from "react";
import UrgentDonationCard from "../components/UrgentDonationCard"; // ajusta la ruta

// Datos de ejemplo (más adelante vendrán de backend)
const todosLosCasos = [
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
  {
    petName: "Pelusa",
    status: "En tratamiento",
    imageUrl:
      "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=800",
    description: "Control renal estable, no urgente.",
    raised: 12000,
    goal: 15000,
    percentage: 80,
  },
  // más casos...
];

// Filtramos solo los urgentes
const casosUrgentes = todosLosCasos.filter(
  (caso) => caso.status === "Crítico" || caso.status === "Urgente",
);

function Urgentes() {
  return (
    <>
      {/* Título */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h1 className="mb-4 fw-bold mt-4">Casos urgentes</h1>
          <p className="lead text-muted mb-0">
            Estos gatitos necesitan ayuda inmediata. Tu donación puede marcar la
            diferencia hoy.
          </p>
        </div>
      </section>

      {/* Listado solo urgentes */}
      <section className="py-5">
        <div className="container">
          {casosUrgentes.length === 0 ? (
            <div className="text-center py-5 text-muted">
              No hay casos urgentes en este momento. ¡Gracias por tu apoyo
              constante!
            </div>
          ) : (
            <div className="row g-4">
              {casosUrgentes.map((caso, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <UrgentDonationCard {...caso} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Urgentes;
