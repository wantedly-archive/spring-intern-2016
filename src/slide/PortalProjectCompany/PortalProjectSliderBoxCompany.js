import React, { Component } from 'react'
import PortalProjectCompany from './PortalProjectCompany'
import PortalSliderCompany from './PortalSliderCompany'
import styles from './../PortalSliderBox.css'

export default class PortalProjectSliderBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let companies =  this.props.companies
        return (
            <div className={styles.PortalSliderBox}>
                <div className={styles.PortalSliderBoxTitle}>
                    {companies.title}
                </div>
                <div className={styles.PortalSliderBoxMoreButton}>
                    全てを見る
                </div>
                <PortalSliderCompany companies={companies}>
                    {
                        companies.companies.map((company) => {
                          return <PortalProjectCompany company={company} key={company.id}/>
                        })
                    }
                </PortalSliderCompany>
            </div>
        )
    }
}
