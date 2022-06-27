import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  function signup() {
    const signup_name = document.getElementById("signup_name");
    const signup_email = document.getElementById("signup_email");
    const signup_password = document.getElementById("signup_password");
    axios.post("http://localhost:3000/register", {
        fullName: signup_name.value,
        email: signup_email.value,
        password: signup_password.value,
    })
      .then((res) => {
        if (res.data["fullName"]) {
            localStorage.getItem("user_id", res.data["_id"]);
            navigate("/page");
        } else if(res.data === "Fill All Fields") {
          alert("Fields cannot be empty");
          signup_password.value = "";
        }else if(res.data === "Too Short") {
          alert("Password Too Short");
          signup_password.value = "";
        }
      });
  }

  return (
    <center>
      <Navbar />
      <div className="form">
        <input type="text" placeholder="Name" id="signup_name" />
        <input type="email" placeholder="Email" id="signup_email" />
        <input
          type="password"
          placeholder="Password"
          id="signup_password"
          autoComplete="on"
        />
  
        <Button
          text={"Signup"}
          className={"login-btn"}
          onClick={() => {
            signup();
          }}
        />
        <p className="goto-link">
          <Link to={"/login"}>Have an Account?</Link>
        </p>
      </div>
    </center>
  );
};
export default Signup;