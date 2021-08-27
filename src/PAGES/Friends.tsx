import React from 'react'
import NewsItemsContainerUi from '../modules/feed/components/NewsItems/NewsItemsContainer'
import RightNav from '../modules/feed/components/RightNavBar/RightNavBarContainer'
import Stories from '../modules/feed/components/stories/storiesUi'
import CreateNewsItemContainerUi from '../modules/feed/components/СreateNewsItem/СreateNewsItemContainer'
import Header from '../global/components/Header/HeaderContainer'
import Nav from '../global/components/Nav/NavContainer'
import styles from './../MODULES/Feed/UI/Scss/Feed.module.scss'
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