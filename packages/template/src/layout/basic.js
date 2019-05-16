import React, {Component} from "react";
import { Container } from 'flux/utils'
import baseStore from '@/store/baseStore'

// test  todo sr
import Comp1 from '@/components/Comp1';
import logo from '@/assets/image/logo.svg';
import { test as testApi } from '@/service/home';
import {simpleClone} from 'x-utils/object';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

import './basic.less'


class BasicComponent extends Component {
  /**
   * super(props) or super()
   * 如果想在构造函数中访问 this.props 就要将 props 传入到 super 中
   * 不影响后面生命周期(例如:render, shouldComponentUpdate)访问 props
   */
  // constructor() {
  //     super();
  // }

  state = {
    collapsed: false,
  };

  static getStores(){
    return [
      baseStore
    ]
  }
  static calculateState(){
    return {
      store: baseStore.getState(),
      action: null,
    }

  }


  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
  // render() {
  //   return (
  //     <div className="base-layout-container">
  //       <div className="App">
  //         <div className="App-header">
  //           <img src={logo} className="App-logo" alt="logo" />
  //           <h2>Welcome to React</h2>
  //         </div>
  //
  //         <div className="test">
  //           <p className="test2">test2</p>
  //         </div>
  //         <div>basic-layout</div>
  //         <Comp1/>
  //         {this.props.children}
  //       </div>
  //
  //     </div>
  // )
  // }
}

const BasicLayout = Container.create(BasicComponent);

export default BasicLayout
