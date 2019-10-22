import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component {
  //Initializing state
  state = { latitude: null, errorMessage: "" };

  content = () => {
    const { errorMessage, latitude } = this.state;

    if (latitude) return <SeasonDisplay lat={latitude} />;

    if (errorMessage) return <div>Error: {errorMessage}</div>;

    return <Loader message="Please accept location request..." />;
  };

  componentDidMount() {
    // Getting the location
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
    console.log("Rendered");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  //React says we have to define render
  render() {
    return <div>{this.content()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
