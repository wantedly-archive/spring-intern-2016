import React, { Component } from 'react'
import PortalProject from './PortalProject';
import PortalSlider from './PortalSlider';

export default class RecommendedIntern extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <PortalSlider>
        { this.props.recommendedIntern.projects.map((project) => {
          return  <PortalProject project={project} key={project.id} />
         })}
      </PortalSlider>
    )
  }

}
