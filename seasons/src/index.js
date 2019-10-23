import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
import useLocation from "./useLocation";

const App = () => {
  const [latitude, errorMessage] = useLocation();
  if (latitude) return <SeasonDisplay lat={latitude} />;
  if (errorMessage) return <div>Error: {errorMessage}</div>;
  return <Loader message="Please accept location request..." />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
