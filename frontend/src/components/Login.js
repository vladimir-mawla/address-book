import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  function login() {
    const login_email = document.getElementById("login_email");
    const login_password = document.getElementById("login_password");
    console.log(login_email.value);
    axios
      .post("http://localhost:3000/login", {
        headers:{
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Request-Headers": 'Content-Type, Authorization'
        },
        email: login_email.value,
        password: login_password.value,
      })
      .then((res) => {
        if (res.data["user"]) {
            localStorage.setItem("user_id", res.data["user"]["_id"]);
            navigate("/userpage")
        } else {
          alert("User not Found");
          login_email.value = "";
          login_password.value = "";
        }
      });
  }

  return (
    <center>
      <div className="form">
        <input type="email" placeholder="email" id="login_email" />
        <input
          type="password"
          placeholder="password"
          id="login_password"
          autoComplete="on"
        />
        <Button
          text={"Login"}
          className={"login-btn"}
          onClick={() => {
            login();
          }}
        />
        <p className="goto-link">
          <Link to={"/register"}>Create Account</Link>
        </p>
      </div>
    </center>
  );
};
export default Login;
