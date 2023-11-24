import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/youchoose-logo.png";
import login from "../../assets/images/login-icon.png";
import heart from "../../assets/images/heart.png";
import { useState } from "react";

export default function Header() {
  const [name, setName] = useState(null);

  return (
    <header className="header">
      <div className="header__div">
        <Link to="/">
          <img className="header__logo" src={logo} alt="youchoose logo" />
        </Link>

        <div className="header__icons-div">
          <Link to="/matches">
            <img className="header__login" src={heart} alt="handshake icon" />
          </Link>
          <p className="header__text">Matches</p>
        </div>

        <div className="header__icons-div">
          <Link to="/login">
            <img className="header__login" src={login} alt="login icon" />
          </Link>
            <p className="header__text">{name || "Log in"}</p>
        </div>
      </div>
    </header>
  );
}
