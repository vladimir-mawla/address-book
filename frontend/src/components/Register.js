import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  function signup() {
    const signup_name = document.getElementById("signup_name");
    const signup_email = document.getElementById("signup_email");
    const signup_password = document.getElementById("signup_password");
    const signup_password_confirmation = document.getElementById("signup_password_confirmation");
    axios.post("http://127.0.0.1:8000/api/v1/auth/register", {
        name: signup_name.value,
        email: signup_email.value,
        password: signup_password.value,
        password_confirmation: signup_password_confirmation.value,
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
          signup_password_confirmation.value = "";
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
        <input
          type="password"
          placeholder="Confirm password"
          id="signup_password_confirmation"
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