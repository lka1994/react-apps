import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    debugger;
    this.props.getAllStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.curUserId)
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
  }

  renderStreams() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="big middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">
              {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn)
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button green">
            Create Stream
          </Link>
        </div>
      );
  }
  render() {
    return (
      <div className="ui container">
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderStreams()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { streams: Object.values(state.streams), curUserId: state.auth.userId, isSignedIn: state.auth.isSignedIn };
};

const mapDispatchToProps = {
  getAllStreams: fetchAllStreams
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamList);
