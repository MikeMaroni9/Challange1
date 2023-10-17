import React from "react";

class Increment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }


  increment() {
    this.setState((prevState, prevProps) => {
      console.log("Previous State:", prevState);
      console.log("Previous Props:", prevProps);
      return {
        count: prevState.count + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.increment()}>Increment</button>
        <p>You've clicked {this.state.count} times</p>
      </div>
    );
  }
}

export default Increment;