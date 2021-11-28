import styles from './../scss/feed.module.scss';
import NewsMappingUi from './NewsItems/NewsMapping';



function NewsItems() {
    return (
        <div className={styles.newsArea}>
            <NewsMappingUi />
        </div>
    )
}
export default NewsItems
