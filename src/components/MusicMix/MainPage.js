import React from "react";
import { ContextConsumer } from "../Context";
const MainPage = props => {
  return (
    <ContextConsumer>
      {value => {
        return (
          <div className="container">
            <h1>
              Top Ten Music List
              {/* add logic to add default if loaded else load selected page */}{" "}
            </h1>
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-left">
                      <i className="fas fa-user mr-3" />
                      Card title{/*Enter artist name here */}
                    </h5>
                    <p className="card-text text-left">
                      <i className="fas fa-compact-disc mr-3" />
                      With supporting text below as a natural lead-in to
                      additional content.{/*Enter Track name here */}
                    </p>
                    <p className="card-text text-left">
                      <i className="fas fa-play mr-3" />
                      With supporting text below as a natural lead-in to
                      additional content.{/*Enter other information here */}
                    </p>
                    <a href="/track" className="btn btn-dark btn-block">
                      <i className="fas fa-chevron-right mr-3" />
                      View Track Lyrics
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ContextConsumer>
  );
};
export default MainPage;
