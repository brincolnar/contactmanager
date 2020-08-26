import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: "",
  };

  componentDidMount() {
    // usually for fetching data
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => this.setState({ title: data.title, body: data.body }));
  }

  //   componentWillMount() {
  //     console.log("componentWillMount");
  //   }

  //   componentDidUpdate() {
  //     console.log("componentDidUpdate");
  //   }

  //   componentWillUpdate() {
  //     console.log("componentWillUpdate");
  //   }

  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log("componentWillReceiveProps...");
  //   }

  //   // will lifecycle methods are deprecated

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     console.log("getDerivedStateFromProps");
  //     return {
  //       test: "something",
  //     };
  //   }

  //   getSnapshotBeforeUpdate() {
  //     console.log("getSnapshotBeforeUpdate");
  //   }

  render() {
    const { title, body } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
