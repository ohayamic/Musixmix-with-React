import React from "react";
//import { StyleRoot } from "radium";
import FormNavBar from "../FormNavBar";
import SignUp from "./SignUp";
import Login from "./Login";

const SwitchForm = ({
  handleChange,
  handleSwitchForm,
  handleSubmit,
  userInfo
}) => {
  const style = {
    color: "white",
    fontSize: "20px",
    textDecoration: "none"
    /*":hover": {
      backgroundColor: "lightgreen"
    }*/
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <FormNavBar />
      <div>
        <p
          className="waves-effect btn-dark btn-large"
          style={style}
          onClick={handleSwitchForm}
        >
          Sign Up
        </p>{" "}
        <p
          className="waves-effect btn-dark btn-large"
          style={style}
          onClick={handleSwitchForm}
        >
          Login
        </p>
      </div>
      {userInfo.isSignup ? (
        <SignUp
          handleChange={handleChange}
          userInfo={userInfo}
          handleSwitchForm={handleSwitchForm}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Login
          handleChange={handleChange}
          userInfo={userInfo}
          handleSwitchForm={handleSwitchForm}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
export default SwitchForm;
