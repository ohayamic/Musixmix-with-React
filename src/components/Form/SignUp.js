import React from "react";
import TextField from "@material-ui/core/TextField";
import { Consumer } from "../Context";
import { Link } from "react-router-dom";
const divStyle = {
  margin: "0 auto",
  width: "60%"
};
class SignUp extends React.Component {
  //handle field change (get the field and set it's value to the input)
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    //console.log(e);
    const { firstname, lastname, username, email, password } = this.userInfo;
    const value = { firstname, lastname, username, email, password };
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { userInfo } = value;
          //const { handleChange } = value;

          return (
            <div className="container" style={divStyle}>
              <form noValidate autoComplete="off">
                <div className="col-12 mb-3">
                  <TextField
                    id="standard-name"
                    label="First Name"
                    defaultValue={userInfo.firstname}
                    onChange={this.handleChange("firstname")}
                    margin="normal"
                  />
                </div>

                <div className="col-12 mb-3">
                  <TextField
                    id="standard-name"
                    label="Last Name"
                    defaultValue={userInfo.lastname}
                    onChange={this.handleChange("lastname")}
                    margin="normal"
                  />
                </div>

                <div className="col-12 mb-3">
                  <TextField
                    id="standard-name"
                    label="Username"
                    defaultValue={userInfo.username}
                    onChange={this.handleChange("username")}
                    margin="normal"
                  />
                </div>

                <div className="col-12 mb-3">
                  <TextField
                    id="standard-name"
                    label="Email"
                    defaultValue={userInfo.email}
                    onChange={this.handleChange("email")}
                    margin="normal"
                  />
                </div>

                <div className="col-12 mb-3">
                  <TextField
                    id="standard-name"
                    label="Password"
                    type="password"
                    defaultValue={userInfo.password}
                    onChange={this.handleChange("password")}
                    margin="normal"
                  />
                </div>

                <br />
                <Link to="/login">
                  <button
                    className="btn btn-dark"
                    onSubmit={e => this.onSubmit(e)}
                  >
                    Sign Up
                  </button>
                </Link>
                <small className="m-2">Already Registered!</small>
                <Link to="/login">
                  <button className="btn btn-dark"> Login</button>
                </Link>
              </form>
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
