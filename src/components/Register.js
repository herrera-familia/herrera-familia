import React, { useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import * as pic from "../assets/images/familia.jpg";

const submitHandler = (fname, lname, email, pass) => {
  console.log(fname);
  const newUser = {
    firstName: fname,
    lastName: lname,
    email: email,
    password: pass
  };
  console.log("submitted", newUser);
  axios
    .post("http://localhost:8000/register", newUser)
    .then(res => {
      console.log(res.data);
      console.log("user added");
      this.props.setLogin(true);
    })
    .catch(err => console.error(err));
};

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50%"
    }
  }
}));

export default function Register() {
  const classes = useStyles();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="register-form">
      <Typography align="center" className="title" variant="h1">
        Welcome Herrera Familia!
      </Typography>
      <img src={pic} alt="family pic" height="200px" width="200px" />
      <form
        className={classes.root}
        onSubmit={e => {
          e.preventDefault();
          submitHandler(fname, lname, email, pass);
        }}
      >
        <Typography color="textPrimary" align="center" variant="h4">
          {" "}
          Register Below
        </Typography>
        <TextField
          type="text"
          value={fname}
          placeholder="Enter First Name"
          onChange={e => setFname(e.target.value)}
          required={true}
          fullWidth={true}
        />
        <TextField
          type="text"
          value={lname}
          placeholder="Enter Last Name"
          onChange={e => setLname(e.target.value)}
          required
        />
        <TextField
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <TextField
          type="password"
          value={pass}
          placeholder="Enter password"
          onChange={e => setPass(e.target.value)}
          required
        />
        <Button
          type="submit"
          onClick={e => {
            e.preventDefault();
            submitHandler(fname, lname, email, pass);
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
