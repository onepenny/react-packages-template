import React, {Component} from "react";
import { Container } from 'flux/utils'
import baseStore from '@/store/baseStore'

// test  todo sr
import Comp1 from '@/components/Comp1';
import logo from '@/assets/image/logo.svg';
import { test as testApi } from '@/service/home';
import {simpleClone} from 'x-utils/object';

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

  static getStores() {
    return [
      baseStore,
    ]
  }

  static calculateState() {
    return {
      store: baseStore.getState(),
      action: null,
    }
  }
  componentDidMount(){
    console.log('testAPI', testApi)
    testApi({a:1})
      .then(res => {console.log('then', res)})
      .catch(e => console.log('catch', e))

    console.log('simpleClone', simpleClone({a: 1}));
  }
  render() {

    return (
      <div className="base-layout-container">
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>

          <div className="test">
            <p className="test2">test2</p>
          </div>
          <div>basic-layout</div>
          <Comp1/>
          {this.props.children}
        </div>

      </div>

    )
  }
}

const BasicLayout = Container.create(BasicComponent);

export default BasicLayout
