import styles from './../../../Feed/UI/Scss/Feed.module.scss'
import { RootStateType, AppDispatch } from '../../../../GLOBAL/Redux/Root/Store'
import { Modal } from '@material-ui/core'
import { useMyDispatch, useMySelector } from '../../../../GLOBAL/Redux/Root/Store'
import { selectorNewsItems, } from '../../Redux/News/News_Selectors'
import { Icon28CommentOutline, Icon28LikeOutline, Icon28Profile, Icon28ShareOutline } from '@vkontakte/icons'
import { createSelector } from 'reselect'





// import { selectNewsItems } from '../../Redux/News/News_Slice'



export default function NewsMappingUi(): React.ReactElement {
    const selectorNew = (state: RootStateType) => state.newsSlice.newsItems
    const newsItemsState = useMySelector(state => state.newsSlice.newsItems)
    const state = useMySelector(state => state)
    const newsItemsState2 = useMySelector(selectorNew)

    const loadingState = useMySelector(state => state.newsSlice.newsStatus)
    const stateArray = Object.values(newsItemsState) || ['loading']





    function mappingPosts(stateArray: any) {
        stateArray = Object.values(newsItemsState) || ['loading']

        return (stateArray.reverse().map((el: any, i: number) => {

            return (
                <div className={styles.feedItem} key={i}>
                    <div className={styles.avatar}><img src="https://source.unsplash.com/random/50x50" alt="some" /> </div>
                    <div className={styles.title}><b>Andrew</b></div>
                    <div className={styles.date}>{el.date}</div>
                    <div className={styles.menu}>...</div>
                    <div className={styles.text}>{el.text}</div>
                    <div className={styles.image}><img src={`https://source.unsplash.com/random/${Math.trunc(Math.random() * 100 + 380)}x500   `} alt="some" /></div>
                    <div className={styles.likesCounter}>7</div>
                    <div className={styles.like}><Icon28LikeOutline /> </div>
                    <div className={styles.commentRepost}><span><Icon28CommentOutline /><Icon28ShareOutline /></span></div>
                    <div className={styles.views}>100</div>
                </div >)
        })
        )
    }
    const reselectorNewsItemsMapping = createSelector(selectorNew, (selectorNew) => mappingPosts(selectorNew))
    const memoItems = reselectorNewsItemsMapping(state)





    return (
        <div>

            {loadingState == "LOADED"
                // ? mappingPosts(stateArray)
                ? memoItems
                : <div>Loading</div>
            }



        </div>
    )


}
