import React, { Component } from 'react'

export default class PortalHeader extends Component {
  constructor(props) {
    super(props)
    this.props = {
      width: 320,
      hright: 240,
      loop: 'loop',
      autoPlay: 'autoPlay'
    }
  }
  render()　{
    return (
      <div>
        <article>
          <video width={this.props.width} height={this.props.height} autoPlay>
            <source src="https://dubpy8abnqmkw.cloudfront.net/images/campaign/newgrad/sample_video.webm" type="video/webm" media="all" />
            <source src="https://dubpy8abnqmkw.cloudfront.net/images/campaign/newgrad/sample_video.mp4" type="video/mp4" media="all" />
            <p>このブラウザではビデオを再生できません。</p>
          </video>
        </article>
      </div>
    )
  }

}
