import React from 'react'
import NewsItemsContainerUi from '../MODULES/Feed/UI/NewsItems/NewsItemsContainerUi'
import RightNav from '../MODULES/Feed/UI/RightNavBar/UI_RightNavBar'
import Stories from '../MODULES/Feed/UI/Stories/UI_Stories'
import CreateNewsItemContainerUi from '../MODULES/Feed/UI/CreateNewsItem/CreateNewsItemContainerUi'
import Header from '../GLOBAL/UI/Header/Header'
import Nav from '../GLOBAL/UI/Nav/Nav'
import styles from './../MODULES/Feed/UI/Scss/Feed.module.scss'

import { FriendsList } from '../MODULES/Friends/UI/FriendsListUi'

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