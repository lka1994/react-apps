import React from "react";
import { connect } from "react-redux";
import history from "../../history";
import Modal from "../Modal";
import { fetchOneStream, fetchDeleteStream } from "../../actions";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button className="ui button negative" onClick={() => this.props.deleteStream(id)}>
          Delete
        </button>
        <Link className="ui button" to="/">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    const title = "Are you sure you want to delete this stream ";
    if (!this.props.stream) return title.concat("?");
    else return title.concat(`with tile: ${this.props.stream.title} ?`);
  }

  render() {
    return <Modal title="Delete Stream" content={this.renderContent()} actions={this.renderActions()} onDismiss={() => history.push("/")} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

const mapDispatchToProps = {
  deleteStream: fetchDeleteStream,
  getStream: fetchOneStream
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamDelete);
