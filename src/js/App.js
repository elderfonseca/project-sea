import React, { Component } from "react";
import { Layout } from "antd";
import "../scss/App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "../modules";
// Components
import MenuAside from "../components/menu-aside";
import HeaderProgress from "../components/header-progress";
import EmployeeText from "../components/employee-text";
// Pages
import ListEmployess from "../pages/list-employees";
import RegistrationPage from "../pages/registration-page";

const { Header, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Sider>
          <MenuAside />
        </Sider>
        <Layout>
          <Header>
            <HeaderProgress />
          </Header>
          <Content>
            <EmployeeText />
            <BrowserRouter>
              <Switch>
                <Route path="/" exact={true} component={ListEmployess} />
                <Provider store={store}>
                  <Route
                    path="/adicionar-funcionario"
                    component={RegistrationPage}
                  />
                </Provider>
              </Switch>
            </BrowserRouter>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
