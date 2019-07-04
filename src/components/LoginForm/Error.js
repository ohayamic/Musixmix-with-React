import React from "react";
import FormNavBar from "../FormNavBar";
import pic1 from "../../Images/pic1.jpg";
import pic2 from "../../Images/pic2.jpg";
import pic3 from "../../Images/pic3.jpg";
import pic4 from "../../Images/pic4.jpg";

const Error = props => {
  setTimeout(() => {
    props.history.push("/");
  }, 2000);

  const style = {
    container: {
      width: "80%",
      margin: "0 auto"
    },
    img: {
      width: "95%",
      height: "95%",
      margin: "0 auto"
    }
  };
  const getImages = [pic1, pic2, pic3, pic4];
  const useImage = getImages[Math.floor(Math.random() * 4)];
  return (
    <div>
      <FormNavBar />
      <div className="row">
        <div className=" col s12 m5">
          <img src={useImage} alt="Display Custom" style={style.img} />
        </div>
        <div className=" col s12 m7">
          <div className="container" style={style.container}>
            <div className="row">
              <div className="col s6 m6">
                <div className="card red darken-1">
                  <div className="card-content white-text">
                    <p>
                      Please fill out the register form correctly, according to
                      the specification described in the fields.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Error;
