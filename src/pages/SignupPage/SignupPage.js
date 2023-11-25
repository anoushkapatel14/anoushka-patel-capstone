import "./SignupPage.scss";
import Input from "../../components/Input/Input";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/images/dashboardLogo.png";

export default function Signup() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8081/auth/register", {
        first_name: event.target.first_name.value,
        last_name: event.target.last_name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      });

      setSuccess(true);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error(error);
      setError(error.response.data);
    }
  };

  return (
    <main className="signup-page">
      <section className="signup-page__top">
        <div className="dashboard-img-div">
          <img
            className="dashboard-img-div__logo"
            src={logo}
            alt="large youchoose logo"
          />
        </div>

        <article className="signup-text">
          <h2 className="signup-text__title">How YouChoose Works:</h2>
          <p className="signup-text__description">
            Swipe right on films you want to watch, and left on films you don't
            want to watch. If you and another user both swipe right, you get a
            match!
          </p>

          <p className="signup-text__signup">Sign up to get started!</p>
        </article>
      </section>

      <section className="signup-page__form">
        <form className="signup" onSubmit={handleSubmit}>
          <h1 className="signup__title">Sign up</h1>

          <Input type="text" name="first_name" label="First name" />
          <Input type="text" name="last_name" label="Last name" />
          <Input type="text" name="email" label="Email" />
          <Input type="password" name="password" label="Password" />

          <button className="signup__button">Sign up</button>

          {error && <div className="signup__message">{error}</div>}
          {success && (
            <div className="signup__message">
              Sign up successful, please log in
            </div>
          )}
        </form>

        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </section>
    </main>
  );
}
