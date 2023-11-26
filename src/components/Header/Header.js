import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/youchoose-logo.png";
import login from "../../assets/images/login-icon.png";
import movie from "../../assets/images/clapperboard.927x1024.png";

export default function Header({ data }) {
  return (
    <header className="header">
      <div className="header__div">
        <Link to="/dashboard">
          <img className="header__logo" src={logo} alt="youchoose logo" />
        </Link>

        <div className="header__icons-div">
          <Link to="/matches">
            <img className="header__login" src={movie} alt="clapperboard icon" />
          </Link>
          <p className="header__text">Matches</p>
        </div>

        <div className="header__icons-div">
          <Link to="/login">
            <img className="header__login" src={login} alt="login icon" />
          </Link>
          <p className="header__text">{data?.first_name || "Log in"}</p>
        </div>
      </div>
    </header>
  );
}
