import styles from './createNewsItem.module.scss'
import React from 'react'
import { useRef } from 'react'
import { useMyDispatch, useMySelector } from "../../../global/rootRedux/store"
import { TextareaAutosize } from '@material-ui/core';
import { Icon28Camera } from '@vkontakte/icons';
import { newsPostButtonVisibility, newsPostButtonVisibilityOff, newsPostNewsItem } from '../redux/newsSlice';
import { selectorNewsLoadingStatus } from '../redux/newsSelectors';
import { Modal } from '@mui/material';

function NewsItemCreating() {
    const inputRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
    const dispatch = useMyDispatch()
    const NewsLoadingStatus = useMySelector(selectorNewsLoadingStatus)
    const postButtonVisibility = useMySelector(state => state.newsSlice.postButtonVisibility)



  
    const focusHandler: inputHandler_INTF = () => {
        dispatch(newsPostButtonVisibility())

    }

    const blurHandler: inputHandler_INTF = () => {
        dispatch(newsPostButtonVisibilityOff())

    }



    if (NewsLoadingStatus === 'LOADED' && inputRef.current?.value) {

        inputRef.current.value = ''

    }



    return (
        <span className={styles.whatsNew} onMouseLeave={blurHandler}
        >
            <section className={styles.icon}>
                <Icon28Camera width={20} height={20} />
            </section>
            <section style={{ marginLeft: 12, }}>
                <TextareaAutosize
                    ref={inputRef}
                    onMouseEnter={focusHandler}
                    minRows={4}
                    placeholder="What's new?"
                />
                {postButtonVisibility
                    ? <button
                        onMouseEnter={focusHandler}
                        className={styles.button}
                        onClick={inputHandler}
                    >Post</button>
                    : <div></div>
                }




            </section>


        </span >
    )

}

export default NewsItemCreating