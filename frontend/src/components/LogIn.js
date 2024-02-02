import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import "../style/AuthForm.css";

const LogIn = () => {
  const [userLogIn, setUserLogIn] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserLogIn({ ...userLogIn, [e.target.name]: e.target.value });
  };

  const handleLogIn = (e) => {
    e.preventDefault();

    try {
      signInWithEmailAndPassword(auth, userLogIn.email, userLogIn.password);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigate("/dashboard");
          console.log(user);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="auth">
      <h2 className="auth-subheading">Log in</h2>
      <form className="auth-form">
        <label className="auth-form_label" htmlFor="log-in_email_input">
          Email
          <input
            className="auth-form_input"
            value={userLogIn.email}
            type="email"
            name="email"
            id="log-in_email_input"
            onChange={handleChange}
          />
        </label>
        <label className="auth-form_label" htmlFor="log-in_password_input">
          Password
          <input
            className="auth-form_input"
            value={userLogIn.password}
            type="password"
            name="password"
            id="log-in_password_input"
            onChange={handleChange}
          />
        </label>
        <button className="auth-button" type="submit" onClick={handleLogIn}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
