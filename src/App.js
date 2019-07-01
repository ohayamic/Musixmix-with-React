import React, { Component } from "react";
import Radium, { StyleRoot } from "radium";
import MainPage from "./components/MusicMix/MainPage";
import Track from "./components/MusicMix/Track";
import Form from "./components/LoginForm/Form";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error from "./components/LoginForm/Error";
import { Provider } from "./components/Context";
import "./App.css";

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <Provider>
          <BrowserRouter>
            <div className="App">
              <Switch>
                <Route path="/" component={Form} exact />
                <Route path="/landingPage" component={MainPage} />
                <Route path="/error" component={Error} />
                <Route path="/track/:id" component={Track} />
              </Switch>
            </div>
          </BrowserRouter>
        </Provider>
      </StyleRoot>
    );
  }
}

export default Radium(App);
