import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import "./App.css";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Resume", to: "/resume" },
];

export default function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <main className="frame">
          <section className="profile-card">
            <div className="photo-frame">
              <img src="/headshot.jpg" alt="Headshot" />
            </div>
            <h1 className="name">Marcela Moura</h1>
            <p className="role">Data Scientist</p>
            <button className="primary">Email Me</button>
          </section>

          <section className="about">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>

            <div className="nav-buttons">
              {navItems.map((item) => (
                <NavLink key={item.label} className="ghost" to={item.to}>
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="socials">
              <a href="#" aria-label="GitHub">
                GH
              </a>
              <a href="#" aria-label="LinkedIn">
                IN
              </a>
            </div>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}
