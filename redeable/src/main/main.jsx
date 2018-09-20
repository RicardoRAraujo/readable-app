import React, { Component } from 'react'
import Menu from '../template/menu'

class Main extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Menu />
        {children}
      </div>
    )
  }
}

export default Main;