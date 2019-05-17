import React, { Component } from "react";
import Spinner from "./spinner";

let apikey = "19cda0d160323934029a9061d179ee16";

class Track extends Component {
  state = {
    lyrics: [],
    track: [],
    lyricsIsLoaded: false
  };

  componentDidMount() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=${
        this.props.match.params.id
      }&apikey=${apikey}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          lyricsIsLoaded: true,
          track: data.message.body.track
        });
        return fetch(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?commontrack_id=${
            this.props.match.params.id
          }&apikey=${apikey}`
        )
          .then(res => res.json())
          .then(data => {
            this.setState({
              lyricsIsLoaded: true,
              lyrics: data.message.body.lyrics
            });
          });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { track, lyrics, lyricsIsLoaded } = this.state;
    console.log(track);
    //console.log(lyrics);
    if (
      track === undefined ||
      Object.keys(track) === 0 ||
      lyrics === undefined ||
      lyricsIsLoaded === false
    ) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <div style={{ alignItems: "start" }}>
            <a href="/landingPage" className="btn btn-dark ml-0">
              <i className="fas fa-chevron-left mr-3" />
              Back
            </a>
          </div>

          <div className="container">
            <h1>
              {track.artist_name}
              {/* here I will put the title of the selected music */}
            </h1>

            <div className="col">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-title text-left">{track.track_name}</h5>
                  <p className="card-text text-left">{lyrics.lyrics_body}</p>
                  <a
                    href={track.track_share_url}
                    className="btn btn-dark btn-block"
                  >
                    <i className="fas fa-chevron-right mr-3" />
                    View Full Lyrics
                  </a>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Track;
