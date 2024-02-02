import React, { useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import "../style/AuthForm.css";

const CreateAccount = () => {
  const provider = new GoogleAuthProvider();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    try {
      signInWithRedirect(auth, provider);
      navigate("/dashboard");
      console.log(auth.currentUser);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, newUser.email, newUser.password);
    navigate("/dashboard");
    console.log(auth.currentUser);
  };

  return (
    <div className="auth">
      <h2>Create an account</h2>
      <form className="auth-form">
        <label className="auth-form_label" htmlFor="create-account_email_input">
          Email
          <input
            className="auth-form_input"
            value={newUser.email}
            type="email"
            name="email"
            id="create-account_email_input"
            onChange={handleChange}
          />
        </label>
        <label
          className="auth-form_label"
          htmlFor="create-account_password_input"
        >
          Password
          <input
            className="auth-form_input"
            value={newUser.password}
            type="password"
            name="password"
            id="create-account_password_input"
            onChange={handleChange}
          />
        </label>
        <button
          className="auth-button"
          type="submit"
          onClick={handleCreateAccount}
        >
          Create account
        </button>
        <div className="auth-button_divider">Or sign in with</div>
        <button
          className="google-button"
          type="button"
          onClick={handleGoogleSignIn}
        >
          Google
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
