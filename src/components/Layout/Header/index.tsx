import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Navbar</span>
          {/* <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              onClick={() => setIsOpen((prev) => !prev)}
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              Dropdown
            </button>
            <div
              className={`dropdown-menu ${isOpen ? "show" : "hidden"}`}
              aria-labelledby="dropdownMenu2"
            >
              <button className="dropdown-item" type="button">
                Action
              </button>
              <button className="dropdown-item" type="button">
                Another action
              </button>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </div>
          </div> */}
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-secondary dropdown-toggle"
              onClick={() => setIsOpen((prev) => !prev)}
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Right-aligned menu
            </button>
            <div
              className={`dropdown-menu dropdown-menu-right ${
                isOpen ? "show" : "hidden"
              }`}
            >
              <button className="dropdown-item" type="button">
                Action
              </button>
              <button className="dropdown-item" type="button">
                Another action
              </button>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
