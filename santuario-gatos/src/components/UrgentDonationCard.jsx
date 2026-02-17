// src/components/UrgentDonationCard.jsx
import React from "react";

function UrgentDonationCard({
  petName,
  status,
  imageUrl,
  description,
  raised,
  goal,
  percentage,
}) {
  // Badge según urgencia
  const getBadgeClass = (status) => {
    switch (status) {
      case "Crítico":
        return "bg-danger text-white";
      case "Urgente":
        return "bg-warning text-dark";
      default:
        return "bg-secondary text-white";
    }
  };

  // Calcula el ancho de la barra (Bootstrap usa style inline para progreso)
  const progressWidth = `${percentage}%`;

  return (
    <div className="card shadow-sm border-0 h-100 d-flex flex-column">
      {/* Imagen arriba */}
      <img
        src={imageUrl}
        className="card-img-top"
        alt={`${petName} - rescate urgente`}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title mb-0">{petName}</h5>
          <span className={`badge ${getBadgeClass(status)} px-3 py-2 fs-6`}>
            {status}
          </span>
        </div>

        <p className="card-text text-muted mb-3">{description}</p>

        {/* Progreso */}
        <div className="mb-3">
          <div className="d-flex justify-content-between mb-1 small">
            <span>
              <strong>{percentage}%</strong> recaudado
            </span>
            <span>
              ${raised.toLocaleString()} / ${goal.toLocaleString()}
            </span>
          </div>
          <div className="progress" style={{ height: "12px" }}>
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: progressWidth }}
              aria-valuenow={percentage}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        {/* Botón de acción */}
        <a
          href="#"
          className="btn btn-primary mt-auto w-100"
          style={{ backgroundColor: "#86b89a", borderColor: "#86b89a" }} // verde de tu hero
        >
          Ayudar a {petName}
        </a>
      </div>
    </div>
  );
}

export default UrgentDonationCard;
