import React from "react";
import FormNavBar from "../FormNavBar";

const Error = props => {
  setTimeout(() => {
    props.history.push("/");
  }, 2000);

  const style = {
    width: "50%",
    margin: "0 auto"
  };
  return (
    <React.Fragment>
      <FormNavBar />
      <div className="row">
        <div className=" col s12 m5">
          <div>Image</div>
        </div>
        <div className=" col s12 m7">
          <div className="container" style={style}>
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
    </React.Fragment>
  );
};
export default Error;
