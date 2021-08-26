import styles from './Nav.module.scss'
import React from 'react'
import { Icon28Profile } from '@vkontakte/icons';
import { Icon24NewsfeedOutline } from '@vkontakte/icons';
import { Icon20MessageOutline } from '@vkontakte/icons';
import { Redirect, Route, Switch, NavLink } from 'react-router-dom';



function Nav() {

    return (<nav>
        <div className={styles.navItem}><section className={styles.icon}>
            <Icon28Profile width={19} height={19} /></section>
            <section>My profile</section></div>

        <div className={styles.navItem}><section className={styles.icon}>
            <Icon24NewsfeedOutline width={19} height={19} /></section>
            <section><NavLink to="/feed">News</NavLink></section></div>

        <div className={styles.navItem}><section className={styles.icon}>
            <Icon20MessageOutline width={19} height={19} /></section>
            <section>Messenger</section></div>

        <div className={styles.navItem}><section className={styles.icon}>
            <Icon20MessageOutline width={19} height={19} /></section>
            <section><NavLink to="/friends">Friends</NavLink></section></div>



    </nav>)
}

export default Nav