import React, { Component } from 'react'

import styles from './PortalSlider.css'

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

  onClickPrev() {
    this.setState({
      currentIndex: this.state.currentIndex - 3
    })
  }

  onClickNext() {
    this.setState({
      currentIndex: this.state.currentIndex + 3
    })
  }

  render() {
    return (
        <div className={styles.base}>
          <div className={styles.selecter}>
            <a onClick={this.onClickPrev.bind(this)}>PREV   </a>
            <a onClick={this.onClickNext.bind(this)}>  NEXT</a>
          </div>
          { this.props.children.map((child, index) => {
            return <div style={this.calcStyle(index - this.state.currentIndex)} key={index} className={styles.item}>
            { child }</div>
          }) }
        </div>
    )
  }

}
