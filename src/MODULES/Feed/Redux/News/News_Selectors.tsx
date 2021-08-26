import { createSelector } from 'reselect'
import styles from './../../UI/Scss/Feed.module.scss'
import { RootStateType } from '../../../../GLOBAL/Redux/Root/Store'

//SELECTORS
export const selectorNewsItems = (state: RootStateType) => state.newsSlice.newsItems
export const selectorNewsLoadingStatus = (state: RootStateType) => state.newsSlice.newsStatus

//RESELECTORS




function mappingPosts(thisState: Array<any>) {
    //if el.id === friend.id => return posts
    //


    return (
        <div>sdf</div>
        // thisState.map((el: any) => {
        //     console.log(el);

        //     return (
        //         <div className={styles.feedItem} key={el}>
        //             {el.text}
        //         </div >)
        // })

    )

}