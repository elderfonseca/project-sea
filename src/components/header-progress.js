import React, { Component } from "react";
import Building from "../img/building.svg";

class HeaderProgress extends Component {
  renderSquare(square) {
    return (
      <div className="progress-group">
        <div id={"square-" + square} className="square-progress">
          <img src={Building} alt=""></img>
        </div>
        <p>ITEM 1</p>
        <p class="item-completed">CONCLUIDO</p>
      </div>
    );
  }
  render() {
    let squares = [];
    for (let i = 1; i <= 9; i++) {
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
