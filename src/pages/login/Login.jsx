import React, { useState } from "react";
import "../accounts.css";
import { Link } from "react-router-dom";

const Login = () => {
  // set states for various parameters in the form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // handle login request
  const handleLogin = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      setValidation("Please enter username and password");
    }
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const data = await response.json();
      const token = data.token;
      token
        ? localStorage.setItem("token", token)
        : setErrorMessage("an error occurred");
      setTimeout(() => {
        window.location.href = "/home";
      }, 2000);
      setSuccessMessage(`Authenticated as ${username}`);
    } else if (!response.ok) {
      setErrorMessage("an error occurred");
    } else {
      setErrorMessage("invalid username or password");
    }
  };
  return (
    <div className="account__container">
      <h1>Welcome Back!</h1>
      {errorMessage && <p>{errorMessage}</p>}
      {validation && <p>{validation}</p>}
      <form className="account__form" onSubmit={handleLogin}>
        <div className="account__props">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="account__props">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Sign In" className="proceed" />
        {successMessage && <p>{successMessage}</p>}
        <p style={{ display: "flex", justifyContent: "end" }}>
          Forgot Password?
        </p>
        <div
          className="new__account"
          style={{ display: "flex", justifyContent: "flex-end", gap: ".5rem" }}
        >
          Not a Member?{" "}
          <Link
            to="/register"
            className="account__link"
            style={{
              textDecoration: "none",
              color: "darkviolet",
              fontWeight: "700",
            }}
          >
            Create New Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
