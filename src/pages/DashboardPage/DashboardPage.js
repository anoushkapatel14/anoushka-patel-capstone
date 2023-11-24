import "./DashboardPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [failedAuth, setFailedAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("token");
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
    } catch (error) {
      setFailedAuth(true);
      console.error(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    login();
  }, []);

  if (failedAuth) {
    return <main className="dashboard">You must log in to see this page.</main>;
  }

  if (isLoading) {
    return <main className="dashboard">Loading...</main>;
  }

  return (
    <main className="dashboard">
      <h1>My Profile</h1>
      <p>Welcome back, {data.first_name}</p>



      <button onClick={logout}>Log out</button>
    </main>
  );
}


