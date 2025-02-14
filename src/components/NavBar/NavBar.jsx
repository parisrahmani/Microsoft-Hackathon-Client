import "./NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to={"/"}>
            <p className="nav__link ">Home</p>
          </Link>
        </li>
        <li className="nav__item">
          <Link to={"/quiz"}>
            <p className="nav__link ">Learn</p>
          </Link>
        </li>
        <li className="nav__item">
          <Link to={"/"}>
            <p className="nav__link ">CoPilot</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
