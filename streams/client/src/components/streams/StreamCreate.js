import React from "react";
import { connect } from "react-redux";
import { fetchCreateStream } from "../../actions";

import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return <StreamForm page="Create Stream" onSubmit={this.onSubmit} />;
  }
}

const mapDispatchToProps = { createStream: fetchCreateStream };

export default connect(
  null,
  mapDispatchToProps
)(StreamCreate);
