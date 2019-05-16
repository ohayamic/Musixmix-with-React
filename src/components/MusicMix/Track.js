import React, { Component } from "react";

let apikey = "19cda0d160323934029a9061d179ee16";

class Track extends Component {
  state = {};

  componentDidMount() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=it&f_has_lyrics=1&apikey=${apikey}`
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
      <React.Fragment>
        <div className="container">
          <h1>
            Selected Track Name
            {/* here I will put the title of the selected music */}
          </h1>

          <div className="col">
            <div className="card ">
              <div className="card-body">
                <h5 className="card-title text-left">Card title</h5>
                <p className="card-text text-left">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/track" className="btn btn-dark btn-block">
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

export default Track;
