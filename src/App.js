import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import MatchesPage from "./pages/MatchesPage/MatchesPage";
import FooterNav from "./components/FooterNav/FooterNav";



export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="matches" element={<MatchesPage />} />
        </Routes>
      </div>
      <FooterNav />
      
    </BrowserRouter>
  );
}
