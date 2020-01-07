import React from "react";

const Context = React.createContext("Unknown");

export class NameContext extends React.Component {
  state = { name: "Unknown" };

  onNameChange = name => {
    this.setState({ name });
  };

  render() {
    return <Context.Provider value={{ ...this.state, onNameChange: this.onNameChange }}>{this.props.children}</Context.Provider>;
  }
}

export default Context;
