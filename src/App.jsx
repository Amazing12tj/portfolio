import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <Router>
      {/* Theme toggle for light/dark mode and color themes */}
      <ThemeToggle />

      {/* Navbar visible on all routes */}
      <Navbar />

      <Routes>
        {/* Home route (default page) */}
        <Route path="/" element={<Home />} />

        {/* Other visible pages */}
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* Fallback route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
