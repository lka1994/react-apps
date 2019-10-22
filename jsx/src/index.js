// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

const getTime = submit => {
  return submit.text  
}

// Create a react component
const App = () => {
  const submit = {text: 'Submit here'}
  //JavaScript object
  const styleBtn = {backgroundColor: 'blue', color: 'white'}
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={styleBtn}>{getTime(submit)}</button>
    </div>
  );
};

// Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
