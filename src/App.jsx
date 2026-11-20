
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/global.css";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "dark" ? "light" : "dark"
    );
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Features />
        <Projects />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
