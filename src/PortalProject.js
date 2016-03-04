import React, { Component } from 'react'

import styles from './PortalProject.css'

export default class PortalProject extends Component {

  render() {
    let project = this.props.project
    return (
      <div className={styles.base}>
        <div className={styles.label}>{ project.looking_for }</div>
        <a className={styles.linkBlock} href={`https://www.wantedly.com/projects/${project.id}`} target="_blank">
          <img className={styles.coverImage} src={project.image.i_304_124_x2} />
          <h2 className={styles.title}>{ project.title }</h2>
          <p className={styles.description}>{ `${project.description.substr(0, 70)}...` }</p>
        </a>
        <div className={styles.companyBlock}>
          <img className={styles.companyAvatar} src={project.company.avatar.s_60} />
          <h3 className={styles.companyName}>{ project.company.name }</h3>
        </div>
        <div className={styles.friendsBlock}>
          <p className={styles.userFriends}>ここで働いている知り合い</p>
          <div className={styles.userSet}>
            <img className={styles.userAvatar} src={"https://d2v9k5u4v94ulw.cloudfront.net/small_light(dw=60,dh=60,da=s,ds=s,cw=60,ch=60,cc=FFFFFF)/assets/images/213854/original/4ff5830c-9724-4b31-91a4-d1c371ab7037.png?1446280219"} />
            <img className={styles.userAvatar} src={"https://d2v9k5u4v94ulw.cloudfront.net/small_light(dw=60,dh=60,da=s,ds=s,cw=60,ch=60,cc=FFFFFF)/assets/images/13152/original/4937af9f-a3ba-4740-bb94-90b6f44844cb.png?1446107119"} />
            <img className={styles.userAvatar} src={"https://d2v9k5u4v94ulw.cloudfront.net/small_light(dw=60,dh=60,da=s,ds=s,cw=60,ch=60,cc=FFFFFF)/assets/images/133790/original/a21ef78b-68fd-4dce-a0c3-c94916bf3019.jpeg?1456597854"} />
          </div>
        </div>
      </div>
    )
  }
}
