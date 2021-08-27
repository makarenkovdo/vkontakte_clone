import styles from './../scss/feed.module.scss';
import NewsMappingUi from './NewsMapping';



export default function NewsItemsContainerUi() {


    return (
        <div className={styles.newsArea}>
            <NewsMappingUi />
        </div>
    )


}

