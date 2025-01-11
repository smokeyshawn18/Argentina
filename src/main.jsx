import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Team from "./components/Team.jsx";
import Fixture from "./components/Fixture.jsx";
import History from "./components/History.jsx";
import Results from "./components/Result.jsx";
import Footer from "./components/Footer.jsx";

import National from "./components/National.jsx";

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/schedule" element={<Fixture />} />
        <Route path="/results" element={<Results />} />
        <Route path="/History" element={<History />} />
        <Route path="/national" element={<National />} />
      </Routes>
      <Footer />

   
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
