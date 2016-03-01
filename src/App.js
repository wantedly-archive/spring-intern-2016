import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    // 状態の定義
    this.state = { message: "Reactのシンプルなコンポーネントです" }
  }

  render() {
    // 見た目の定義
    return(
      <div>
        <h1>Hello, World!</h1>
        <p>{ this.state.message }</p>
      </div>
    )
  }
}
