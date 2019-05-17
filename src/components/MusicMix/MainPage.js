import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../Context";
import Spinner from "./spinner";
class MainPage extends React.Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { isloaded, track_lists } = value;
          console.log(track_lists);
          if (
            isloaded === false ||
            track_lists === undefined ||
            track_lists.length === 0
          ) {
            return <Spinner />;
          } else {
            return (
              <div className="container">
                <h1>
                  Top Ten Music List
                  {/* add logic to add default if loaded else load selected page */}{" "}
                </h1>
                <div className="row">
                  {track_lists.map(track_list => (
                    <div
                      className="col col-md-6"
                      key={track_list.track.track_id}
                    >
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title text-left">
                            <i className="fas fa-user mr-3" />
                            {track_list.track.artist_name}
                            {/*Enter artist name here */}
                            <small className="ml-4 font-italic font-weight-light">
                              <span>(artist name)</span>
                            </small>
                          </h5>
                          <p className="card-text text-left">
                            <i className="fas fa-compact-disc mr-3" />
                            {track_list.track.track_name}
                            {/*Enter Track name here */}
                            <small className="ml-4 font-italic">
                              <span>(track name)</span>
                            </small>
                          </p>

                          <p className="card-text text-left">
                            <i className="fas fa-star mr-3" />
                            {track_list.track.track_rating}
                            {/*Enter other information here */}
                          </p>
                          <Link
                            to={`/track/${track_list.track.commontrack_id}`}
                            className="btn btn-dark btn-block"
                          >
                            <i className="fas fa-chevron-right mr-3" />
                            View Track Lyrics
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}
export default MainPage;
