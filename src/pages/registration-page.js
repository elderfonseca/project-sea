import React, { Component } from "react";
import FormEmployees from "./../components/form-registration";
import { reset } from "redux-form";
import { connect } from "react-redux";
import { registrationSent } from "../modules/Registration";
import { Link } from "react-router-dom";
import { Icon } from "antd";

class RegistrationPage extends Component {
  handleSubmit = (values, dispatch) => {
    dispatch(registrationSent(values));
    dispatch(reset("registrationForm"));
  };

  render() {
    return (
      <React.Fragment>
        <div className="employer-register employees-content">
          <header className="header-register header-employees">
            <Link to="/">
              <Icon type="arrow-left" />
            </Link>
            <h2>Adicionar Funcionário</h2>
          </header>
          <FormEmployees onSubmit={this.handleSubmit} />
        </div>
      </React.Fragment>
    );
  }
}

export default connect(state => state.RegistratioPage)(RegistrationPage);
