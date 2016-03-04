import React, { Component } from 'react'
import styles from './../PortalProject.css'

export default class PortalSliderCompany extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            windowWidth: window.innerwidth,
            columnNum: 3,
            slideBoxWidth: 960
        }
    }

    handleResize() {
        console.log(window.innerWidth)
        this.setState({
            windowWidth: window.innerWidth
        })
        if (this.state.windowWidth > 1100){
            this.setState({
                columnNum: 3
            })
            this.setState({
                slideBoxWidth: 960
            })
        }
        else if(this.state.windowWidth > 800) {
            this.setState({
                columnNum: 2
            })
            this.setState({
                slideBoxWidth: 640
            })
        }
        else if(this.state.windowWidth > 500) {
            this.setState({
                columnNum: 1
            })
            this.setState({
                slideBoxWidth: 320
            })
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this));
    }

    calcStyle(index) {
        return {
            transform: `translate(${index * 320}px, 0)`
        }
    }

    onClickPrev() {
        this.setState({
            currentIndex: this.state.currentIndex - this.state.columnNum
        })
    }
    onClickNext() {
        this.setState({
        currentIndex: this.state.currentIndex + this.state.columnNum
        })
    }

    render() {
        return (
            <div>
                <a onClick={this.onClickPrev.bind(this)} className={styles.slideBoxButton_pre}>
                    <button aria-labelledby="previous">
                    </button>
                </a>
                <div className={styles.slideBox} style={{width: this.state.slideBoxWidth + 'px'}}>
                { this.props.children.map((child, index) => {
                    return <div style={this.calcStyle(index - this.state.currentIndex)} key={index} className={styles.item}>
                        { child }
                    </div>
                }) }
                </div>
                <a onClick={this.onClickNext.bind(this)} className={styles.slideBoxButton_next}>次へ</a>
            </div>
        )
    }
}
