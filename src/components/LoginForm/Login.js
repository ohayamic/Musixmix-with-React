import React from "react";
import { Link } from "react-router-dom";

const Login = ({ handleChange, handleSwitchForm, handleSubmit, userInfo }) => {
  // console.log(props);
  const divStyle = {
    width: "35%",
    margin: "0 auto"
  };
  return (
    <div className="row" style={divStyle}>
      <form className="col s12" onSubmit={handleSubmit}>
        {userInfo.usernameEmail !== userInfo.email ? (
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                placeholder="Username/Email"
                name="usernameEmail"
                style={{ borderColor: "red" }}
                value={userInfo.usernameEmail}
                onChange={handleChange}
                className="validate"
              />
              <small style={{ color: "red" }}>
                {" "}
                Username or Email must match Sign Up information
              </small>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                placeholder="Username/Email"
                name="usernameEmail"
                style={{ borderColor: "green" }}
                value={userInfo.usernameEmail}
                onChange={handleChange}
                className="validate"
              />
            </div>
          </div>
        )}
        {userInfo.confirmPassword !== userInfo.password ? (
          <div className="row">
            <div className="input-field col 12">
              <input
                id="password"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                style={{ borderColor: "red" }}
                value={userInfo.confirmPassword}
                onChange={handleChange}
                className="validate"
              />
              <small style={{ color: "red" }}>Password must match</small>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="input-field col 12">
              <input
                id="password"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                style={{ borderColor: "green" }}
                value={userInfo.confirmPassword}
                onChange={handleChange}
                className="validate"
              />
            </div>
          </div>
        )}

        <br />
        {userInfo.email === "" ||
        userInfo.email !== userInfo.usernameEmail ||
        userInfo.confirmPassword === "" ||
        userInfo.password !== userInfo.confirmPassword ? (
          <Link to="/error">
            <button type="submit" className="btn btn-dark">
              Login
            </button>
          </Link>
        ) : (
          <Link to="landingPage">
            <button type="submit" className="btn btn-dark">
              Login
            </button>
          </Link>
        )}
        <small className="mr-2 ml-2">Already Registered!</small>

        <button className="btn btn-dark" onClick={handleSwitchForm}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
