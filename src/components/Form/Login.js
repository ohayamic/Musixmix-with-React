import React from "react";
import { Link } from "react-router-dom";
import { ContextConsumer } from "../Context";
//import TextField from "material-ui";

const divStyle = {
  width: "50%",
  margin: "0 auto"
};
class Login extends React.Component {
  render() {
    return (
      <ContextConsumer>
        {value => {
          const { handleChange } = this.handleChange;
          return (
            <div className="container" style={divStyle}>
              <form>
                <div className="form-row">
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      onChange={handleChange("username")}
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </form>
              <br />
              <Link to="/landingPage">
                <p className="btn btn-dark"> Login</p>
              </Link>
              <small className="mr-2 ml-2">Already Registered!</small>
              <Link to="/">
                <p className="btn btn-dark">Sign Up</p>
              </Link>
            </div>
          );
        }}
      </ContextConsumer>
    );
  }
}

export default Login;
