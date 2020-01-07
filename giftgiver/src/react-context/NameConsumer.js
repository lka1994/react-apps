import React from "react";
import NameContext from "./NameContext";

export class NameConsumer extends React.Component {
  static contextType = NameContext;
  render() {
    return <div className="name">My Name Is: {this.context}</div>;
  }
}
