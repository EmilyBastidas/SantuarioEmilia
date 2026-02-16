function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Santuario Emilia - Portal de Salud
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse d-flex align-items-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"></a>
            </li>

            <li className="nav-item ">
              <a className="nav-link" href="#">
                Gatitos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Donar
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Transparencia
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Inicia sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
