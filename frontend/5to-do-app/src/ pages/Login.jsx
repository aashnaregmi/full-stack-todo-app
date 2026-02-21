import React from "react";
import "./Login.css";
import { useForm } from "react-form-hook";
const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <div className=" login-container ">
      <input type="text" placeholder="Enter your email" />
      <input type="password" placeholder="Enter your password" />
      <button>Login</button>

      <p>Forgot password?</p>
      <button>Sign Up</button>
    </div>
  );
};

export default Login;
