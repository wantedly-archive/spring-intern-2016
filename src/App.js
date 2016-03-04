import React, { Component } from 'react'

import PortalProject from './PortalProject'
import PortalSlider from './PortalSlider'
import PortalEyecatches from './PortalEyecatches'
import PortalHeader from './PortalHeader.js'
import styles from './PortalWrapper.css'

export default class App extends Component {
  constructor(props) {
    super(props)
      // 状態の定義
      this.state = { message: "Reactのシンプルなコンポーネントです" }
  }

  componentDidMount(){
    this.fetchPortalData()
  }

  // async これは非同期の関数です(宣言)
  async fetchPortalData() {
    // Create headers
    let headers = new Headers()
    headers.append('Authorization', `Basic ${btoa('spring:intern_2016')}`)
    // Call API
    let res = await fetch("https://www.wantedlyapp.com/api/intern/portal", { headers })
    let json = await res.json()
    console.log(json) // 受け取った内容がコンソールに出力される
    this.setState({
      data: json
    })
  }

  render() {
    let data = this.state.data

    if (data === undefined) {
      return <div>Now Loading...</div>
    }

    console.log(data) // 受け取った内容がコンソールに出力される

    let popularProject3 = data.data.sections[3]
    let popularProject = data && data.data.sections[3]
    let popularNewGrad = data && data.data.sections[4]
    let popularIntern = data && data.data.sections[5]

    return (
          <div>
            <PortalHeader/>
            <div className={styles.base}>
              <p>ベスト新着の募集</p>
              <PortalSlider>
                { popularProject.projects.map((project) => {
                  return <PortalProject project={project} key={project.id} />
                }) }
              </PortalSlider>
            </div>

            <div className={styles.base}>
              <p>新卒採用の募集</p>
              <PortalSlider>
                { popularNewGrad.projects.map((project) => {
                  return <PortalProject project={project} key={project.id} />
                }) }
              </PortalSlider>
            </div>

            <div className={styles.base}>
              <p>新卒インターンの募集</p>
              <PortalSlider>
                { popularIntern.projects.map((project) => {
                  return <PortalProject project={project} key={project.id} />
                }) }
              </PortalSlider>
            </div>
          </div>
        ) 
  }

}


