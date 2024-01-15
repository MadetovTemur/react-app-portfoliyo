import { NavLink } from "react-router-dom";
import DarkMoodBtn from "./DarkMoodBtn";

function Navbor() {
  const activeLink = "nav-list__link nav-list__link--active";
  const defaultLink = "nav-list__link ";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Freelancer</strong> portfolio
          </NavLink>

          <DarkMoodBtn />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? activeLink : defaultLink;
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) => {
                  return isActive ? activeLink : defaultLink;
                }}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacte"
                className={({ isActive }) => {
                  return isActive ? activeLink : defaultLink;
                }}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbor;
