import React from 'react'
import RightNav from '../modules/feed/components/RightNavBar/RightNavBarContainer'
import Header from '../global/components/Header/HeaderContainer'
import Nav from '../global/components/Nav/NavContainer'
import styles from './../modules/feed/components/scss/feed.module.scss'
import { FriendsList } from '../modules/friends/components/FriendsList'

const Friends = (): React.ReactElement => {
    return (<div className={styles.feed}>
        <RightNav />
        {/* {isLoading
            ? <CircularProgress />
            : */}
        <FriendsList />

        <Nav />
        <Header />



    </div>)
}

export default Friends