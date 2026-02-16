import React from "react";

function AppointmentCard({ petName, status, date, time, type, vet, notes }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "Crítico":
        return "bg-danger text-white";
      case "En tratamiento":
        return "bg-warning text-dark";
      case "Programado":
        return "bg-primary text-white";
      case "Completado":
        return "bg-success text-white";
      default:
        return "bg-secondary text-white";
    }
  };

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-header d-flex justify-content-between align-items-center bg-light">
        <h5 className="card-title mb-0">{petName}</h5>
        <span className={`badge ${getStatusBadge(status)} px-3 py-2`}>
          {status}
        </span>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <strong>Fecha:</strong> {date}
          <br />
          <strong>Hora:</strong> {time}
        </div>

        <div className="mb-3">
          <strong>Tipo:</strong> {type}
          <br />
          <strong>Veterinario:</strong> {vet}
        </div>

        {notes && (
          <div className="mt-3 pt-3 border-top">
            <small className="text-muted fst-italic">{notes}</small>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppointmentCard;
