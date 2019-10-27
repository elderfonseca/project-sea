import React, { Component } from "react";
import { Layout } from "antd";
import "../scss/App.scss";
import MenuAside from "../components/menu-aside";
import HeaderProgress from "../components/header-progress";

const { Header, Footer, Sider, Content } = Layout;

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
          <Content></Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
