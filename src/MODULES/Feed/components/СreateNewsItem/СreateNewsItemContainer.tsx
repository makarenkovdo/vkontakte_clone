import styles from './createNewsItem.module.scss'
import React from 'react'
import { useRef } from 'react'
import { useMyDispatch, useMySelector } from "../../../../global/rootRedux/store"
import { TextareaAutosize } from '@material-ui/core';
import { Icon28Camera } from '@vkontakte/icons';
import { newsPostButtonVisibility, newsPostButtonVisibilityOff, newsPostNewsItem } from '../../redux/news/newsSlice';
import { selectorNewsLoadingStatus } from '../../redux/news/newsSelectors';

export default function CreateNewsItemContainer() {
    const inputRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
    const dispatch = useMyDispatch()
    const NewsLoadingStatus = useMySelector(selectorNewsLoadingStatus)
    const postButtonVisibility = useMySelector(state => state.newsSlice.postButtonVisibility)


    type inputHandler_INTF = () => void;

    const inputHandler: inputHandler_INTF = () => {
        const username: string = localStorage.getItem('displayName') || 'errorUser'
        const today = new Date();
        const postData = {
            text: inputRef.current?.value,
            date: `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}/${today.getHours()}/${today.getMinutes()}`,
            image: ''
        } as postDataType
        const postNewsItemPayload = {
            username: username,
            postData: postData,
        } as newsPostNewsItemPayloadObjectType
        dispatch(newsPostNewsItem(postNewsItemPayload))
    }
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
