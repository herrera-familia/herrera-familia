import React, { useState } from "react";
import { login } from "../redux/actions";
import axios from "axios";
import { connect } from "react-redux";

function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    console.log("submitted");
    props.login({ email, pass });
  };

  return (
    <div className="login-wrapper">
      <h1 className="title">Welcome Back Familia!</h1>
      <form onSubmit={submitHandler} className="login-form">
        <input
          className="login-input"
          // value={email}
          onChange={text => {
            // event.persist();
            console.log("altered email to", text.target.value);
            setEmail(text.target.value);
          }}
          placeholder="Enter email"
        />
        <input
          className="login-input"
          value={pass}
          onChange={text => setPass(text.target.value)}
          placeholder="Enter password"
        />
      </form>
      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
}

const mapDispatchToProps = {
  login: login
};

export default connect(null, mapDispatchToProps)(Login);
