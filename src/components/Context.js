/*  */

import React from "react";

// get the createContext API
const ContentProvider = React.createContext();

export class Provider extends React.Component {
  state = {
    userInfo: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      firstnameError: "",
      lastnameError: "",
      usernameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: ""
    },
    track_list: [],
    isLoaded: false
  };

  componentDidMount() {
    fetch(`https://api.musixmatch.com/ws/1.1/`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          track_list: data
        });
      });
  }

  //handle field change (get the field and set it's value to the input)
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    return (
      // use as a wrapper to wrap states and functions
      <ContentProvider.Provider
        value={{
          userInfo: this.state.userInfo,
          track_list: this.state.track_list,
          isLoaded: this.state.isLoaded,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </ContentProvider.Provider>
    );
  }
}

// export context so other component can use it
export const ContextConsumer = ContentProvider.Consumer;
