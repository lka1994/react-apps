import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { text: "" };

  onSubmit = e => {
    e.preventDefault();
    this.props.onTextSubmit(this.state.text);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.text}
              placeholder="Put a text"
              onChange={e => {
                this.setState({ text: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
