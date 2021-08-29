import React from 'react'
import NewsItemsContainerUi from '../modules/feed/components/NewsItems/NewsItemsContainer'
import RightNav from '../modules/feed/components/RightNavBar/RightNavBarContainer'
import CreateNewsItemContainerUi from '../modules/feed/components/СreateNewsItem/СreateNewsItemContainer'
import Header from '../global/components/Header/HeaderContainer'
import Nav from '../global/components/Nav/NavContainer'
import styles from './../modules/feed/components/scss/feed.module.scss'
import { useEffect } from 'react'
import { useMyDispatch, useMySelector } from '../global/rootRedux/store'
import { CircularProgress } from '@material-ui/core'
import { newsGetNewsList } from '../modules/feed/redux/news/newsSlice'

const Feed = (): React.ReactElement => {
    const dispatch = useMyDispatch();

    const loadingState = useMySelector(state => state.newsSlice.newsStatus)
    const displayName = useMySelector(state => state.signInSlice.displayName)
    const isLoading = (loadingState === "LOADING")

    useEffect(() => {
        document.title = "News"
    }, []);

    useEffect(() => {
        dispatch(newsGetNewsList(displayName))
    }, [dispatch, displayName])

    return (<div className={styles.feed}>
        <RightNav />
        <CreateNewsItemContainerUi />
        {isLoading
            ? <CircularProgress />
            : <NewsItemsContainerUi
            />}
        <Nav />
        <Header />
    </div>)
}

export default Feed