import React, { Component } from 'react'

import PortalProject from './PortalProject'
import PortalSlider from './PortalSlider'

import styles from './PortalWrapper.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    // 状態の定義
    this.state = { message: "Reactのシンプルなコンポーネントです" }
  }

  componentDidMount() {
    this.fetchPortalData()
  }

  async fetchPortalData() {
    // Create headers
    let headers = new Headers()
    headers.append('Authorization', `Basic ${btoa('spring:intern_2016')}`)
    let res = await fetch("https://www.wantedlyapp.com/api/intern/portal", { headers })
    let json = await res.json()
    console.log(json)
    this.setState({
      data: json
    })
  }

  render() {
    // 見た目の定義
    let data = this.state.data
    let popularProject = data && data.data.sections[3]
    let popularNewGrad = data && data.data.sections[4]
    let popularIntern = data && data.data.sections[5]
    return(
       <div>
        { data ? (
          <div>
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
        ) : (
          <p>Now Loading...</p>
        ) }
      </div>
    )
  }
}
