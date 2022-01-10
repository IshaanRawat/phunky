import React from "react";
import ReactDOM from "react-dom";

class Portal extends React.Component {
  el: HTMLDivElement;
  rootElement: HTMLElement | null;

  constructor(props: {}) {
    super(props);
    this.el = document.createElement("div");
    this.rootElement = document.getElementById("root");
  }

  componentDidMount() {
    this.rootElement?.appendChild(this.el);
  }

  componentWillUnmount() {
    this.rootElement?.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Portal;
