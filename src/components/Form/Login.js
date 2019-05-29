import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../Context";
import TextField from "@material-ui/core/TextField";

const divStyle = {
  width: "60%",
  margin: "0 auto"
};
class Login extends React.Component {
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { userInfo, state } = value;
          console.log(state);
          return (
            <div className="container" style={divStyle}>
              <form noValidate autoComplete="off">
                <div className="col-12 mb-3">
                  <TextField
                    id="standard-name"
                    label="Username/Email"
                    defaultValue={userInfo.password}
                    onChange={this.handleChange("username")}
                    margin="normal"
                  />
                </div>
                <div className="col-12 mb-3">
                  <TextField
                    id="standard-name"
                    label="Password"
                    type="password"
                    defaultValue={userInfo.confirmPassword}
                    onChange={this.handleChange("confirmPassword")}
                    margin="normal"
                  />
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
      </Consumer>
    );
  }
}

export default Login;
