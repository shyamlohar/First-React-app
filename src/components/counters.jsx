import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <br />
        {this.props.counters.map(counter => {
          return (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default Counters;
