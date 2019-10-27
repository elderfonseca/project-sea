import React, { Component } from "react";
import Building from "../img/building.svg";

class HeaderProgress extends Component {
  renderSquare(square) {
    return (
      <div id={"square-" + square} className="square-progress">
        <img src={Building} alt=""></img>
        <p>Teste</p>
      </div>
    );
  }
  render() {
    let squares = [];
    for (let i = 0; i <= 9; i++) {
      squares.push(i);
    }
    return (
      <React.Fragment>
        {squares.map(this.renderSquare)}
        <div className="horizontal-line"></div>
      </React.Fragment>
    );
  }
}

export default HeaderProgress;
