import React from "react";
import { Link } from "react-router-dom";

const SignUp = props => {
  const style = {
    divStyle: {
      margin: "0 auto",
      width: "35%"
    },
    input: {
      borderColor: "green"
    }
  };

  /*let inputError = null;

  if (
    userInfo.firstname.length <= 5 ||
    userInfo.lastname.length <= 5 ||
    userInfo.username.length <= 5 ||
    userInfo.password.length <= 5
  ) {
    style.input.borderColor = "red";
    inputError = { ...inputError };
    inputError = (
      <small style={{ color: "red" }}> Please enter required information</small>
    );
  }*/
  const { handleChange, handleSwitchForm, handleSubmit, userInfo } = props;
  console.log(props);
  return (
    <div className="row" style={style.divStyle}>
      <form className="col s12" onSubmit={handleSubmit}>
        {userInfo.firstname.length <= 5 ? (
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                placeholder="First Name"
                name="firstname"
                style={{ borderColor: "red" }}
                value={userInfo.firstname}
                onChange={handleChange}
                className="validate"
              />
              <small style={{ color: "red" }}>
                {" "}
                Firstname must be greater than five characters
              </small>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                placeholder="First Name"
                name="firstname"
                style={style.input}
                value={userInfo.firstname}
                onChange={handleChange}
                className="validate"
              />
            </div>
          </div>
        )}
        {userInfo.lastname.length <= 5 ? (
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                placeholder="Last Name"
                style={{ borderColor: "red" }}
                name="lastname"
                value={userInfo.lastname}
                onChange={handleChange}
                className="validate"
              />
              <small style={{ color: "red" }}>
                {" "}
                Lastname must be greater than five characters
              </small>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                placeholder="Last Name"
                style={style.input}
                name="lastname"
                value={userInfo.lastname}
                onChange={handleChange}
                className="validate"
              />
            </div>
          </div>
        )}

        {userInfo.username.length <= 7 ? (
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                placeholder="User Name"
                style={{ borderColor: "red" }}
                name="username"
                value={userInfo.username}
                onChange={handleChange}
                className="validate"
              />
              <small style={{ color: "red" }}>
                {" "}
                Username must be greater than seven characters
              </small>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                placeholder="User Name"
                style={style.input}
                name="username"
                value={userInfo.username}
                onChange={handleChange}
                className="validate"
              />
            </div>
          </div>
        )}

        {userInfo.email.length <= 10 ? (
          <div className="row">
            <div className="input-field col s12">
              <input
                type="email"
                placeholder="Email"
                style={{ borderColor: "red" }}
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                className="validate"
              />
              <small style={{ color: "red" }}> Email address goes here</small>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="input-field col s12">
              <input
                type="email"
                placeholder="Email"
                style={{ borderColor: "green" }}
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                className="validate"
              />
            </div>
          </div>
        )}
        {userInfo.password.length <= 5 ? (
          <div className="row">
            <div className="input-field col s12">
              <input
                type="password"
                placeholder="Password"
                style={{ borderColor: "red" }}
                name="password"
                value={userInfo.password}
                onChange={handleChange}
                className="validate"
              />
              <small style={{ color: "red" }}>
                {" "}
                Password must be more than five characters
              </small>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="input-field col s12">
              <input
                type="password"
                placeholder="Password"
                style={style.input}
                name="password"
                value={userInfo.password}
                onChange={handleChange}
                className="validate"
              />
            </div>
          </div>
        )}

        <br />

        {userInfo.email === "" ||
        userInfo.firstname === "" ||
        userInfo.username === "" ||
        userInfo.lastname === "" ||
        userInfo.password === "" ? (
          <Link to="/error">
            <button className="btn btn-dark">Sign Up</button>
          </Link>
        ) : (
          <button className="btn btn-dark" onClick={handleSwitchForm}>
            Sign Up
          </button>
        )}

        <small className="m-2">Already Registered!</small>

        <button className="btn btn-dark" onClick={handleSwitchForm}>
          {" "}
          Login
        </button>
      </form>
    </div>
  );
};

export default SignUp;
