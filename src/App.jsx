import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/styles/main.css";

import Navbor from "./components/Navbor";
import Footer from "./components/Footer";
import ScrollToTop from "./assets/utils/scrollToTop";

import Home from "./pages/Home"; // eslint-disable-next-line
import Projects from "./pages/Projects"; // eslint-disable-next-line
import Project from "./pages/Project"; // eslint-disable-next-line
import Contacts from "./pages/Contacts"; // eslint-disable-next-line

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/contacte" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
