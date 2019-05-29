/*  */

import React from "react";

// get the createContext API
const Content = React.createContext();
const apikey = "19cda0d160323934029a9061d179ee16";

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
    track_lists: [],
    isLoaded: false
  };

  componentDidMount() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${apikey}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          track_lists: data.message.body.track_list
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      // use as a wrapper to wrap states and functions
      <Content.Provider
        value={{
          state: this.state,
          userInfo: this.state.userInfo,
          track_lists: this.state.track_lists,
          isLoaded: this.state.isLoaded
        }}
      >
        {this.props.children}
      </Content.Provider>
    );
  }
}

// export context so other component can use it
export const Consumer = Content.Consumer;
