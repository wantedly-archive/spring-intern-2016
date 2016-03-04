import React, { Component } from 'react'
import styles from './../PortalProject.css'

export default class PortalSlider extends Component {
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
                slideBoxWidth: this.state.windowWidth-40
            })
        }
        else {
            this.setState({
                columnNum: 1
            })
            this.setState({
                slideBoxWidth: this.state.windowWidth-40
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
        // if (this.state.windowWidth > 1100) {
        //     return {
        //         transform: `translate(${index * 320}px, 0)`
        //     }
        // }
        // else {
        //
        //     return {
        //         transform: `translate(${(this.state.windowWidth-40-this.state.columnNum*320)/2 + index * 320}px, 0)`
        //     }
        // }
        return {

        }

    }

    calcVisibility(index) {
        let plusTranslate = 0
        if (this.state.windowWidth > 1100){
            plusTranslate = 0
        }
        else {
            plusTranslate = (this.state.windowWidth - 40 - this.state.columnNum*320)/2
        }
        if(index >= this.state.currentIndex && index < this.state.currentIndex + this.state.columnNum ){
            return {
                visibility : 'visible',
                transform: `translate(${10+plusTranslate +(index - this.state.currentIndex) * 320}px, 0)`
            }
        }
        else {
            return {
                visibility : 'hidden',
                transform: `translate(${10+plusTranslate + (index - this.state.currentIndex) * 320}px, 0)`
            }
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
            <div style={{width: this.state.windowWidth - 40, overflow: 'hidden', margin: '0 auto'}}>
                <a onClick={this.onClickPrev.bind(this)} >前へ</a>
                <a onClick={this.onClickNext.bind(this)} >次へ</a>
                <div className={styles.slideBox} style={{width: this.state.slideBoxWidth + 'px'}}>
                { this.props.children.map((child, index) => {
                    return <div style={this.calcVisibility(index)} key={index} className={styles.item} >
                        { child }
                    </div>
                }) }
                </div>

            </div>
        )
    }
}
