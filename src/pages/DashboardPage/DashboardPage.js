import "./DashboardPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import dashboardLogo from "../../assets/images/dashboardLogo.png";

export default function Dashboard({ data, setData }) {
  const [failedAuth, setFailedAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("token");
    setData(null);
    navigate("/login");
  };

  const login = async () => {
    const token = sessionStorage.getItem("token");

    try {
      const response = await axios.get("http://localhost:8081/profile", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setFailedAuth(true);
      setIsLoading(false);
      console.error(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    login();
  }, []);

  if (failedAuth) {
    return (
      <main className="dashboard-failed">
       <h1 className="dashboard-failed__text">You must logged in to see this page.</h1>

        <Link to="/" className="dashboard-failed__link">
          Click here to sign up
        </Link>


      </main>
    );
  }

  if (isLoading) {
    return <main className="dashboard-loading">Loading...</main>;
  }

  return (
    <main className="main">
      <div className="dashboard-img-div">
        <img
          className="dashboard-img-div__logo"
          src={dashboardLogo}
          alt="large youchoose logo"
        />
      </div>

      <article className="dashboard-card">
        <h1 className="dashboard-card__welcome">
          Welcome back, {data.first_name}!
        </h1>
        <button className="dashboard-card__btn" onClick={logout}>
          Log out
        </button>
      </article>

      <article className="dashboard-info">
        {data ? (
          <>
            <h2 className="dashboard-info__title">How YouChoose Works:</h2>
            <p className="dashboard-info__description">
              Swipe right on films you want to watch, and left on films you
              don't want to watch. If you and another user both swipe right, you
              get a match!
            </p>
          </>
        ) : (
          <p>Please log in</p>
        )}
      </article>

      <article className="dashboard-nav">
        <Link to="/movies" className="dashboard-nav__link">
          Click here to get started
        </Link>
      </article>
    </main>
  );
}
