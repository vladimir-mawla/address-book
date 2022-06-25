import React from "react";
import ReactDOM from "react-dom";
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
        if (res.data) {
            localStorage.getItem("user_id", res.data["_id"]);
            navigate("/userpage");
        } else {
          alert("User not Found");
          signup_name.value = "";
          signup_email.value = "";
          signup_password.value = "";
        }
      });
  }

  return (
    <center>
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