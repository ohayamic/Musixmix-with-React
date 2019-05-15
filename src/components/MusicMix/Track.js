import React, { Component } from "react";
import { ContextConsumer } from "../Context";
///import NavBar from "./NavBar";
const cardStyle = {
  width: "50%",
  margin: "0 auto"
};
class Track extends Component {
  render() {
    /* {
      value => ({
        return(

        )
      })
    }*/
    return (
      <ContextConsumer>
        {value => {
          return (
            <div className="container">
              <h1>
                Selected Track Name
                {/* here I will put the title of the selected music */}{" "}
              </h1>

              <div className="col">
                <div className="card " style={cardStyle}>
                  <div className="card-body">
                    <h5 className="card-title text-left">Card title</h5>
                    <p className="card-text text-left">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="/track" className="btn btn-dark btn-block">
                      <i className="fas fa-chevron-right mr-3" />
                      View Full Lyrics
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ContextConsumer>
    );
  }
}

export default Track;
