import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList = () => {
    const { songs } = this.props;
    return songs.map(song => {
      return (
        <div key={song.title} className="item">
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.select(song)}>
              Select
            </button>
          </div>
          <div className="content">Song Name: {song.title}</div>
        </div>
      );
    });
  };

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

const mapDispatchToProps = { select: selectSong };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
