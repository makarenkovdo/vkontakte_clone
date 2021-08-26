import styles from './Nav.module.scss'
import React from 'react'
import { Icon28Profile } from '@vkontakte/icons';
import { Icon24NewsfeedOutline } from '@vkontakte/icons';
import { Icon20MessageOutline } from '@vkontakte/icons';


function Nav() {

    return (<nav>
        <div className={styles.navItem}><section className={styles.icon}>
            <Icon28Profile width={19} height={19} /></section>
            <section>Моя страница</section></div>

        <div className={styles.navItem}><section className={styles.icon}>
            <Icon24NewsfeedOutline width={19} height={19} /></section>
            <section>Новости</section></div>

        <div className={styles.navItem}><section className={styles.icon}>
            <Icon20MessageOutline width={19} height={19} /></section>
            <section>Мессенджер</section></div>



    </nav>)
}

export default Nav