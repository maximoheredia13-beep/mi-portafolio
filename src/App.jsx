import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="container text-center mt-4">

        <h1 className="mb-4">Mi Portafolio</h1>

        <nav className="d-flex justify-content-center gap-4 mb-5">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>

          <Link to="/about" className="btn btn-dark">
            Sobre mí
          </Link>

          <Link to="/projects" className="btn btn-dark">
            Proyectos
          </Link>

          <Link to="/contact" className="btn btn-dark">
            Contacto
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;