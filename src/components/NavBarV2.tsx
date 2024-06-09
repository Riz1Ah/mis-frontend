
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">MIS Portal</a>
        <div className="d-flex">
          <a className="nav-link text-white" href="#">Hi User!</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
