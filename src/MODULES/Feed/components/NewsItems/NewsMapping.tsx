import styles from './newsItems.module.scss'
import { RootStateType } from '../../../../global/rootRedux/store'
import { useMySelector } from '../../../../global/rootRedux/store'
import {
    Icon28CommentOutline,
    Icon28LikeOutline,
    Icon28ShareOutline,
} from '@vkontakte/icons'
import { createSelector } from 'reselect'

export default function NewsMappingUi(): React.ReactElement {
    const selectorNew = (state: RootStateType) => state.newsSlice.newsItems
    const newsItemsState = useMySelector((state) => state.newsSlice.newsItems)
    console.log(newsItemsState)

    const state = useMySelector((state) => state)
    const loadingState = useMySelector((state) => state.newsSlice.newsStatus)

    function mappingPosts(state: interfaceNewsItems) {
        const object2 = {
            welcomePost: {
                date: '2021',
                text: 'welcome',
                image: '',
            },
        }
        let stateArray = Object.values(object2)

        newsItemsState
            ? (stateArray = Object.values(newsItemsState))
            : console.log('false')

        console.log(stateArray)

        return stateArray.reverse().map((el: postDataType, i: number) => {
            return (
                <div className={styles.feedItem} key={i}>
                    <section className={styles.newsItemHeader}>
                        <div className={styles.avatar}>
                            <img
                                src='https://source.unsplash.com/random/50x50'
                                alt='some'
                            />{' '}
                        </div>
                        <div className={styles.title}>
                            <b>Andrew</b>
                        </div>
                        <div className={styles.date}>{el.date}</div>
                        <div className={styles.menu}>...</div>
                    </section>
                    <div className={styles.text}>{el.text}</div>
                    <div className={styles.image}>
                        <img
                            src={`https://source.unsplash.com/random/${Math.trunc(
                                Math.random() * 100 + 380,
                            )}x500   `}
                            alt='some'
                        />
                    </div>
                    <section className={styles.newsItemFooter}>
                        <div className={styles.likeBox}>
                            <span className={styles.like}>
                                <Icon28LikeOutline />
                            </span>
                            <div className={styles.likeText}>Нравится</div>
                        </div>
                        <span>
                            <Icon28CommentOutline />
                        </span>
                        <div className={styles.shareBox}>
                            <span>
                                <Icon28ShareOutline />
                            </span>
                            <div className={styles.shareCounter}>5</div>
                        </div>
                    </section>
                </div>
            )
        })
    }
    const reselectorNewsItemsMapping = createSelector(
        selectorNew,
        (selectorNew) => mappingPosts(selectorNew),
    )
    const memoItems = reselectorNewsItemsMapping(state)

    return (
        <div>
            {loadingState === 'LOADED' ? (
                // ? mappingPosts(stateArray)
                memoItems
            ) : (
                <div>Loading</div>
            )}
        </div>
    )
}
