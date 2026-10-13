import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Signup.css";
const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const passwordValid = watch("signupPassword");

  const fields = [
    {
      name: "firstName",
      placeholder: "First name",
      rules: {
        required: "First name is required",
        maxLength: { value: 15, message: "Cannot exceed 15 characters" },
      },
    },
    {
      name: "lastName",
      placeholder: "Last name",
      rules: {
        required: "Last name is required",
        maxLength: { value: 15, message: "Cannot exceed 15 characters" },
      },
    },
    {
      name: "signupEmail",
      placeholder: "Email",
      rules: {
        required: "Email is required",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Email must be valid",
        },
      },
    },
    {
      name: "signupPassword",
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
    {
      name: "confirmPassword",
      placeholder: "Confirm Password",
      type: "password",
      rules: {
        required: "Please confirm your password",
        validate: (value) => {
          return value === passwordValid || "Password do not match";
        },
      },
    },
  ];

  const submitSignup = () => {
    alert("Form submitted");
    navigate("/login");
  };

  const firstError = fields.find((field) => errors[field.name]);

  return (
    <div>
      <div className=" signUpDiv">
        <form
          action=""
          className="Form signupForm"
          onSubmit={handleSubmit(submitSignup)}
        >
          <div className="signupContent">
            <h2>Create a new account</h2>
            <h5>It’s quick and easy.</h5>
          </div>
          {fields.map((field) => (
            <div className="inputWrapper" key={field.name}>
              <input
                type={field.type || "text"}
                placeholder={field.placeholder}
                {...register(field.name, field.rules)}
              />
              {firstError?.name === field.name && (
                <p className="error-message-signup">
                  {errors[field.name]?.message}
                </p>
              )}
            </div>
          ))}

          <button className="signupBtn btn hoverbtn ">Create account</button>
          <p className="loginDirect">
            Have an accout?
            <NavLink to="/login" className="loginlink">
              Login
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
