import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const handlecreateaccout = (event) => {
    event.preventDefault();
    navigate("/signup");
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitData = (data) => {
    console.log(data);
    alert("Form submitted");
  };

  watch();
  const fields = [
    {
      name: "loginEmail",
      placeholder: "Email or phone number",
      rules: {
        required: "Email is required",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Please enter a valid email address",
        },
      },
    },
    {
      name: "password",
      placeholder: "Password",
      type: "password",
      rules: {
        required: "Password is required",
        pattern: {
          value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          message:
            "Password must be at least 8 characters and contain a letter and a number",
        },
      },
    },
  ];

  const firstErrorField = fields.find((field) => errors[field.name]);

  return (
    <div className="formDiv">
      <form action="" className="Form" onSubmit={handleSubmit(submitData)}>
        {fields.map((field) => (
          <div key={field.name} className="login-inputWrapper">
            <input
              type={field.type || "text"}
              placeholder={field.placeholder}
              {...register(field.name, field.rules)}
              className={
                firstErrorField?.name === field.name ? "inputError" : ""
              }
            />
            {firstErrorField?.name === field.name && (
              <p className="error-message">{errors[field.name]?.message}</p>
            )}
          </div>
        ))}

        <button className="login-button btn ">Log In</button>
        <p>Forgot password?</p>

        <div className="divider"></div>

        <button className="signup hoverbtn" onClick={handlecreateaccout}>
          Create new account
        </button>
      </form>
    </div>
  );
};

export default Login;
