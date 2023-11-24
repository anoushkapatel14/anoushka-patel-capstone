import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import MatchesPage from "./pages/MatchesPage/MatchesPage";
import FooterNav from "./components/FooterNav/FooterNav";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import Login from "./pages/LoginPage/LoginPage";
import Signup from "./pages/SignupPage/SignupPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="profile" element={<DashboardPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="matches" element={<MatchesPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </div>
      <FooterNav />
    </BrowserRouter>
  );
}
