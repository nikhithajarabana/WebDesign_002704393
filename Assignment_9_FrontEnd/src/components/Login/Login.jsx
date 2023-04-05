import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Login/Login.css";

function Login() {
  const [message, setMessage] = useState("");
  let result = [];

  

  async function validateUsers() {
    var resp = "";
    await getAllUsers(function (response) {
      resp = response;
      console.log(response);
    });

    var element = document.getElementById("loginMessage");
    if (resp.isValid) {
      element.style.color = "green";
      element.style.display = "block";
      element.innerHTML = "Login Successful";
    } else {
      element.style.color = "red";
      element.style.display = "block";
      element.innerHTML = "Login Unsuccessful. Please Enter Valid Details.";
    }
  }

  async function getAllUsers(callback) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var payload = { email: email, password: password };
    const response = await fetch("http://localhost:8000/user/validate", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(payload),
    });
    await callback(await response.json());
  }

  return (
    <div className="p-3 m-0 border-0 bd-example">
      <form className="m-5" id="myForm" action="">
        <h1>Login</h1>
        <div className="mb-3 form-group">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
          />
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
          />
        </div>
        <input
          type="button"
          id="submitbtn"
          value="Submit"
          className="btn btn-primary"
          onClick={validateUsers}
        />
      </form>
      <h1 style={{ display: "none" }} id="loginMessage"></h1>
    </div>
  );
}

export default Login;
