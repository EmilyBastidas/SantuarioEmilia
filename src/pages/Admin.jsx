import React, { useState, useEffect } from "react";
import {
  BiEditAlt,
  BiTrash,
  BiPlusCircle,
  BiSave,
  BiLogOut,
  BiXCircle,
  BiHealth,
  BiCloudUpload,
  BiLinkExternal,
} from "react-icons/bi";

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [cats, setCats] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // ESTADO EXACTO AL MODELO DEL BACKEND
  const [newGatito, setNewGatito] = useState({
    nombre: "",
    especie: "Felino",
    sexo: "Macho",
    fecha_nacimiento: "",
    edad_aprox: "",
    color: "",
    esterilizado: "Desconocido",
    vacunacion_anual: "No",
    desparasitacion_interna: "",
    desparasitacion_externa: "",
    retrovirales: "Desconocido",
    portador_de: "Sano",
    historia_llegada: "Sin información de rescate",
    caracter: "",
    ubicacion_actual: "",
    foto_principal: "",
    link_nube: "",
    estatus: "Adoptable",
  });

  const cloudName = "tu_cloud_name";
  const uploadPreset = "tu_preset";

  const fetchCats = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/gatitos/");
      if (res.ok) {
        const data = await res.json();
        setCats(data);
      }
    } catch (error) {
      console.error("Error al sincronizar con el servidor:", error);
    }
  };

  useEffect(() => {
    if (isLoggedIn) fetchCats();
  }, [isLoggedIn]);

  const handleEdit = (cat) => {
    setEditingId(cat.id);
    setNewGatito(cat);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setNewGatito({
      nombre: "",
      especie: "Felino",
      sexo: "Macho",
      fecha_nacimiento: "",
      edad_aprox: "",
      color: "",
      esterilizado: "Desconocido",
      vacunacion_anual: "No",
      desparasitacion_interna: "",
      desparasitacion_externa: "",
      retrovirales: "Desconocido",
      portador_de: "Sano",
      historia_llegada: "Sin información de rescate",
      caracter: "",
      ubicacion_actual: "",
      foto_principal: "",
      link_nube: "",
      estatus: "Adoptable",
    });
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", uploadPreset);
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: data,
        },
      );
      const fileData = await res.json();
      setNewGatito({ ...newGatito, foto_principal: fileData.secure_url });
      alert("Foto cargada correctamente");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editingId
      ? `http://127.0.0.1:8000/gatitos/${editingId}`
      : "http://127.0.0.1:8000/gatitos/";
    const method = editingId ? "PUT" : "POST";
    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGatito),
      });
      if (response.ok) {
        alert(editingId ? "¡Ficha actualizada!" : "¡Ficha creada!");
        cancelEdit();
        fetchCats();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este registro?")) {
      try {
        await fetch(`http://127.0.0.1:8000/gatitos/${id}`, {
          method: "DELETE",
        });
        fetchCats();
      } catch (error) {
        console.error(error);
      }
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="container py-5 mt-5 d-flex justify-content-center">
        <div
          className="card p-5 shadow border-0 rounded-4 w-100"
          style={{ maxWidth: "400px" }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsLoggedIn(true);
            }}
          >
            <h3 className="text-center mb-4 fw-bold">Gestión Santuario</h3>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="form-control mb-4"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="btn btn-dark w-100 rounded-pill py-2">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5 mt-5">
      <div className="d-flex justify-content-between align-items-center mb-5 border-bottom pb-3">
        <h1 className="fw-bold m-0">Administración Clínica</h1>
        <button
          onClick={() => setIsLoggedIn(false)}
          className="btn btn-outline-danger btn-sm rounded-pill px-4"
        >
          <BiLogOut /> Salir
        </button>
      </div>

      <section
        className={`card shadow-sm border-0 p-4 mb-5 rounded-4 ${editingId ? "border-top border-warning border-5" : ""}`}
      >
        <h3 className="mb-4 d-flex align-items-center gap-2">
          {editingId ? (
            <>
              <BiEditAlt className="text-warning" /> Modificando Ficha
            </>
          ) : (
            <>
              <BiPlusCircle className="text-primary" /> Nueva Ficha de Rescatado
            </>
          )}
        </h3>

        <form onSubmit={handleSubmit}>
          {/* IDENTIFICACIÓN BÁSICA */}
          <div className="row g-3 mb-4">
            <div className="col-md-4">
              <label className="form-label fw-bold small">
                Nombre (Requerido)
              </label>
              <input
                type="text"
                className="form-control"
                value={newGatito.nombre}
                onChange={(e) =>
                  setNewGatito({ ...newGatito, nombre: e.target.value })
                }
                required
              />
            </div>
            <div className="col-md-2">
              <label className="form-label fw-bold small">Especie</label>
              <input
                type="text"
                className="form-control"
                value={newGatito.especie}
                onChange={(e) =>
                  setNewGatito({ ...newGatito, especie: e.target.value })
                }
              />
            </div>
            <div className="col-md-2">
              <label className="form-label fw-bold small">Sexo</label>
              <select
                className="form-select"
                value={newGatito.sexo}
                onChange={(e) =>
                  setNewGatito({ ...newGatito, sexo: e.target.value })
                }
                required
              >
                <option value="Macho">Macho</option>
                <option value="Hembra">Hembra</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label fw-bold small">Estatus</label>
              <select
                className="form-select"
                value={newGatito.estatus}
                onChange={(e) =>
                  setNewGatito({ ...newGatito, estatus: e.target.value })
                }
                required
              >
                <option value="Adoptable">Adoptable</option>
                <option value="En tratamiento">En tratamiento</option>
                <option value="Especial">Especial</option>
              </select>
            </div>
          </div>

          <div className="row g-3 mb-4">
            <div className="col-md-3">
              <label className="form-label fw-bold small">F. Nacimiento</label>
              <input
                type="date"
                className="form-control"
                value={newGatito.fecha_nacimiento}
                onChange={(e) =>
                  setNewGatito({
                    ...newGatito,
                    fecha_nacimiento: e.target.value,
                  })
                }
              />
            </div>
            <div className="col-md-3">
              <label className="form-label fw-bold small">
                Edad Aproximada
              </label>
              <input
                type="text"
                className="form-control"
                value={newGatito.edad_aprox}
                onChange={(e) =>
                  setNewGatito({ ...newGatito, edad_aprox: e.target.value })
                }
              />
            </div>
            <div className="col-md-3">
              <label className="form-label fw-bold small">Color</label>
              <input
                type="text"
                className="form-control"
                value={newGatito.color}
                onChange={(e) =>
                  setNewGatito({ ...newGatito, color: e.target.value })
                }
              />
            </div>
            <div className="col-md-3">
              <label className="form-label fw-bold small">
                Ubicación Actual
              </label>
              <input
                type="text"
                className="form-control"
                value={newGatito.ubicacion_actual}
                onChange={(e) =>
                  setNewGatito({
                    ...newGatito,
                    ubicacion_actual: e.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* FICHA MÉDICA SINCRO */}
          <h5 className="text-success mb-3 d-flex align-items-center gap-2">
            <BiHealth /> Control Sanitario
          </h5>
          <div className="row g-3 mb-4 p-3 bg-light rounded border">
            <div className="col-md-3">
              <label className="form-label fw-bold small">Esterilizado</label>
              <select
                className="form-select"
                value={newGatito.esterilizado}
                onChange={(e) =>
                  setNewGatito({ ...newGatito, esterilizado: e.target.value })
                }
              >
                <option value="Si">Si</option>
                <option value="No">No</option>
                <option value="Desconocido">Desconocido</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label fw-bold small">
                Vacunación Anual
              </label>
              <select
                className="form-select"
                value={newGatito.vacunacion_anual}
                onChange={(e) =>
                  setNewGatito({
                    ...newGatito,
                    vacunacion_anual: e.target.value,
                  })
                }
              >
                <option value="Si">Si</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label fw-bold small">Retrovirales</label>
              <select
                className="form-select"
                value={newGatito.retrovirales}
                onChange={(e) =>
                  setNewGatito({ ...newGatito, retrovirales: e.target.value })
                }
              >
                <option value="Negativo">Negativo</option>
                <option value="Positivo">Positivo</option>
                <option value="Desconocido">Desconocido</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label fw-bold small">Portador de</label>
              <select
                className="form-select"
                value={newGatito.portador_de}
                onChange={(e) =>
                  setNewGatito({ ...newGatito, portador_de: e.target.value })
                }
              >
                <option value="Sano">Sano</option>
                <option value="VIF">VIF</option>
                <option value="FeLV">FeLV</option>
                <option value="Mycoplasma">Mycoplasma</option>
              </select>
            </div>
            <div className="col-md-6 mt-3">
              <label className="form-label fw-bold small">
                Desparasitación Interna
              </label>
              <input
                type="text"
                className="form-control"
                value={newGatito.desparasitacion_interna}
                onChange={(e) =>
                  setNewGatito({
                    ...newGatito,
                    desparasitacion_interna: e.target.value,
                  })
                }
              />
            </div>
            <div className="col-md-6 mt-3">
              <label className="form-label fw-bold small">
                Desparasitación Externa
              </label>
              <input
                type="text"
                className="form-control"
                value={newGatito.desparasitacion_externa}
                onChange={(e) =>
                  setNewGatito({
                    ...newGatito,
                    desparasitacion_externa: e.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* HISTORIAS Y MULTIMEDIA */}
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label className="form-label fw-bold small">
                Historia de Llegada
              </label>
              <textarea
                className="form-control"
                rows="3"
                value={newGatito.historia_llegada}
                onChange={(e) =>
                  setNewGatito({
                    ...newGatito,
                    historia_llegada: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold small">Carácter</label>
              <textarea
                className="form-control"
                rows="3"
                value={newGatito.caracter}
                onChange={(e) =>
                  setNewGatito({ ...newGatito, caracter: e.target.value })
                }
              ></textarea>
            </div>
          </div>

          <div className="row g-3 align-items-end mb-4">
            <div className="col-md-4">
              <label className="form-label fw-bold small">
                <BiCloudUpload /> Foto Principal (Cloudinary)
              </label>
              <input
                type="file"
                className="form-control"
                onChange={uploadImage}
              />
            </div>
            <div className="col-md-8">
              <label className="form-label fw-bold small">
                <BiLinkExternal /> Link Nube (Drive / Historial)
              </label>
              <input
                type="text"
                className="form-control"
                value={newGatito.link_nube}
                onChange={(e) =>
                  setNewGatito({ ...newGatito, link_nube: e.target.value })
                }
                placeholder="URL de la nube..."
              />
            </div>
          </div>

          <div className="text-end">
            {editingId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="btn btn-light rounded-pill px-4 me-2"
              >
                Cancelar
              </button>
            )}
            <button
              type="submit"
              className="btn btn-primary btn-lg rounded-pill px-5 shadow"
              disabled={loading}
            >
              <BiSave className="me-2" />{" "}
              {editingId ? "Guardar Cambios" : "Crear Ficha"}
            </button>
          </div>
        </form>
      </section>

      {/* TABLA DE REGISTROS */}
      <section className="bg-white rounded-4 shadow-sm border p-3">
        <h4 className="fw-bold mb-4 px-2">Residentes del Santuario</h4>
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Estatus</th>
                <th className="text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cats.length > 0 ? (
                cats.map((cat) => (
                  <tr key={cat.id || Math.random()}>
                    <td>
                      <img
                        src={
                          cat.foto_principal || "https://via.placeholder.com/50"
                        }
                        className="rounded-circle shadow-sm"
                        width="45"
                        height="45"
                        style={{ objectFit: "cover" }}
                        alt="rescatado"
                      />
                    </td>
                    <td className="fw-bold">{cat.nombre}</td>
                    <td>
                      <span className="badge bg-primary-subtle text-primary rounded-pill">
                        {cat.estatus}
                      </span>
                    </td>
                    <td className="text-center">
                      <div className="d-flex justify-content-center gap-2">
                        <button
                          onClick={() => handleEdit(cat)}
                          className="btn btn-outline-primary btn-sm rounded-circle p-2"
                          title="Editar"
                        >
                          <BiEditAlt size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(cat.id)}
                          className="btn btn-outline-danger btn-sm rounded-circle p-2"
                          title="Eliminar"
                        >
                          <BiTrash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-muted">
                    No hay rescatados registrados
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Admin;
