import React, { useState } from "react";
import "../accounts.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validation, setValidation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    if (!username || !password || !confirmPassword) {
      setValidation("Please enter username and password");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    const registerData = { username, password, confirmPassword };
    fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    })
      .then((response) => response.json)
      .then((data) => {
        if (data) {
          setTimeout(() => {
            window.location.href = "/login";
          }, 2000);
          setSuccessMessage("account created successfully!!");
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("an error occurred");
      });
  };
  return (
    <div className="account__container">
      <h1>Welcome Back!</h1>
      {validation && <p>{validation}</p>}
      {errorMessage && (
        <p style={{ color: "red", textAlign: "center", fontWeight: "700" }}>
          {errorMessage}
        </p>
      )}
      <form className="account__form" onSubmit={handleRegister}>
        <div className="account__props">
          <label htmlFor="Username">Username</label>
          <input
            type="username"
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
        <div className="account__props">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Register" className="proceed" />
        {successMessage && (
          <p style={{ background: "green", textAlign: "center" }}>
            {successMessage}
          </p>
        )}
        <div
          className="new__account"
          style={{ display: "flex", justifyContent: "flex-end", gap: ".5rem" }}
        >
          Already Have an Account?{" "}
          <Link
            to="/login"
            className="account__link"
            style={{
              textDecoration: "none",
              color: "darkviolet",
              fontWeight: "700",
            }}
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
