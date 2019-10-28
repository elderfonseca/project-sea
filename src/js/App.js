import React, { Component } from "react";
import { Layout } from "antd";
import "../scss/App.scss";
import MenuAside from "../components/menu-aside";
import HeaderProgress from "../components/header-progress";
import EmployeeText from "../components/employee-text";

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
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
