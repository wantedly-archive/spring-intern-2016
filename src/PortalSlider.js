import React, { Component } from 'react'

export default class PortalSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
  }

  calcStyle(index) {
    return {
      transform: `translate(${index * 320}px, 0)`
    }
  }

  render() {
    return (
      <div>
        { this.props.children.map((child, index) => {
          return <div style={this.calcStyle(index - this.state.currentIndex)} key={index}>
            { child }
          </div>
        }) }
      </div>
    )
  }

}
