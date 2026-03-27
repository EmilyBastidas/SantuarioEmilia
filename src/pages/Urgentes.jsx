import React, { useState, useEffect } from "react";
import UrgentDonationCard from "../components/UrgentDonationCard";

function Urgentes() {
  const [urgentes, setUrgentes] = useState([]);
  const [loading, setLoading] = useState(true);

  // CONEXIÓN AL BACKEND (Donde vive Bosco)
  useEffect(() => {
    const fetchUrgentes = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/urgent-cases/");
        if (response.ok) {
          const data = await response.json();
          console.log(" Datos cargados en Urgentes:", data);
          setUrgentes(data);
        }
      } catch (error) {
        console.error(" Error en la conexión de Urgentes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUrgentes();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="mb-4 fw-bold mt-4 text-center">
        Casos de Extrema Urgencia
      </h1>
      <p className="text-center text-muted mb-5">
        Estos gatitos necesitan nuestra ayuda inmediata para sus tratamientos
        médicos.
      </p>

      <div className="row g-4">
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando esperanza...</span>
            </div>
            <p className="mt-3">Conectando con el Santuario...</p>
          </div>
        ) : urgentes.length > 0 ? (
          urgentes.map((gato) => (
            <div className="col-md-6 col-lg-4" key={gato.id}>
              <UrgentDonationCard
                petName={gato.petName}
                status={gato.status}
                imageUrl={gato.imageUrl}
                description={gato.description}
                raised={gato.raised}
                goal={gato.goal}
                percentage={gato.percentage}
              />
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <div className="alert alert-info">
              Parece que no hay casos urgentes reportados en este momento.
              ¡Buenas noticias!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Urgentes;
