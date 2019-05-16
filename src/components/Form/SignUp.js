import React from "react";
import { Consumer } from "../Context";
import { Link } from "react-router-dom";
const divStyle = {
  margin: "0 auto",
  width: "35%"
};
class SignUp extends React.Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { userInfo } = value.userInfo;
          //const { handleChange } = value.handleChange;
          console.log(userInfo);
          return (
            <div className="container" style={divStyle}>
              <form>
                <div className="form-row">
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter FirstName"
                    />
                  </div>
                  <br />
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter LastName"
                    />
                  </div>
                  <br />
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Username"
                    />
                  </div>
                  <br />
                  <div className="col-12 mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                    />
                  </div>
                  <br />
                </div>
              </form>
              <br />
              <Link to="/login">
                <p className="btn btn-dark">Sign Up</p>
              </Link>
              <small className="m-2">Already Registered!</small>
              <Link to="/login">
                <p className="btn btn-dark"> Login</p>
              </Link>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
/*const divStyle = {
  margin: "0 auto",
  width: "35%"
};*/

export default SignUp;
