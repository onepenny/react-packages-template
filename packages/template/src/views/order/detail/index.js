import React, { Component } from 'react'
import { Container } from 'flux/utils'

import * as OrderDetail from './store'
import * as Action from './action'
import {
  Part1
} from './view'

const Layout = (props) => {
  return (
    <div className="order-detail-container">
      <div>order-detail</div>
      <Part1 />
    </div>
  )
}

class DetailContainer extends Component {
  static getStores() {
    return [
      OrderDetail.Store,
    ]
  }

  static calculateState() {
    return {
      store: OrderDetail.Store.getState(),
      action: Action,
    }
  }

  componentWillMount() {
    // setTimeout(() => {
    //   Action.init({ state })
    // }, 0)
  }

  render() {
    return <Layout {...this.state} {...this.props} />
  }
}

export default Container.create(DetailContainer)
