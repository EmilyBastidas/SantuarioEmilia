import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { IoLogoOctocat } from "react-icons/io";
import AppointmentCard from "../components/AppointmentCard";
import UrgentDonationCard from "../components/UrgentDonationCard";

function Home() {
  // Estados
  const [urgentDonations, setUrgentDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  //FETCH REAL AL BACKEND (Python FastAPI/Flask)
  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/urgent-cases/");
        if (response.ok) {
          const data = await response.json();
          console.log("📥 Datos del Backend recibidos:", data);
          setUrgentDonations(data);
        }
      } catch (error) {
        console.error("❌ Error conectando al Santuario API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCases();
  }, []);

  // Datos estáticos para Citas (aquí por ahora)
  const upcomingAppointments = [
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
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero d-flex align-items-center bg-dark text-white py-5">
        <div className="container text-center">
          <h1 className="mb-4">Cada vida importa 🐾</h1>
          <p className="lead mb-4">
            Rescatamos y cuidamos gatitos que necesitan una segunda oportunidad.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link
              to="/donar"
              className="btn btn-primary btn-lg px-5 rounded-pill"
            >
              {" "}
              <FaHeart className="me-2" /> Donar{" "}
            </Link>
            <Link
              to="/gatitos"
              className="btn btn-outline-light btn-lg px-5 rounded-pill"
            >
              {" "}
              <IoLogoOctocat className="me-2" /> Conócelos{" "}
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Citas (Estáticas) */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4 text-center">Próximas consultas</h2>
          <div className="row g-4">
            {upcomingAppointments.map((appt, index) => (
              <div className="col-md-6" key={index}>
                <AppointmentCard {...appt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN DINÁMICA: Donaciones Urgentes */}
      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Donaciones urgentes</h2>
            <Link
              to="/urgentes"
              className="btn btn-outline-primary rounded-pill"
            >
              Ver todos
            </Link>
          </div>

          <div className="row g-4">
            {loading ? (
              <div className="text-center py-5 w-100">
                Cargando esperanza... 🐾
              </div>
            ) : urgentDonations.length > 0 ? (
              urgentDonations.map((donation, index) => (
                <div className="col-md-6 col-lg-4" key={donation.id || index}>
                  <UrgentDonationCard
                    petName={donation.petName}
                    status={donation.status}
                    imageUrl={donation.imageUrl}
                    description={donation.description}
                    raised={donation.raised || 0}
                    goal={donation.goal || 0}
                    percentage={donation.percentage || 0}
                  />
                </div>
              ))
            ) : (
              <div className="text-center py-5 text-muted w-100">
                No hay campañas activas en el servidor.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
