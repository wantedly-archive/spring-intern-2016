import React, { Component } from 'react'
import styles from './RecruitCard.css'

export default class RecruitCard extends Component {

    render() {
        let project = this.props.project

        return (
                <section className={styles.recruitCard}>
                <header className={styles.cardHeader}>
                <ul className={styles.tag}>
                <li className={styles.tagItem}></li>
                </ul>
                <img className={styles.eyecatch}/>
                </header>
                <article className={styles.cardBody}>
                <h3 className={styles.recruitTitle}></h3>
                <p className={styles.recruitMessage}>
                lorem ipsum.
                </p>
                </article>
                <footer className={cardFooter}>
                <img className={styles.companyImg}/>
                <h4 className={styles.companyName}></h4>
                </footer>
                </section>
        )
    }
}
