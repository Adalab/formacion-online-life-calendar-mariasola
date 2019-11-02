import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Link to="/config" className="App-header">
        <button className="App-header">
          <span className="App-header-span">Add a mood</span>
        </button>
      </Link>
    );
  }
}

export default Header;
