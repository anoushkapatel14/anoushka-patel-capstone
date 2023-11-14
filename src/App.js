import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/pages/HomePage/HomePage";
// import UploadPage from "./components/pages/UploadPage/UploadPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" />} />
          {/* <Route path="/videos/:videoId" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} /> */}
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}
