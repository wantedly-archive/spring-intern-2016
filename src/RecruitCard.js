import React, { Component } from 'react'
import styles from './RecruitCard.css'

export default class RecruitCard extends Component {
    constructor(props) {
        super(props)
        this.orange = styles.orange + " " + styles.tagItem
    }

    render() {
        let project = this.props.project

        return (
                <section className={styles.recruitCard}>
                <header className={styles.cardHeader}>
                <ul className={styles.tag}>
                <li className={this.orange}>{project.looking_for}</li>
                </ul>
                <img className={styles.eyecatch} src={project.image.i_304_124_x2}/>
                </header>
                <article className={styles.cardBody}>
                <h3 className={styles.recruitTitle}>{ project.title }</h3>
                <p className={styles.recruitMessage}>
                { `${project.description.substr(0, 70)}...` }
                </p>
                </article>
                <footer className={styles.cardFooter}>
                <img className={styles.companyImg} src={project.company.avatar.s_60} />
                <h4 className={styles.companyName}>{project.company.name}</h4>
                </footer>
                </section>
        )
    }
}
