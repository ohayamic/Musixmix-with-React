import React from "react";
//import { StyleRoot } from "radium";
import FormNavBar from "../FormNavBar";
import SignUp from "./SignUp";
import Login from "./Login";
import pic1 from "../../Images/pic1.jpg";
import pic2 from "../../Images/pic2.jpg";
import pic3 from "../../Images/pic3.jpg";
import pic4 from "../../Images/pic4.jpg";

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
  const getImages = [pic1, pic2, pic3, pic4];
  const useImage = getImages[Math.floor(Math.random() * 3)];
  return (
    <div>
      <FormNavBar />
      <div className="row">
        <div className=" col s12 m5">
          <img
            src={useImage}
            alt="Display Custom"
            style={{ width: "95%", height: "95%", margin: "0 auto" }}
          />
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
