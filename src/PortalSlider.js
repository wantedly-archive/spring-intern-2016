import React, { Component } from 'react'
import styles from './PortalSlider.css'


export default class PortalSlider extends Component {
    constructor(props) {
        super(props)
        this.state = { currentIndex: 0 }
        this.items = 3
    }

    calcStyle(index) {
        return {
            transform: `translate(${index * 320}px, 0)`
        }
    }

    onClickPrev() {
        if ( this.state.currentIndex != 0){
            this.setState({
                currentIndex: this.state.currentIndex - this.items
            })
        }
    }

    onClickNext() {
      if (this.state.currentIndex < this.props.children.length - this.items) {
        this.setState({
            currentIndex: this.state.currentIndex + this.items
        })
      }
    }


    render() {
        return (
                <div className={styles.base}>
                <a onClick={this.onClickPrev.bind(this)}>Prev</a>
                <a onClick={this.onClickNext.bind(this)}>Next</a>
                { this.props.children.map((child, index) => {
                    return <div style={this.calcStyle(index - this.state.currentIndex)} key={index} className={styles.item}>
                        { child }
                    </div>
                }) }
            </div>
        )
    }
}
