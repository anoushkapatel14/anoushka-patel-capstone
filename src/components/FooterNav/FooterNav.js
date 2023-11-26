import "./FooterNav.scss";
import home from "../../assets/images/home.png";
import movie from "../../assets/images/clapperboard.927x1024.png";
import swipeIcon from "../../assets/images/swipeIcon.png";
import { Link } from "react-router-dom";

export default function FooterNav() {
  return (
    <footer className="footer">
      <div className="footer__icons-div">
        <Link to="/movies">
          <img className="footer__icon" src={swipeIcon} alt="swiping icon" />
        </Link>
        <p className="footer__text">Swipe</p>
      </div>

      <div className="footer__icons-div">
        <Link to="/dashboard">
          <img className="footer__icon" src={home} alt="home icon" />
        </Link>
        <p className="footer__text">Home</p>
      </div>

      <div className="footer__icons-div">
        <Link to="/matches">
          <img className="footer__icon" src={movie} alt="clapperboard icon" />
        </Link>
        <p className="footer__text">Matches</p>
      </div>
    </footer>
  );
}
