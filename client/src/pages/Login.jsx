import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
      navigate("/");
    } catch (error) {
      setErr(error.response.data);
    }
  };
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="username"
        />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="password"
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account?
          <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
