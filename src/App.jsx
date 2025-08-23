import "./colors.css";
import "./typography.css";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import navLogo from "./assets/navLogo.svg";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";

import { Squash as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";

function Nav() {
  const [isOpen, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace("/", "") || "home";
    setActive(path);
  }, [location]);

  return (
    <nav id="nav">
      <div className="logo">
        <Link
          to="/"
          onClick={() => {
            setActive("home");
            setOpen(false);
          }}
        >
          <img src={navLogo} alt="Crownbridge Logo" />
        </Link>
      </div>

      <div className="links">
        <Link
          to="/"
          className={active === "home" ? "active" : ""}
          onClick={() => {
            setActive("home");
          }}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={active === "about" ? "active" : ""}
          onClick={() => {
            setActive("about");
          }}
        >
          About
        </Link>

        <Link
          to="/contact"
          className={active === "contact" ? "active" : ""}
          onClick={() => {
            setActive("contact");
          }}
        >
          Contact
        </Link>

        <Link
          to="/apply"
          className={`no-underline ${active === "apply" ? "active" : ""}`}
          onClick={() => {
            setActive("apply");
          }}
        >
          <button>Apply</button>
        </Link>
      </div>

      <div className="hamburger">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      {isOpen && <div className="overlay" onClick={() => setOpen(false)} />}

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Link
          to="/"
          onClick={() => {
            setOpen(false);
            setActive("home");
          }}
          className={active === "home" ? "active" : ""}
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => {
            setOpen(false);
            setActive("about");
          }}
          className={active === "about" ? "active" : ""}
        >
          About Us
        </Link>
        <Link
          to="/contact"
          onClick={() => {
            setOpen(false);
            setActive("contact");
          }}
          className={active === "contact" ? "active" : ""}
        >
          Contact
        </Link>
        <Link
          to="/apply"
          onClick={() => {
            setOpen(false);
            setActive("apply");
          }}
          className={active === "apply" ? "active" : ""}
        >
          Apply
        </Link>
      </div>
    </nav>
  );
}

import footerLogo from "./assets/footerLogo.svg";
import IconFacebook from "./assets/facebookIcon.svg";
import IconInstagram from "./assets/instagramIcon.svg";
import IconWhatsapp from "./assets/whatsappIcon.svg";
import IconPhone from "./assets/phoneIcon.svg";
function Footer() {
  return (
    <footer id="footer">
      <div className="footerTop">
        <div className="footerLogo">
          <img src={footerLogo} alt="Logo" />
        </div>
        <div className="footerRight">
          <div className="footerNav" aria-label="Footer navigation">
            <hr />
            <div className="footerLinks">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <hr />
          </div>
          <div className="socials" aria-label="Social links">
            <a
              target="_blank"
              href="https://www.facebook.com/crownbridgelondon"
              className="social"
            >
              <img src={IconFacebook} alt="facebook" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/crownbridgelondon"
              className="social"
            >
              <img src={IconInstagram} alt="instagram" />
            </a>
            <a
              target="_blank"
              href="https://www.whatsapp.com"
              className="social"
            >
              <img src={IconWhatsapp} alt="whatsapp" />
            </a>
            <a
              target="_blank"
              href="https://www.example.com"
              className="social"
            >
              <img src={IconPhone} alt="phone" />
            </a>
          </div>
        </div>
      </div>

      <hr className="footerBreak" />
      <div className="poweredBy">
        <p>Powered by New Educational Order</p>
      </div>
    </footer>
  );
}


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
