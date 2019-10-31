import React, { Component } from "react";
import { Layout } from "antd";
import "../scss/App.scss";
// Components
import MenuAside from "../components/menu-aside";
import HeaderProgress from "../components/header-progress";
import EmployeeText from "../components/employee-text";
import ListEmployess from "../components/list-employees";

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
            <ListEmployess />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
