import React from "react";
import "../accounts.css";

const Register = () => {
  return (
    <div className="account__container">
      <h1>Welcome Back!</h1>
      <form className="account__form">
        <div className="account__props">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />
        </div>
        <div className="account__props">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <input type="submit" value="Sign In" className="proceed" />
      </form>
    </div>
  );
};

export default Register;
