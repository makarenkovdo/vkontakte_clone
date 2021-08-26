import { Action } from 'redux'
import { news_ActionTypes } from '../News_Actions'

declare global {

    interface news_Action_PostNewsItem_INTF extends Action<news_ActionTypes> {
        type: news_ActionTypes.SET_POST,
        payload: news_Action_SetPostPayload_INTF
    }

    interface news_Action_SetLoadingStatus_INTF extends Action<news_ActionTypes> {
        type: news_ActionTypes.SET_LOADING_STATUS,
        payload: loadingStatus_INTF,
    }

    interface news_Action_GetNewsList_INTF extends Action<news_ActionTypes> {
        type: news_ActionTypes.FETCH_POSTS,
        payload: '',
    }

    interface news_Action_SetNewsList_INTF extends Action<news_ActionTypes> {
        type: news_ActionTypes.SET_NEWS_LIST,
        payload: news_Action_SetNewsList_Payload_INTF,
    }

    interface news_Action_SetNewsList_Payload_INTF {
        [username: string]: newsState_userNewsItems_INTF,

    }



    interface news_Action_SetPostPayload_INTF {
        text: string,
        date: Date,


    }

    // later move to another interface file








}

export { }