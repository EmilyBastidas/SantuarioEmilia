import React, { useState, useEffect } from "react"; // 1. Importamos los Hooks
import CatCard from "../components/CatCards";

function Gatitos() {
  // 2. Creamos el estado para los gatos (ahora empieza vacío)
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);

  // 3. La función que va a buscar los datos a tu API
  const getCatsFromApi = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/gatitos/");
      if (!response.ok) throw new Error("Error en la conexión");
      const data = await response.json();
      setCats(data); // Guardamos los gatos reales en el estado
    } catch (error) {
      console.error("No pudimos traer los gatitos:", error);
    } finally {
      setLoading(false);
    }
  };

  // 4. Se ejecuta una sola vez al cargar el componente
  useEffect(() => {
    getCatsFromApi();
  }, []);

  return (
    <>
      {/* Título (Se mantiene igual) */}
      <section className="py-5 bg-light text-center">
        <div className="container-fluid px-3 px-md-5 m-4">
          <h1 className="mb-4 mt-4 fw-bold">Nuestros Gatitos</h1>
          <p className="lead text-muted">
            Conoce a los rescatados que están esperando un hogar lleno de amor.
          </p>
        </div>
      </section>

      {/* Grid de cards dinámico */}
      <section className="py-5">
        <div className="container">
          {loading ? (
            <div className="text-center py-5">
              Buscando peludos en la base de datos... 🐾
            </div>
          ) : (
            <div className="row g-4">
              {cats.map((cat) => (
                <div className="col-md-6 col-lg-4" key={cat.id}>
                  {" "}
                  {/* Usamos cat.id de la DB */}
                  <CatCard
                    name={cat.nombre} // Ojo: en Python usamos 'nombre', no 'name'
                    age={cat.edad_aprox}
                    gender={cat.sexo}
                    breed={cat.color} // O la raza si la tienes
                    description={cat.historia_llegada}
                    imageUrl={cat.foto_principal}
                    status={cat.estatus}
                  />
                </div>
              ))}
            </div>
          )}

          {!loading && cats.length === 0 && (
            <div className="text-center py-5 text-muted">
              Aún no hay gatitos registrados en el sistema.
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Gatitos;
