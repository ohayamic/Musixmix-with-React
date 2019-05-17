import React from "react";
import TextField from "@material-ui/core/TextField";
import { Consumer } from "../Context";
import { Link } from "react-router-dom";
const divStyle = {
  margin: "0 auto",
  width: "50%"
};
class SignUp extends React.Component {
  /*handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };*/
  render() {
    return (
      <Consumer>
        {value => {
          const { userInfo } = value;
          const { handleChange } = value;
          console.log(userInfo);
          return (
            <div className="container" style={divStyle}>
              <form noValidate autoComplete="off">
                <div className="col-12 mb-3">
                  <TextField
                    id="standard-name"
                    label="First Name"
                    value={userInfo.firstname}
                    onChange={handleChange("firstname")}
                    margin="normal"
                  />
                </div>

                <div className="col-12 mb-3">
                  <TextField
                    id="standard-name"
                    label="Last Name"
                    //value={userInfo.lastname}
                    onChange={handleChange("lastname")}
                    margin="normal"
                  />
                </div>

                <div className="col-12 mb-3">
                  <TextField
                    id="standard-name"
                    label="Username"
                    //value={userInfo.username}
                    onChange={handleChange("username")}
                    margin="normal"
                  />
                </div>

                <div className="col-12 mb-3">
                  <TextField
                    id="standard-name"
                    label="Email"
                    //value={userInfo.email}
                    onChange={handleChange("email")}
                    margin="normal"
                  />
                </div>

                <div className="col-12 mb-3">
                  <TextField
                    id="standard-name"
                    label="Password"
                    type="password"
                    //value={userInfo.password}
                    onChange={handleChange("password")}
                    margin="normal"
                  />
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
