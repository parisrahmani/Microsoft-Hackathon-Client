import NavBar from "../NavBar/NavBar";
import icon from "../../assets/logo/logo.png";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <p className="header__logo">Co-teacher</p>
        <img src={icon} className="header__img" />
      </div>
      <NavBar />
    </header>
  );
}
export default Header;
