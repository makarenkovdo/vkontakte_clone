import styles from './CreateNewsItem.module.scss'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useMyDispatch, useMySelector } from "../../../../global/rootRedux/store"
import { Button, TextareaAutosize } from '@material-ui/core';
import { Icon28Camera } from '@vkontakte/icons';
import { news_postButtonVisibility, news_postButtonVisibilityOff, news_postNewsItem } from '../../redux/news/newsSlice';
import { selectorNewsLoadingStatus } from '../../redux/news/newsSelectors';

export default function CreateNewsItemContainer() {
    const inputRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
    const dispatch = useMyDispatch()
    const NewsLoadingStatus = useMySelector(selectorNewsLoadingStatus)
    const postButtonVisibility = useMySelector(state => state.newsSlice.postButtonVisibility)


    type inputHandler_INTF = () => void;

    const inputHandler: inputHandler_INTF = () => {
        console.log('Inside inputHandler');

        const username = localStorage.getItem('displayName')
        const today = new Date();
        const postData = {
            text: inputRef.current?.value,
            date: `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}/${today.getHours()}/${today.getMinutes()}`,
            image: ''
        }
        console.log(postData);
        dispatch(news_postNewsItem([username, postData]))
    }
    const focusHandler: inputHandler_INTF = () => {
        dispatch(news_postButtonVisibility())

    }

    const blurHandler: inputHandler_INTF = () => {
        dispatch(news_postButtonVisibilityOff())

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
                {/* <Button
                    variant="contained"
                    component="label"
                >
                    Upload File
                    <input
                        type="file"
                        hidden
                    />
                </Button> */}
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
