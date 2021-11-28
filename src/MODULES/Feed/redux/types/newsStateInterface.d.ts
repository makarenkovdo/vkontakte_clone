declare global {

    //newsSlice

    //
    interface interfaceInitialState {
        newsItems: interfaceNewsItems,
        newsStatus: newsStatusInterface,
        postButtonVisibility: boolean
    }
    interface interfaceNewsItems {
        [key: string]: interfaceNewsItemsData
    }
    interface interfaceNewsItemsData {
        date: string,
        image: string,
        text: string,
    }

    //something haven't identyfied

    interface news_State_INTF {
        [username: string]: NewsState_userNewsItems_INTF,
        loadingStatus: loadingStatus_INTF;
    }

    interface newsStateUserNewsItemsType {
        id: number,
        text: string,
        date: Date,
    }
    //action

    interface newsPostNewsItemType {
        type: 'newsPostNewsItem',
        payload: newsPostNewsItemPayloadObjectType
    }

    // interface newsPostNewsItemPayloadType { [string, postDataType] }


    //payloads
    interface newsPostNewsItemPayloadObjectType {
        username: 'string',
        postData: postDataType
    }




    interface postDataType {
        text: string,
        date: string,
        image: string,
    }

    interface newsGetDataPayloadType {
        [username: string]: newsGetDataPayloadValueType,
    }

    interface newsGetDataPayloadValueType {
        text: string,
        date: Date,
        image: string,
    }

    //getNewsItemsSaga

    interface getNewsItemsSagaWorkerPayloadType {
        type: string,
        payload: string
    }








}

export { }