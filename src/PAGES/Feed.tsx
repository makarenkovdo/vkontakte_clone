import React from 'react'
import NewsItemsContainerUi from '../MODULES/Feed/UI/NewsItems/NewsItemsContainerUi'
import RightNav from '../MODULES/Feed/UI/RightNavBar/UI_RightNavBar'
import Stories from '../MODULES/Feed/UI/Stories/UI_Stories'
import CreateNewsItemContainerUi from '../MODULES/Feed/UI/CreateNewsItem/CreateNewsItemContainerUi'
import Header from '../GLOBAL/UI/Header/Header'
import Nav from '../GLOBAL/UI/Nav/Nav'
import styles from './../MODULES/Feed/UI/Scss/Feed.module.scss'
import { useEffect } from 'react'
import { useMyDispatch, useMySelector } from '../GLOBAL/Redux/Root/Store'
import { CircularProgress } from '@material-ui/core'
import { news_getNewsList } from '../MODULES/Feed/Redux/News/News_Slice'

const Feed = (): React.ReactElement => {
    const dispatch = useMyDispatch();
    useEffect(() => {
        document.title = "News"
    }, []);
    const newsItemsState = useMySelector(state => state.newsSlice.newsItems)
    const loadingState = useMySelector(state => state.newsSlice.newsStatus)
    const displayName = useMySelector(state => state.signInSlice.displayName)
    const isLoading = (loadingState == "LOADING")


    useEffect(() => {
        console.log('inside useEffect');

        dispatch(news_getNewsList([displayName]))
    }
        , []) //как только зарендерится страница - грузить JSON! он ьудет в Networks



    return (<div className={styles.feed}>
        <RightNav />
        <CreateNewsItemContainerUi />
        {/* <Stories /> */}
        {isLoading
            ? <CircularProgress />
            :
            <NewsItemsContainerUi
            />}

        <Nav />
        <Header />



    </div>)
}

export default Feed