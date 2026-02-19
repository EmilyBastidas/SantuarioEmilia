import React from "react";

function CatCard({ name, age, gender, breed, description, imageUrl, status }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "Adoptable":
        return "bg-success text-white";
      case "En tratamiento":
        return "bg-warning text-dark";
      case "Especial":
        return "bg-info text-white";
      default:
        return "bg-secondary text-white";
    }
  };

  return (
    <div className="card shadow-sm border-0 h-100">
      <img
        src={imageUrl}
        className="card-img-top"
        alt={name}
        style={{ height: "220px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title mb-0">{name}</h5>
          <span className={`badge ${getStatusBadge(status)} px-3 py-2`}>
            {status}
          </span>
        </div>

        <p className="card-text small text-muted mb-2">
          {age} • {gender} • {breed}
        </p>

        <p className="card-text flex-grow-1">{description}</p>
      </div>
    </div>
  );
}

export default CatCard;
