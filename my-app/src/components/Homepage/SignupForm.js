import React, { useState } from "react";
import styles from "./SignupForm.module.css";
import validation from "./validation";

import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [Values, setValues] = useState({ check: false });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const handleChange = (e) => {
    setValues({ ...Values, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(Values));
    window.localStorage.setItem("userData", JSON.stringify(Values));
    navigate("/Entertainment");
  };
  return (
    <div className={styles.body}>
      <p className={styles.appName}>Super App</p>
      <p>Create a new Account</p>
      <p>
        Email <span style={{ color: "green" }}>|</span> Google
      </p>
      <form>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="name"
          placeholder="Name"
        ></input>
        {errors.name && (
          <p className="error" style={{ color: "red", fontSize: "0.9rem" }}>
            {errors.name}
          </p>
        )}

        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="username"
          placeholder="UserName"
        ></input>
        {errors.username && (
          <p className="error" style={{ color: "red", fontSize: "0.9rem" }}>
            {errors.username}
          </p>
        )}

        <input
          onChange={(e) => handleChange(e)}
          type="email"
          name="email"
          placeholder="Email"
        ></input>
        {errors.email && (
          <p className="error" style={{ color: "red", fontSize: "0.9rem" }}>
            {errors.email}
          </p>
        )}

        <input
          onChange={(e) => handleChange(e)}
          type="tel"
          name="mobile"
          placeholder="Mobile"
        ></input>
        {errors.mobile && (
          <p className="error" style={{ color: "red", fontSize: "0.9rem" }}>
            {errors.mobile}
          </p>
        )}

        <label>
          <input
            onChange={(e) =>
              setValues({
                ...Values,
                [e.target.name]: e.target.checked,
              })
            }
            type="checkbox"
            name="check"
          />
          Share my registration data with Superapp
        </label>
        <button type="submit" onClick={(e) => handleFormSubmit(e)}>
          SIGN UP
        </button>
      </form>
      <footer className={styles.footer}>
        <p>
          By clicking on Sign up. you agree to Superapp
          <span style={{ color: "green" }}> Terms and Conditions of Use</span>
        </p>
        <p>
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp
          <span style={{ color: "green" }}> Privacy Policy</span>
        </p>
      </footer>
    </div>
  );
};

export default SignUpForm;
