import React from "react";
import { Link } from "react-router-dom";
const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          className="auth__input"
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>
        <Link className="link mt-5" to="/auth/login">
          Already have an account? Sign in
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
