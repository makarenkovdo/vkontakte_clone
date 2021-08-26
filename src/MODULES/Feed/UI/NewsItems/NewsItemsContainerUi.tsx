import styles from './../Scss/Feed.module.scss';
import React, { Fragment } from 'react';
import NewsMappingUi from './NewsMappingUi';



function FeedUi_PL_PostsArea() {


    return (
        <div className={styles.newsArea}>
            <NewsMappingUi />
        </div>
    )


}

export default FeedUi_PL_PostsArea