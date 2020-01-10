import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import style from "./Button.module.css";

export default class Button extends React.Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    if (this.props.href)
      window.open(this.props.href, "_blank")
    else
      toast("This site is currently under development, check back soon!");
  }

  render() {
    return (
      <button className={style.Button} onClick={this.clickHandler}>
        {this.props.children}
      </button>
    );
  }
}
