import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'
import PortalSliderBox from './slide/PortalProject/PortalProjectSliderBox'
import PortalSliderBoxCompany from './slide/PortalProjectCompany/PortalProjectSliderBoxCompany'
import styles from './styleSheet.css'


import PortalProject from './PortalProject'
import PortalSlider from './PortalSlider'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
            // 状態の定義
            /*
            console.log(this.props.params)
            if(this.props.params != undefined){
                this.setState({
                    user_id : this.props.params.user_id
                })
            }
            */
    }

    componentDidMount() {
        this.fetchPortalData()
    }
    fetchPortalData() {
        // Create headers
        let headers = new Headers()
        headers.append('Authorization', `Basic ${btoa('spring:intern_2016')}`)
        // Call API
        /*
        if (this.state.user_id != undefined) {
            let url = 'https://www.wantedlyapp.com/api/intern/portal?user_id=${this.state.user_id}'
        } else {

        }
        */
        let url = 'https://www.wantedlyapp.com/api/intern/portal'
        console.log(url)
        fetch(url, { headers })
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                console.log(json.data) // 受け取った内容がコンソールに出力される
                this.setState({
                    data: json.data
                })
            })
    }


    render() {
        let data = this.state.data
        return (
          <div>
             { data ? (
                 <div className={styles.body}>
                     <PortalSliderBox projects={this.state.data.sections[3]} />
                     <PortalSliderBoxCompany companies={this.state.data.sections[6]}/>
                     <PortalSliderBox projects={this.state.data.sections[4]}/>
                     <PortalSliderBox projects={this.state.data.sections[5]}/>
                </div>
            ) : (
              <p>Now Loading...</p>
            ) }
          </div>
        )
      }
  }
