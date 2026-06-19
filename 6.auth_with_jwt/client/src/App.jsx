import "./App.css";
import { NavLink } from "react-router";

function App() {
  const cardStyle = {
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    minWidth: "280px",
    maxWidth: "320px",
    textAlign: "center",
    textDecoration: "none",
    color: "#333",
    transition: "all 0.3s ease",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        padding: "2rem",
        flexWrap: "wrap",
      }}
    >
      <NavLink to="/login" style={cardStyle}>
        <h2
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            color: "#4f46e5",
          }}
        >
          Login
        </h2>
        <p
          style={{
            color: "#666",
            lineHeight: "1.6",
          }}
        >
          Already have an account?
          <br />
          Sign in to continue.
        </p>
      </NavLink>

      <NavLink to="/signup" style={cardStyle}>
        <h2
          style={{
            marginTop: "1rem",
            marginBottom: "0.5rem",
            color: "#10b981",
          }}
        >
          Signup
        </h2>
        <p
          style={{
            color: "#666",
            lineHeight: "1.6",
          }}
        >
          New here?
          <br />
          Create your account and get started.
        </p>
      </NavLink>
    </div>
  );
}

export default App;
