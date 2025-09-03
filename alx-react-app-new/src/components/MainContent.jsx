import React from "react";

function MainContent() {
  return (
    <main
      style={{
        textAlign: "center",
        marginTop: "40px",
        padding: "20px",
        backgroundColor: "#f0f8ff",
        borderRadius: "12px",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <p
        style={{
          fontSize: "1.2rem",
          fontFamily: "'Lato', sans-serif",
          lineHeight: "1.6",
          color: "#012e40",
        }}
      >
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}

export default MainContent;
