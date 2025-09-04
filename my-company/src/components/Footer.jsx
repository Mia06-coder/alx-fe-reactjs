// src/components/Footer.jsx
function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#012e40",
        color: "white",
        textAlign: "center",
        padding: "20px",
        marginTop: "40px",
        borderTop: "2px solid #034f67",
        boxShadow: "0 -2px 6px rgba(0,0,0,0.2)",
      }}
    >
      {/* Quick Links Section */}
      <div style={{ marginBottom: "10px" }}>
        <a
          href="/"
          style={{ color: "#b0e0e6", margin: "0 10px", textDecoration: "none" }}
        >
          Home
        </a>
        <a
          href="/about"
          style={{ color: "#b0e0e6", margin: "0 10px", textDecoration: "none" }}
        >
          About
        </a>
        <a
          href="/services"
          style={{ color: "#b0e0e6", margin: "0 10px", textDecoration: "none" }}
        >
          Services
        </a>
        <a
          href="/contact"
          style={{ color: "#b0e0e6", margin: "0 10px", textDecoration: "none" }}
        >
          Contact
        </a>
      </div>

      {/* Copyright */}
      <p style={{ fontSize: "14px", color: "#ddd" }}>
        © 2025 My Company. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
