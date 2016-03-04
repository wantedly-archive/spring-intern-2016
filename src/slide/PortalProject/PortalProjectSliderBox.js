import React, { Component } from 'react'
import PortalProject from './PortalProject'
import PortalSlider from './PortalSlider'
import styles from './../PortalSliderBox.css'

export default class PortalProjectSliderBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let projects =  this.props.projects
        return (<div className={styles.PortalSliderBox}>
            <div className={styles.PortalSliderBoxTitle}>
                {projects.title}
            </div>
            <div className={styles.PortalSliderBoxMoreButton}>
                全てを見る
            </div>
            <PortalSlider projects={projects}>
                {
                    projects.projects.map((project) => {
                      return <PortalProject project={project} key={project.id}/>
                    })
                }
            </PortalSlider>
        </div>)
    }
}
