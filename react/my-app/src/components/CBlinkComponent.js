import React, { Component, createRef } from "react";

export default class CBlinkComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showText: true,
    };
    this.intervalRef = createRef();
  }
  componentDidMount() {
    this.intervalRef.current = setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalRef.current);
  }

  render() {
    return <div> {this.state.showText ? this.props.text : null}</div>;
  }
}
