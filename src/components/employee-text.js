import React, { Component } from "react";
import Employee from "../img/employee.svg";

class EmployeeText extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="employee-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit
            suscipit porttitor. Suspendisse ex lorem, rhoncus nec ante eu,
            venenatis aliquam turpis. Nulla facilisi. Curabitur nec mattis
            dolor. Nulla finibus bibendum ligula tempus vehicula. Ut at
            tristique libero, nec efficitur dui. Aliquam erat volutpat. Fusce
            quam sem, tempus nec justo eget, luctus scelerisque velit. Nam
            sollicitudin purus urna, vitae ornare neque tincidunt vel. Proin ac
            lacinia erat, et commodo felis. Phasellus tempor tellus eu vulputate
            tempus.
          </p>
          <img src={Employee} alt="" className="employee-img"></img>
        </div>
      </React.Fragment>
    );
  }
}

export default EmployeeText;
