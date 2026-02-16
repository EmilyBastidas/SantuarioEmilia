import { FaHeart } from "react-icons/fa";
import { IoLogoOctocat } from "react-icons/io";
import AppointmentCard from "../components/AppointmentCard";
import UrgentDonationCard from "../components/UrgentDonationCard";

function Home() {
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
    {
      petName: "Pelusa",
      status: "En tratamiento",
      date: "sábado, 21 de febrero de 2026",
      time: "11:00",
      type: "Control renal",
      vet: "Dra. Ana Ruiz",
      notes: "Seguimiento función renal",
    },
  ];

  const urgentDonations = [
    {
      petName: "Simba",
      status: "Crítico",
      imageUrl:
        "https://c8.alamy.com/comp/T43H36/sick-cat-with-bandaged-leg-cute-ginger-cat-with-broken-leg-on-white-floor-T43H36.jpg", // ejemplo real de gato con yeso
      description: "Fractura de fémur + trauma múltiple",
      raised: 18200,
      goal: 35000,
      percentage: 52,
    },
    // Agrega más cuando quieras
    // {
    //   petName: "Luna",
    //   status: "Urgente",
    //   imageUrl: "URL_DE_OTRA_IMAGEN",
    //   description: "Infección respiratoria grave",
    //   raised: 8500,
    //   goal: 15000,
    //   percentage: 57,
    // },
  ];

  return (
    <>
      <section className="hero d-flex align-items-center">
        <div className="container text-center">
          <h1 className="mb-4 text-light">Cada vida importa</h1>

          <p className="text-light">
            Rescatamos, cuidamos y damos amor a gatitos que necesitan una
            segunda oportunidad. Tu ayuda puede salvar vidas.
          </p>

          <div className="d-flex justify-content-center gap-4 mt-4">
            <button
              className="btn"
              style={{
                backgroundColor: "rgb(134, 184, 154)",
                color: "#f4f2f2ff",
              }}
            >
              <FaHeart className="me-2" />
              Donar
            </button>

            <button
              className="btn"
              style={{
                backgroundColor: "rgba(199, 176, 218, 1)",
                color: "#1f1d28ff",
              }}
            >
              <IoLogoOctocat className="me-2" />
              Conoce a nuestros gatitos
            </button>
          </div>
        </div>
      </section>

      {/* metricas*/}

      <section className="stats py-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="stat-card">
                <h3>32</h3>
                <p>Gatitos rescatados</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stat-card">
                <h3>18</h3>
                <p>Citas veterinarias</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stat-card">
                <h3>$1.240.000</h3>
                <p>Invertidos en salud</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*cards de gatos*/}

      <section className="py-5 bg-light">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
            <h2 className="mb-3 mb-md-0">Próximas consultas veterinarias</h2>
            <button className="btn btn-outline-primary px-4">
              Ver todas las consultas
            </button>
          </div>

          <div className="row g-4">
            {upcomingAppointments.map((appt, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <AppointmentCard
                  petName={appt.petName}
                  status={appt.status}
                  date={appt.date}
                  time={appt.time}
                  type={appt.type}
                  vet={appt.vet}
                  notes={appt.notes}
                />
              </div>
            ))}
          </div>

          {upcomingAppointments.length === 0 && (
            <div className="text-center py-5 text-muted">
              No hay consultas programadas por el momento
            </div>
          )}
        </div>
      </section>
      {/*donaciones urgentes*/}
      <section className="py-5">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
            <h2 className="mb-3 mb-md-0">Donaciones urgentes</h2>
            <button className="btn btn-outline-primary px-4">Ver todos</button>
          </div>

          <div className="row g-4">
            {urgentDonations.map((donation, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <UrgentDonationCard
                  petName={donation.petName}
                  status={donation.status}
                  imageUrl={donation.imageUrl}
                  description={donation.description}
                  raised={donation.raised}
                  goal={donation.goal}
                  percentage={donation.percentage}
                />
              </div>
            ))}
          </div>

          {urgentDonations.length === 0 && (
            <div className="text-center py-5 text-muted">
              No hay campañas urgentes en este momento
            </div>
          )}
        </div>
      </section>
      {/* Sección "Juntos hacemos la diferencia" */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4 fw-bold" style={{ color: "#4a4a4a" }}>
            Juntos hacemos la diferencia
          </h2>

          <p className="lead mb-4 text-muted">
            Cada donación, sin importar su tamaño, nos ayuda a proporcionar
            cuidados médicos, alimentos y amor a nuestros gatitos rescatados.
          </p>

          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
            <a
              href="#"
              className="btn btn-success btn-lg px-5 py-3 fw-bold"
              style={{ backgroundColor: "#86b89a", borderColor: "#86b89a" }} // verde de tu hero
            >
              Hacer una donación
            </a>
            <a href="#" className="btn btn-outline-secondary btn-lg px-5 py-3">
              Ver transparencia de gastos
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row g-4">
            {/* Columna 1: Santuario */}
            <div className="col-md-4">
              <h5 className="mb-3">
                <span role="img" aria-label="heart">
                  <FaHeart className="me-2" />
                </span>{" "}
                Santuario de Gatos
              </h5>
              <p className="text-muted small">
                Dedicados al rescate, cuidado y rehabilitación de gatos en
                situación vulnerable. Cada vida importa.
              </p>
            </div>

            {/* Columna 2: Enlaces */}
            <div className="col-md-4">
              <h5 className="mb-3">Enlaces</h5>
              <ul className="list-unstyled small">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Conoce a nuestros gatitos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Cómo donar
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Transparencia de gastos
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 3: Contacto */}
            <div className="col-md-4">
              <h5 className="mb-3">Contacto</h5>
              <ul className="list-unstyled small">
                <li className="mb-2">
                  <i className="bi bi-geo-alt me-2"></i> Av. Principal 123,
                  Ciudad
                </li>
                <li className="mb-2">
                  <i className="bi bi-telephone me-2"></i> +1 234 567 890
                </li>
                <li>
                  <i className="bi bi-envelope me-2"></i>{" "}
                  contacto@santuariogatos.org
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-4 border-secondary" />

          <div className="text-center small text-light">
            © Santuario Emilia. Todos los derechos reservados. <br />
            <p className="text-light">
              Hecho con <FaHeart className="text-danger" /> para nuestros amigos
              felinos.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
