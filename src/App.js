import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import MatchesPage from "./pages/MatchesPage/MatchesPage";
import FooterNav from "./components/FooterNav/FooterNav";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import Login from "./pages/LoginPage/LoginPage";
import Signup from "./pages/SignupPage/SignupPage";
import { useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

export default function App() {
  const [name, setName] = useState(null);
  const [data, setData] = useState(null);

  return (
    <BrowserRouter>
      <Header name={name} data={data} setData={setData} />
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<DashboardPage data={data} setData={setData} />} />
          <Route path="/movies" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="matches" element={<MatchesPage />} />
          <Route path="login" element={<Login setName={setName} />} />
          <Route path="/" element={<Signup />} />
        </Routes>
      </div>
      <FooterNav />
    </BrowserRouter>
  );
}
