import styles from './newsItems.module.scss'
import { RootStateType } from '../../../../global/rootRedux/store'
import { useMySelector } from '../../../../global/rootRedux/store'
import { Icon28CommentOutline, Icon28LikeOutline, Icon28ShareOutline } from '@vkontakte/icons'
import { createSelector } from 'reselect'



export default function NewsMappingUi(): React.ReactElement {
    const selectorNew = (state: RootStateType) => state.newsSlice.newsItems
    const newsItemsState = useMySelector(state => state.newsSlice.newsItems)
    const state = useMySelector(state => state)
    const loadingState = useMySelector(state => state.newsSlice.newsStatus)





    function mappingPosts(state: any) {
        const object2 = {
            date: '2021',
            text: 'welcome',
            image: ''
        }
        const stateArray = Object.entries(object2)
        console.log(stateArray);


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

            {loadingState === "LOADED"
                // ? mappingPosts(stateArray)
                ? memoItems
                : <div>Loading</div>
            }



        </div>
    )


}
