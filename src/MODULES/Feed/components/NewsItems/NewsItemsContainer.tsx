import styles from './../Scss/Feed.module.scss';
import React, { Fragment } from 'react';
import NewsMappingUi from './NewsMapping';



export default function NewsItemsContainerUi() {


    return (
        <div className={styles.newsArea}>
            <NewsMappingUi />
        </div>
    )


}

