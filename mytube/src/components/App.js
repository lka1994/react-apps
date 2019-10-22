import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [], selected: [] };

  componentDidMount() {
    this.onFormSubmit("partiu poupar");
  }

  onFormSubmit = async text => {
    const response = await youtube.get("/search", {
      params: {
        q: text
      }
    });
    this.setState({ videos: response.data.items, selected: response.data.items[0] });
  };
  onVideoSelect = video => {
    this.setState({ selected: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onTextSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selected} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoClick={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
