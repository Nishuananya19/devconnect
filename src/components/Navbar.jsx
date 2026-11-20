
import { useState } from "react";
import {
  Code2, Menu, X, Sun, Moon
} from "lucide-react";

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <Code2 size={28} />
        DevConnect
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Switch color theme"
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>

        <a
          href="#projects"
          className="nav-button"
          onClick={() => setMenuOpen(false)}
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
