import "./FooterNav.scss";
import home from "../../assets/images/home.png";
import heart from "../../assets/images/heart.png";
import { Link } from "react-router-dom";

export default function FooterNav() {
  return (
    <footer className="footer">


      <div className="footer__icons-div">
        <Link to="/">
          <img className="footer__icon" src={home} alt="home icon" />
        </Link>
        <p className="footer__text">Home</p>
      </div>

      <div className="footer__icons-div">
        <Link to="/matches">
          <img className="footer__icon" src={heart} alt="heart icon" />
        </Link>
        <p className="footer__text">Matches</p>
      </div>
    </footer>
  );
}
