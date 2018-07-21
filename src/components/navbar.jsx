import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <div className="badge badge-secondary">{this.props.numberOfCounts}</div>
      </nav>
    );
  }
}

export default Navbar;
