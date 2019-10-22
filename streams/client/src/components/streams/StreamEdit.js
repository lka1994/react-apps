import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchOneStream, fetchEditStream } from "../../actions";

import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }
  onSubmit = formValues => {
    this.props.editStream(this.props.stream.id, formValues);
  };
  render() {
    if (!this.props.stream) return <div>Loading...</div>;
    return <StreamForm page="Edit Stream" onSubmit={this.onSubmit} initialValues={_.pick(this.props.stream, "title", "description")} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

const mapDispatchToProps = {
  editStream: fetchEditStream,
  getStream: fetchOneStream
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamEdit);
