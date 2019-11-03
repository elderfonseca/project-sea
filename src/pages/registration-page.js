import React, { Component } from "react";
import FormEmployees from "./../components/form-registration";
import { reset } from "redux-form";
import { connect } from "react-redux";
import { registrationSent } from "../modules/Registration";
import { Icon } from "antd";

class RegistrationPage extends Component {
  handleSubmit = (values, dispatch) => {
    dispatch(registrationSent(values));
    dispatch(reset("registrationForm"));
  };

  render() {
    const { data } = this.props;

    return (
      <React.Fragment>
        <div className="employer-register">
          <header className="header-register">
            <Icon type="arrow-left" />
            <h2>Adicionar Funcionário</h2>
          </header>
          <FormEmployees onSubmit={this.handleSubmit} />
          <div>Form data: {data ? JSON.stringify(data) : null}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(state => state.RegistratioPage)(RegistrationPage);
