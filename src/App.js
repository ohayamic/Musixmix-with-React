import React, { Component } from "react";
import MainPage from "./components/MusicMix/MainPage";
import Track from "./components/MusicMix/Track";
import SignUp from "./components/Form/SignUp";
import Login from "./components/Form/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Provider } from "./components/Context";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <div className="App">
            <NavBar />
            <Switch>
              <Route path="/" component={SignUp} exact />
              <Route path="/login" component={Login} />
              <Route path="/landingPage" component={MainPage} />
              <Route path="/track/:id" component={Track} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
