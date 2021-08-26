import styles from './CreateNewsItem.module.scss'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useMyDispatch, useMySelector } from "../../../../GLOBAL/Redux/Root/Store"
import { TextareaAutosize } from '@material-ui/core';
import { Icon28Camera } from '@vkontakte/icons';
import { news_postNewsItem } from '../../Redux/News/News_Slice';
import { selectorNewsLoadingStatus } from '../../Redux/News/News_Selectors';

export default function CreateNewsItemContainerUi() {
    const inputRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;
    const dispatch = useMyDispatch()
    const NewsLoadingStatus = useMySelector(selectorNewsLoadingStatus)


    type inputHandler_INTF = () => void;

    const inputHandler: inputHandler_INTF = () => {
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

    if (NewsLoadingStatus === 'LOADED') {
        inputRef.current.value = ''

    }



    return (
        <span className={styles.whatsNew}>
            <section className={styles.icon}>
                <Icon28Camera width={20} height={20} />
            </section>
            <section style={{ marginLeft: 12, }}>
                <TextareaAutosize
                    ref={inputRef}
                    minRows={4}
                    placeholder="Что у вас нового?"
                />
                <button className={styles.button} onClick={inputHandler}>Опубликовать</button>


            </section>


        </span>
    )

}
