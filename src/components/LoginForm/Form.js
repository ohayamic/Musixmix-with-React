import React, { Component } from "react";
import SwitchForm from "./SwitchForm";
//import FormNavBar from "../FormNavBar";
class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    usernameEmail: "",
    confirmPassword: "",
    isSignup: true
  };

  handleChange = e => {
    const getValue = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: getValue
    });
  };

  handleSwitchForm = () => {
    const user = this.state;
    this.setState({
      isSignup: !user.isSignup
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <SwitchForm
          handleChange={this.handleChange}
          userInfo={this.state}
          handleSwitchForm={this.handleSwitchForm}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Form;
