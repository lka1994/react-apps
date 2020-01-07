import React from "react";
import ReactDOM from "react-dom";
import { NameConsumer } from "./react-context";

ReactDOM.render(<NameConsumer />, document.querySelector("#root"));
