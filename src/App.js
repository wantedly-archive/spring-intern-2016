import React, { Component } from 'react'
import PortalProject from './PortalProject.js'
import PortalSlider from './PortalSlider.js'
import PortalHeader from './PortalHeader.js'

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
    // 見た目の定義
    let data = this.state.data
    let popularProject = data && data.data.sections[3]
    return(
      <div>
        <PortalHeader/>
        { data ? (
          <PortalSlider>
            { popularProject.projects.map((project) => {
              return <PortalProject project={project} key={project.id} />
            }) }
          </PortalSlider>

        ) : (
          <p>Now Loading...</p>
        ) }
      </div>
    )
  }
}
