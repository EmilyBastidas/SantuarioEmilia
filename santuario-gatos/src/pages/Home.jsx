import { FaHeart } from "react-icons/fa";
import { IoLogoOctocat } from "react-icons/io";

function Home() {
  return (
    <section className="hero d-flex align-items-center text-center">
      <div className="container mt-5">
        <h1 className="text-center mb-4 text-light">Cada vida importa</h1>
        <p className="text-center text-light">
          Rescatamos, cuidamos y damos amor a gatitos que necesitan una segunda
          oportunidad. Tu ayuda puede salvar vidas.
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
            type="button"
            className="btn"
            style={{
              backgroundColor: "rgb(244, 236, 217)",
              color: "#0c0918ff",
            }}
          >
            <IoLogoOctocat className="me-2" />
            Conoce a nuestros gatitos
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
