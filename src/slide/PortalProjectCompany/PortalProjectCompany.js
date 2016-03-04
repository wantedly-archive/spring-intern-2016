import React, { Component } from 'react'
import styles from './../PortalProject.css'

export default class PortalProjectCompany extends Component {

    render () {
        let company = this.props.company
        return (
            <div className={styles.base}>
                <div className={styles.label}>{ company.industories[0] }</div>
                <div className={styles.label}>{ company.industories[1] }</div>
                    <a className={styles.linkBlock} href={`https://www.wantedly.com/company/${company.id}`} target="_blank">
                        <img className={styles.coverImage} src={company.avatar.original} />
                        <h3 className={styles.companyName}>{ company.name }</h3>
                    </a>
            </div>
        )
    }
}
