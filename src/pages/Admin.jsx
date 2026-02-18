import React, { useState } from "react";

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [newGatito, setNewGatito] = useState({
    nombre: "",
    edad: "",
    genero: "Macho",
    estado: "Adoptable",
    descripcion: "",
  });

  const [newCita, setNewCita] = useState({
    gatoNombre: "",
    fecha: "",
    hora: "",
    veterinario: "",
    tipo: "",
    notas: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulación de login exitoso (cualquier cosa sirve por ahora)
    if (email && password) {
      setIsLoggedIn(true);
      alert("¡Bienvenida al panel admin! (modo mock)");
    } else {
      alert("Ingresa email y contraseña");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("Sesión cerrada");
  };

  const handleAddGatito = (e) => {
    e.preventDefault();
    alert(
      `Gatito "${newGatito.nombre}" agregado (mock - no se guarda realmente)`,
    );
    setNewGatito({
      nombre: "",
      edad: "",
      genero: "Macho",
      estado: "Adoptable",
      descripcion: "",
    });
  };

  const handleAddCita = (e) => {
    e.preventDefault();
    alert(`Cita para "${newCita.gatoNombre}" agendada (mock)`);
    setNewCita({
      gatoNombre: "",
      fecha: "",
      hora: "",
      veterinario: "",
      tipo: "",
      notas: "",
    });
  };

  if (!isLoggedIn) {
    return (
      <section className="py-5 bg-light min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                <div className="card-body p-5">
                  <div className="text-center mb-5">
                    <h2 className="fw-bold text-dark">Inicio de Sesión</h2>
                    <p className="text-muted">
                      Solo para el equipo del santuario
                    </p>
                  </div>

                  <form onSubmit={handleLogin}>
                    <div className="mb-4">
                      <label className="form-label fw-bold">Email</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="admin@santuariodegatos.cl"
                        required
                      />
                    </div>
                    <div className="mb-5">
                      <label className="form-label fw-bold">Contraseña</label>
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-dark btn-lg w-100 rounded-pill"
                    >
                      Iniciar Sesión
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Header del dashboard */}
      <section className="py-4 bg-dark text-white shadow-sm mt-4">
        <div className="container d-flex justify-content-between align-items-center ">
          <h1 className="mb-0 mt-4 fw-bold">Panel de Administración</h1>
          <button
            className="btn btn-outline-light rounded-pill px-4 mt-4"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </div>
      </section>

      {/* Acciones rápidas */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-5 text-center fw-bold">Acciones rápidas</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow h-100 border-0 hover-shadow">
                <div className="card-body text-center p-5">
                  <i className="bi bi-cat fs-1 text-primary mb-3 d-block"></i>
                  <h4 className="card-title">Agregar Gatito</h4>
                  <p className="text-muted">
                    Registra nuevos rescates o actualiza perfiles
                  </p>
                  <button className="btn btn-primary rounded-pill px-4">
                    Ir al formulario
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow h-100 border-0 hover-shadow">
                <div className="card-body text-center p-5">
                  <i className="bi bi-calendar-event fs-1 text-success mb-3 d-block"></i>
                  <h4 className="card-title">Nueva Cita Vet</h4>
                  <p className="text-muted">
                    Programa controles, cirugías o tratamientos
                  </p>
                  <button className="btn btn-success rounded-pill px-4">
                    Ir al formulario
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow h-100 border-0 hover-shadow">
                <div className="card-body text-center p-5">
                  <i className="bi bi-currency-dollar fs-1 text-warning mb-3 d-block"></i>
                  <h4 className="card-title">Donaciones</h4>
                  <p className="text-muted">
                    Revisa aportes recibidos este mes
                  </p>
                  <button className="btn btn-warning text-white rounded-pill px-4">
                    Ver reporte
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario agregar gatito */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4 fw-bold text-center">
            Agregar Gatito Nuevo (mock)
          </h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form
                onSubmit={handleAddGatito}
                className="bg-white p-4 rounded shadow"
              >
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newGatito.nombre}
                      onChange={(e) =>
                        setNewGatito({ ...newGatito, nombre: e.target.value })
                      }
                      placeholder="Ej: Luna"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">
                      Edad aproximada
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={newGatito.edad}
                      onChange={(e) =>
                        setNewGatito({ ...newGatito, edad: e.target.value })
                      }
                      placeholder="Ej: 2 años"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Género</label>
                    <select
                      className="form-select"
                      value={newGatito.genero}
                      onChange={(e) =>
                        setNewGatito({ ...newGatito, genero: e.target.value })
                      }
                    >
                      <option>Macho</option>
                      <option>Hembra</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Estado</label>
                    <select
                      className="form-select"
                      value={newGatito.estado}
                      onChange={(e) =>
                        setNewGatito({ ...newGatito, estado: e.target.value })
                      }
                    >
                      <option>Adoptable</option>
                      <option>En tratamiento</option>
                      <option>Especial</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-bold">Descripción</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={newGatito.descripcion}
                      onChange={(e) =>
                        setNewGatito({
                          ...newGatito,
                          descripcion: e.target.value,
                        })
                      }
                      placeholder="Historia, personalidad, necesidades especiales..."
                    ></textarea>
                  </div>
                  <div className="col-12 text-center mt-4">
                    <button
                      type="submit"
                      className="btn btn-dark btn-lg px-5 rounded-pill"
                    >
                      Guardar Gatito (mock)
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario agregar cita vet */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4 fw-bold text-center">
            Nueva Cita Veterinaria (mock)
          </h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form
                onSubmit={handleAddCita}
                className="bg-white p-4 rounded shadow"
              >
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-bold">
                      Nombre del gatito
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={newCita.gatoNombre}
                      onChange={(e) =>
                        setNewCita({ ...newCita, gatoNombre: e.target.value })
                      }
                      placeholder="Ej: Simba"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Fecha</label>
                    <input
                      type="date"
                      className="form-control"
                      value={newCita.fecha}
                      onChange={(e) =>
                        setNewCita({ ...newCita, fecha: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Hora</label>
                    <input
                      type="time"
                      className="form-control"
                      value={newCita.hora}
                      onChange={(e) =>
                        setNewCita({ ...newCita, hora: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Veterinario</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newCita.veterinario}
                      onChange={(e) =>
                        setNewCita({ ...newCita, veterinario: e.target.value })
                      }
                      placeholder="Ej: Dra. Patricia"
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label fw-bold">Tipo de cita</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newCita.tipo}
                      onChange={(e) =>
                        setNewCita({ ...newCita, tipo: e.target.value })
                      }
                      placeholder="Ej: Cirugía ortopédica"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-bold">Notas</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={newCita.notas}
                      onChange={(e) =>
                        setNewCita({ ...newCita, notas: e.target.value })
                      }
                      placeholder="Preparación, recomendaciones, etc."
                    ></textarea>
                  </div>
                  <div className="col-12 text-center mt-4">
                    <button
                      type="submit"
                      className="btn btn-success btn-lg px-5 rounded-pill"
                    >
                      Agendar Cita (mock)
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin;
