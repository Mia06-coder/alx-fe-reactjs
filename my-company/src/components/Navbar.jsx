// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#012e40",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      {/* Company Logo / Brand */}
      <div style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
        MyCompany
      </div>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "500",
          }}
          onMouseOver={(e) => (e.target.style.color = "#00bcd4")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "500",
          }}
          onMouseOver={(e) => (e.target.style.color = "#00bcd4")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          About
        </Link>
        <Link
          to="/services"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "500",
          }}
          onMouseOver={(e) => (e.target.style.color = "#00bcd4")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          Services
        </Link>
        <Link
          to="/contact"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "500",
          }}
          onMouseOver={(e) => (e.target.style.color = "#00bcd4")}
          onMouseOut={(e) => (e.target.style.color = "white")}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
