import React, { Component } from "react";
import BuildingBlue from "../img/building-blue.svg";
import Write from "../img/write.svg";
import Tree from "../img/tree.svg";
import Alert from "../img/alert.svg";
import Page from "../img/page.svg";
import Undo from "../img/undo.svg";
import People from "../img/people.svg";

class MenuAside extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="white-bar"></div>
        <div className="side-menu">
          <div className="item-menu">
            <img src={BuildingBlue} alt=""></img>
          </div>
          <div className="item-menu">
            <img src={Write} alt=""></img>
            <div className="item-selected"></div>
          </div>
          <div className="item-menu">
            <img src={Tree} alt=""></img>
          </div>
          <div className="item-menu">
            <img src={Alert} alt=""></img>
            <div className="item-menu notification">
              <img src={Page} className="img-page" alt=""></img>
            </div>
          </div>
          <div className="item-menu">
            <img src={Undo} alt=""></img>
          </div>
          <div className="item-menu">
            <img src={People} alt=""></img>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MenuAside;
