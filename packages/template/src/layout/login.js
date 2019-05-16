import React, {Component} from "react";
import { Container } from 'flux/utils'
import baseStore from '@/store/baseStore'

class LoginComponent extends Component {
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

  render() {

    return (
      <div className="base-layout-container">
        <div>login-layout</div>
        {this.props.children}
      </div>

    )
  }
}

const Login = Container.create(LoginComponent);

export default Login
