import React, { Component } from 'react'

export default class Applications extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      { this.props.children.map((child, index) => {
        return <div key={index}>
          { child }
        </div>
      }) }
      </div>
    )
  }

}
