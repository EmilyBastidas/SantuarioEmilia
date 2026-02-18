import React from "react";
import AppointmentCard from "../components/AppointmentCard"; // ajusta la ruta

// Datos de ejemplo (más adelante vendrán de Supabase o Firebase)
const todasLasCitas = [
  {
    petName: "Simba",
    status: "Crítico",
    date: "martes, 17 de febrero de 2026",
    time: "09:00",
    type: "Cirugía ortopédica",
    vet: "Dra. Patricia Morales",
    notes: "Preparación preoperatoria: ayuno 12h",
  },
  {
    petName: "Luna",
    status: "En tratamiento",
    date: "jueves, 19 de febrero de 2026",
    time: "14:30",
    type: "Control respiratorio",
    vet: "Dr. Carlos Vega",
    notes: "Evaluación de progreso tratamiento antibiótico",
  },
  {
    petName: "Pelusa",
    status: "En tratamiento",
    date: "sábado, 21 de febrero de 2026",
    time: "11:00",
    type: "Control renal",
    vet: "Dra. Ana Ruiz",
    notes: "Seguimiento función renal",
  },
  {
    petName: "Milo",
    status: "Programado",
    date: "lunes, 23 de febrero de 2026",
    time: "10:15",
    type: "Vacunación anual",
    vet: "Dr. Andrés López",
    notes: "Primera dosis de triple felina",
  },
  // Puedes agregar más cuando quieras
];

function Citas() {
  return (
    <>
      {/* Hero pequeño o título */}
      <section className="py-5 bg-light text-center mt-4">
        <div className="container">
          <h1 className="mb-4 fw-bold">Todas las consultas veterinarias</h1>
          <p className="lead text-muted mb-0">
            Aquí puedes ver el listado completo de citas programadas para
            nuestros gatitos.
          </p>
        </div>
      </section>

      {/* Listado completo */}
      <section className="py-5">
        <div className="container">
          {todasLasCitas.length === 0 ? (
            <div className="text-center py-5 text-muted">
              No hay consultas programadas aún. ¡Pronto tendremos más!
            </div>
          ) : (
            <div className="row g-4">
              {todasLasCitas.map((cita, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <AppointmentCard {...cita} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Citas;
