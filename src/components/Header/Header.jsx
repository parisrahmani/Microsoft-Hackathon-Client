import NavBar from "../NavBar/NavBar";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <p className="header__logo">Co-teacher</p>
      <NavBar />
    </header>
  );
}
export default Header;
