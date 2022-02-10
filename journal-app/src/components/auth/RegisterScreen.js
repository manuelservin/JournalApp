import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
const RegisterScreen = () => {
  const [form, handleInputChange, reset] = useForm({
    email: "manu@gmail.com",
    name: "manuel",
    password: "123456",
    password2: "123456",
  });
  const { name, email, password, password2 } = form;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log("form correcto");
    }
    console.log(form);
  };
  const isFormValid = () => {
    if (name.trim().length === 0) {
      return false;
    } else if (!validator.isEmail(email)) {
      console.log("no es email");
      return false;
    } else if (password !== password2 || password.length < 5) {
      console.log("password should be al least 6 characteres and match");
      return false;
    }

    return true;
  };
  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form onSubmit={handleRegister}>
        <div className="auth__alert-error">hola mundo</div>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
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
