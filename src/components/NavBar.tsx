import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Conficon</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Generate</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">How it works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact us</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="bi bi-bell"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Hi User!</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
