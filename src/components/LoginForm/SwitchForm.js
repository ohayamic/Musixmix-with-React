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
    <div>
      <FormNavBar />
      <div className="row">
        <div className=" col s12 m5">
          <div>Image</div>
        </div>
        <div className="col s12 m7 ">
          <div style={{ marginBottom: "30px" }}>
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
        </div>
      </div>
    </div>
  );
};
export default SwitchForm;
