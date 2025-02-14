import "./NavBar.scss";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to={"/"} className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")}>
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"/quiz"} className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")}>
            Learn
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"/copilot"} className={({ isActive }) => (isActive ? "nav__link active" : "nav__link")}>
            CoPilot
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
